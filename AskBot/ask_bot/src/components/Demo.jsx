import React, { useState } from "react";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import generateAnswer from "../api/googleGemeni";
const Demo = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["GENERATE_ANSWER"],
    mutationFn: () => generateAnswer(question),
    onSuccess: (data) => {
      setAnswer(data.answer);
      setQuestion("");
    },
    onError: (error) => {
      console.log(`${error.response.data}`);
    },
  });

  return (
    <section className="w-full h-72   flex flex-col items-center gap-y-2 py-2">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative flex justify-center items-center w-[60%] h-12 "
      >
        {/*Input space*/}
        <div className="w-full h-[80%] flex justify-center items-center  flex-row gap-x-1  ">
          {isPending && (
            <div
              class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>
          )}
          <input
            type="text"
            value={question}
            onChange={handleQuestion}
            required
            placeholder="You'r question"
            className="w-[95%] h-full bg-[#EAEAEA] font-inter pl-2 text-gray-900 text-[0.9rem] rounded-md shadow-sm shadow-gray-400 outline-none "
          />
          <button
            type="submit"
            onClick={mutate}
            className="px-3 h-full bg-[#EAEAEA] border border-gray-800 rounded-md shadow-sm shadow-gray-400"
          >
            <MdSubdirectoryArrowLeft color="black" size={18} />
          </button>
        </div>
      </form>
      {/*Result Space*/}
      <div className="w-[60%] h-72  px-2 py-2 rounded-md overflow-y-auto font-inter text-[1rem] bg-zinc-100 bg-opacity-10 text-[#EAEAEA]">
        <p>{answer}</p>
      </div>
    </section>
  );
};

export default Demo;
