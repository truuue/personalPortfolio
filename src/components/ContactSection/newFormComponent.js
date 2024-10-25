const NewFormComponent = ({ onSendClick }) => {
  return (
    <div className="flex size-full h-[662px] flex-col items-center justify-center">
      {/* header */}
      <div className="-ml-[1px] mt-12 flex h-20 w-[293px] items-end justify-between rounded-t-3xl">
        <div className="relative left-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/Noah.JPG"
            alt="Noah"
            className="size-10 rounded-full object-cover"
          />
          <p className="text-sm text-white">{`Noah >`}</p>
        </div>

        {/* Ajout d'une div vide pour maintenir l'équilibre */}
        <div className="w-6"></div>
      </div>

      {/* chat */}
      <div className="flex h-4/5 w-11/12 items-center justify-center">
        <div className="flex size-full flex-col">
          <div className="flex h-1/3 w-full flex-col items-end justify-end">
            <div className="mr-4 mt-10 flex h-8 w-52 items-center justify-end rounded-3xl bg-green-600 p-4">
              <p className="text-pretty text-white">Don't be shy, text me!</p>
            </div>

            <div className="mr-4 mt-[3px] flex h-8 w-20 items-center justify-end rounded-3xl bg-green-600 p-4">
              <p className="text-pretty text-white">noeuil..</p>
            </div>
          </div>

          <div className="flex h-1/3 w-full flex-col items-start justify-center">
            <div className="ml-4 flex h-8 w-28 items-center justify-start rounded-3xl bg-black/20 p-4">
              <p className="text-pretty text-white">But, how ?</p>
            </div>
          </div>

          <div className="flex h-1/3 w-full flex-col items-end justify-start">
            <div className="mr-4 flex h-12 w-52 items-center justify-end rounded-xl bg-green-600 p-4">
              <p className="text-pretty text-white">
                Just by clicking on the send button.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* input */}
      <div className="-ml-[0.5px] mb-2 flex h-20 w-[293px] items-center justify-center text-white">
        <input
          disabled
          type="text"
          placeholder="message"
          className="mr-2 rounded-full border border-white/10 bg-white/50 px-2 py-1 text-white dark:bg-black/50"
        />
        <button
          className="rounded-full bg-white p-2 dark:bg-black/50"
          onClick={onSendClick}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewFormComponent;
