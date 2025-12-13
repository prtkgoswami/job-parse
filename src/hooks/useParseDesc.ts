import { useState } from "react";

type ParsedData = {
  title: string;
  company: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  jobType: "Remote" | "Onsite" | "Hybrid";
  jobLink: string;
  compensation: string;
  responsibilities: string[];
  requirements: string[];
  otherImportantData: string[];
};

type ParseDescHookResponse = {
  data: ParsedData | undefined;
  isLoading: boolean;
  error: Error | undefined;
  parseDesc: (desc: string) => void;
};

const useParseDesc = (): ParseDescHookResponse => {
  const [data, setData] = useState<ParsedData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const parseDesc = async (desc: string) => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/parseDescription", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobDesc: desc,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const respObj = await response.json();

      setData(respObj.response);
    } catch (err) {
      console.error("Failed to parse Description", err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    parseDesc,
  };
};

export default useParseDesc;
