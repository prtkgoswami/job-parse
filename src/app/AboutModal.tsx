import Modal from "@/components/Modal";
import Link from "next/link";
import React from "react";

const JOBTRACKR_LINK = "https://jobtrack.pratikgoswami.dev/";

type Props = {
  isVisible: boolean;
  theme: string;
  onClose: () => void;
};

const AboutModal = ({ isVisible, theme, onClose }: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      modalClasses="md:w-2/3 max-h-[95%]"
      bodyClasses="px-10 pb-10 flex flex-col gap-5"
      title="About"
    >
      <p className="leading-relaxed">
        ParseJob helps you quickly extract structured data from
        job postings in a standardized JSON format.
      </p>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">What it does?</h2>
        <p className="leading-relaxed">
          Simply paste any job description from LinkedIn, Wellfound, or other
          job boards, and our AI-powered parser will extract key information
          including:
        </p>
        <ul className="list-inside list-disc">
          <li>Job title and company</li>
          <li>Location and work arrangement (Remote/Hybrid/Onsite)</li>
          <li>Compensation details</li>
          <li>Responsibilities and requirements</li>
          <li>Additional relevant information</li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Why use this?</h2>
        <p className="leading-relaxed">
          The extracted JSON can be easily consumed by job tracking tools and
          applications. Perfect for importing job data into tools like{" "}
          <Link
            href={JOBTRACKR_LINK}
            target="_blank"
            className="pb-0.5 border-b-2 border-stone-300 dark:border-stone-800"
          >
            JobTrackr
          </Link>{" "}
          to organize your job search.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Privacy & Cost:</h2>
        <p className="leading-relaxed">
          This tool uses your own OpenAI API key, so your data stays between you
          and OpenAI. You control the costs (typically less than $0.001 per job
          description with GPT-4o-mini).
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">
          Built for job seekers who want to
        </h2>
        <ul className="list-inside list-disc">
          <li>Track multiple applications efficiently</li>
          <li>Export job data to spreadsheets or tracking tools</li>
          <li>Maintain a structured database of opportunities</li>
          <li>
            Integrate with tools like{" "}
            <Link
              href={JOBTRACKR_LINK}
              target="_blank"
              className="pb-0.5 border-b-2 border-stone-300 dark:border-stone-800"
            >
              JobTrackr
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">
          Like the Project? Have Questions? Feedback?
        </h2>
        <p className="leading-relaxed">
          Feel free to contact{" "}
          <Link
            href="https://www.pratikgoswami.dev/"
            target="_blank"
            className="pb-0.5 border-b-2 border-stone-300 dark:border-stone-800"
          >
            Pratik Goswami
          </Link>
          .
        </p>
      </section>
    </Modal>
  );
};

export default AboutModal;
