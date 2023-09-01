import { useState } from "react";
const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

import Button from "../buttons/Button";

function ContactForm() {
  const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/62d60920-32f3-11ee-b436-9790aa40195d";
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <form
        className="mt-5 lg:mt-2"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
      >
             <div className="mb-3 lg:basis-1/2">
            <label>
              <span className="text-slLightBlue font-montserrat text-[18px] font-medium">Email</span>
              <input
                name="email"
                type="email"
                className="
bg-slBeige
rounded-3xl
border-2
border-slGold


            block
            w-full
            mt-1
            px-2
font-montserrat
        font-normal
        text-slBlack
            focus:ring
            focus:ring-slGold
          "
                required
              />
            </label>
          </div>
          <div className="mb-3 lg:basis-1/2">
            <label>
              <span className="text-slLightBlue font-montserrat text-[18px] font-medium">Name</span>
              <input
                type="text"
                name="name"
                className="

                bg-slBeige
                rounded-3xl
                border-2
                border-slGold
                
                
                            block
                            w-full
                            mt-1
                            px-2
                font-montserrat
                        font-normal
                        text-slBlack
                            focus:ring
                            focus:ring-slGold
          "
                required
              />
            </label>
          </div>

          <div className="mb-3 lg:basis-1/2">
            <label>
              <span className="text-slLightBlue font-montserrat text-[18px] font-medium">Subject</span>
              <input
                type="text"
                name="subject"
                className="
                bg-slBeige
                rounded-3xl
                border-2
                border-slGold
                
                
                            block
                            w-full
                            mt-1
                            px-2
                font-montserrat
                        font-normal
                        text-slBlack
                            focus:ring
                            focus:ring-slGold
          "
                required
              />
            </label>
          </div>

       
        <div className="mb-3">
          <label>
            <span class="text-slLightBlue font-montserrat text-[18px] font-medium">Message</span>
            <textarea
              name="message"
              className="
              bg-slBeige
              rounded-3xl
              border-2
              border-slGold
              
              
                          block
                          w-full
                          mt-1
                          px-2
                          py-2
              font-montserrat
                      font-normal
                      text-slBlack
                          focus:ring
                          focus:ring-slGold
          "
              rows="6"
              required
            ></textarea>
          </label>
        </div>

        <div class="mb-6 text-right">
<Button text="Send"/>
        </div>
        <div></div>
      </form>
    </>
  );
}

export default ContactForm;
