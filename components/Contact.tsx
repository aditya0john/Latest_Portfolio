import React, { useState } from "react";
import axios from "axios";
import PopoverForm, {
  PopoverFormButton,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon,
  PopoverFormSeparator,
  PopoverFormSuccess,
} from "./SkipperUI/popover-form";

type FormState = "idle" | "loading" | "success";

function Contact() {
  const [numberCopied, setNumberCopied] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyPhoneNumber = () => {
    const num = "+91 6396050728";

    if (numberCopied) {
      alert("Phone number already copied");
      return;
    } else {
      navigator.clipboard
        .writeText(num)
        .then(() => {
          alert("Phone number copied");
          setNumberCopied(true);
          if (confirm("DO YOU WANT TO OPEN THIS NUMBER ?")) {
            window.open("tel:" + num, "_self");
          }
        })
        .catch((error) => {
          alert("Failed to copy phone number: " + error.message);
          console.error(error);
        });
    }
  };

  const handleCopyClick = () => {
    copyPhoneNumber();
  };

  const submit = async () => {
    const response = await axios.post("/api/sendMail", {
      email: details.email,
      name: details.name,
      message: details.message,
    });

    if (response.status === 200) {
      setFormState("success");
      alert("Mail Sent Successfully");
    } else {
      alert("Failed to send mail");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col gap-6 items-center justify-center overflow-hidden font-serif">
      <PopoverForm
        title="feedback"
        open={open}
        height="300px"
        setOpen={setOpen}
        showCloseButton={formState !== "success"}
        showSuccess={formState === "success"}
        openChild={
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="flex flex-col gap-6"
          >
            <div>
              <textarea
                autoFocus
                onChange={(e) =>
                  setDetails({ ...details, message: e.target.value })
                }
                className="bg-white outline-none lg:min-h-32 text-black rounded-md p-2 w-full change placeholder-black/[0.4]"
                placeholder="Write your feedback here..."
              />
              <div className="relative flex h-2 items-center px-[10px]">
                <PopoverFormSeparator />
                <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
                  <PopoverFormCutOutLeftIcon />
                </div>
                <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                  <PopoverFormCutOutRightIcon />
                </div>
              </div>
              <input
                type="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                className="bg-white outline-none text-black rounded-md p-2 w-full change placeholder-black/[0.4]"
                placeholder="E-mail"
              />
            </div>
            <div className="relative flex h-12 items-center px-[10px]">
              <PopoverFormSeparator />
              <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
                <PopoverFormCutOutLeftIcon />
              </div>
              <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                <PopoverFormCutOutRightIcon />
              </div>
              <PopoverFormButton
                text={"submit"}
                loading={formState === "loading"}
              />
            </div>
          </form>
        }
        successChild={
          <PopoverFormSuccess
            title="Feedback Received"
            description="Thank you for supporting our project!"
          />
        }
      />

      <div className="flex flex-col w-[60vw] gap-3">
        <div className="noise rounded-lg w-full ">
          <ul className="text-2xl font-bold uppercase flex justify-center p-2">
            contact
          </ul>
          <hr className="border border-neutral-400" />
          <ul className="wrapper">
            <button onClick={handleCopyClick}>
              <li className="icon Telephone">
                <span className="tooltip">Telephone</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <i className="fab fa-facebook-f"></i>
                </span>
              </li>
            </button>
            <button>
              <li className="icon email">
                <span className="tooltip">E-mail</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <i className="fab fa-twitter"></i>
                </span>
              </li>
            </button>
          </ul>
        </div>

        <div className="noise p-2 rounded-lg w-full ">
          <ul className="text-2xl font-bold uppercase flex justify-center p-2">
            follow
          </ul>
          <hr className="border border-neutral-400" />
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                  stroke="black"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <i className="fab fa-facebook-f"></i>
              </span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="black"
                >
                  <path
                    fill="currentColor"
                    d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                  />
                </svg>
                <i className="fab fa-twitter"></i>
              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="black" strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                    />
                    <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m17.5 6.51l.01-.011"
                    />
                  </g>
                </svg>
                <i className="fab fa-instagram"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
