"use client";
import useParseDesc from "@/hooks/useParseDesc";
import React, { useState } from "react";
import ActionsBar from "./ActionsBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSpinner } from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  const [descText, setDescText] = useState("");
  const { data, isLoading, error, parseDesc } = useParseDesc();
  const { theme } = useTheme();

  const handleParseDesc = () => {
    if (!descText) return;
    parseDesc(descText);
  };

  const handleReset = () => {
    setDescText("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(data));
    } catch (err) {
      console.error("Could not copy text");
    }
  };

  return (
    <main className="flex flex-col grow h-full px-3">
      <ActionsBar
        disableParseDesc={!descText.trim()}
        onParseDesc={handleParseDesc}
        onReset={handleReset}
      />
      <div className="flex grow">
        <div className="w-full p-3 ">
          <textarea
            className="w-full h-screen resize-none border border-stone-600 bg-stone-400 dark:bg-stone-900 rounded-lg focus-visible:outline-none p-3 placeholder:text-stone-600 placeholder:dark:text-stone-400 overflow-"
            placeholder="Paste Description Here"
            value={descText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescText(e.target.value)
            }
          />
        </div>
        <div className="w-full flex justify-center m-3 overflow-auto relative border border-stone-600 rounded-lgz-10">
          {!error && !isLoading && !data && (
            <div className="w-full h-full flex justify-center items-center text-3xl font-semibold text-stone-400 dark:text-stone-600 select-none">
              Parsed JSON will be displayed here
            </div>
          )}
          {!error && isLoading && (
            <div className="w-full h-full flex flex-col gap-4 justify-center items-center text-stone-500">
              <FontAwesomeIcon
                icon={faSpinner}
                size="4x"
                className="animate-spin"
              />
              <p className="text-2xl font-semibold">Parsing Description...</p>
            </div>
          )}
          {error && (
            <div className="w-full h-full flex justify-center items-center text-2xl font-extralight italic text-red-600 dark:text-red-500/60">
              ERR: Error in Parsing Description
            </div>
          )}
          {!isLoading && !error && data && (
            <>
              <SyntaxHighlighter
                language="json"
                style={theme === "dark" ? oneDark : oneLight}
                customStyle={{
                  margin: 0,
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  height: "100vh",
                }}
              >
                {JSON.stringify(data, null, 2)}
              </SyntaxHighlighter>
              <button
                type="button"
                className="cursor-pointer text-1xl w-10 aspect-square border border-stone-300 rounded-lg hover:bg-stone-300 hover:text-stone-800 duration transition-colors ease-in-out absolute top-9 right-9 z-20"
                onClick={handleCopy}
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
