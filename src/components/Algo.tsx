import type { StepFrame } from "../utils/types/StepFrame";

interface InputAreaProps {
  inputValue: string;
  setInputValue: (val: string) => void;
  steps: { [key: string]: StepFrame[] };
  currentStepIndex: { [key: string]: number };
  speed: number;
  setSpeed: (val: number) => void;
  handleSort: () => void;
}

const Algo: React.FC<InputAreaProps> = ({
  inputValue,
  setInputValue,
  steps,
  handleSort,
  currentStepIndex,
  speed,
  setSpeed,
}) => {
  return (
    <div className="p-10">
      <div className="bg-[var(--svg-bg)] w-[70rem] h-[40rem] grid grid-rows-6 gap-4 p-6 rounded-xl shadow-xl">
        <div className="flex gap-4 justify-between items-center w-full">
          <select className="flex-1 px-6 py-4 rounded-lg shadow-md bg-[var(--bg)] text-xl text-[var(--text)]">
            <option value={"AutoDetect"}>Auto Detect</option>
            <option value={"numbers"}>Numbers</option>
            <option value={"letters"}>Letters</option>
            <option value={"words"}>Words</option>
          </select>

          <button
            onClick={handleSort}
            className="flex-1 px-6 py-4 rounded-lg transition shadow-md bg-[var(--bg)] text-xl text-[var(--text)]"
          >
            Start Sort
          </button>
          <div className="flex flex-col items-center bg-[var(--bg)] flex-1 px-4 py-1.5 rounded-lg">
            <span className="text-lg text-[var(--text)]">
              Speed: {speed / 1000} Seconds
            </span>
            <input
              type="range"
              min={100}
              max={2000}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="custom-slider transition shadow-md appearance-none mt-2 w-full"
            ></input>
          </div>
        </div>

        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="row-span-2 w-full h-full p-4 text-xl rounded-md border bg-[var(--bg)] text-[var(--text)]"
          placeholder="Type Words, Letters, or Numbers"
        />

        <div className="row-span-3 grid grid-cols-3 w-full grid-rows-2 gap-2">
          {Object.keys(steps).map((algoName) => {
            const currentFrame = steps[algoName]?.[currentStepIndex[algoName]];
            if (!currentFrame) return null;

            return (
              <div
                key={algoName}
                className="w-full p-4 text-xl rounded-md bg-[var(--bg)] text-[var(--text)] overflow-auto"
              >
                <pre className="text-xl text-[var(--text)]">
                  <strong>{algoName}</strong> — Step:{" "}
                  {currentStepIndex[algoName]}
                  <br />[
                  {currentFrame.arr.map((val, i) => {
                    const isHighlighted = i === currentFrame.highlightIndex;
                    return (
                      <span
                        key={i}
                        style={{
                          color: isHighlighted ? "red" : "var(--text)",
                        }}
                      >
                        {val}
                        {i < currentFrame.arr.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                  ]
                </pre>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Algo;
