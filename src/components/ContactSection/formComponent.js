import { useState } from "react";

const FormComponent = ({ form, sendEmail }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex h-[662px] w-[270px] flex-col items-center justify-evenly"
    >
      <div className="flex w-full flex-col items-center justify-evenly space-y-6">
        <input
          type="text"
          name="from_name"
          placeholder="Nom"
          className="h-10 w-full rounded-lg border-2 p-2 text-sm shadow transition-all duration-300 focus:border-primary/70 focus:outline-none"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Email"
          className="h-10 w-full rounded-lg border-2 p-2 text-sm shadow transition-all duration-300 focus:border-primary/70 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="h-32 w-full resize-none rounded-lg border-2 p-2 text-sm shadow transition-all duration-300 focus:border-primary/70 focus:outline-none"
          required
        ></textarea>
        <button
          type="submit"
          disabled={isLoading}
          className="flex h-10 w-full items-center justify-center rounded-lg border-2 bg-primary/5 p-2 text-sm text-primary/40 shadow transition-all duration-300 hover:bg-primary/10 hover:text-primary/50 dark:text-black dark:hover:bg-primary/50 dark:hover:text-white"
        >
          {isLoading ? (
            <div className="flex size-8 items-center justify-center">
              <svg
                className="size-8 animate-spin"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                <path
                  fill="#000"
                  d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
