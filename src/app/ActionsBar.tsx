type Props = {
  disableParseDesc: boolean;
  onParseDesc: () => void;
  onReset: () => void;
};

const ActionsBar = ({ disableParseDesc, onParseDesc, onReset }: Props) => {
  return (
    <div className="flex gap-4 justify-between px-5 py-3 border-b border-stone-600 relative">
      <div className="flex gap-4">
        <button
          type="button"
          className="px-4 py-2 border border-stone-800 dark:border-stone-300 disabled:cursor-not-allowed rounded-lg hover:bg-stone-700 hover:text-stone-300 hover:dark:bg-stone-300 hover:dark:text-stone-800 duration-200 transition-colors ease-in-out cursor-pointer"
          onClick={onParseDesc}
          disabled={disableParseDesc}
        >
          Parse Description
        </button>
        <button
          type="button"
          className="px-4 py-2 border border-stone-800 dark:border-stone-300 rounded-lg hover:bg-stone-700 hover:text-stone-300 hover:dark:bg-stone-300 hover:dark:text-stone-800 duration-200 transition-colors ease-in-out cursor-pointer"
          onClick={onReset}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ActionsBar;
