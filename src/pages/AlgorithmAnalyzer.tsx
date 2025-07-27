import { useEffect } from "react";
import { useAlgoControls } from "../utils/hooks/useAlgoControls";
import Algo from "../components/Algo";
import QuickSort from "../Algoruthms/QuickSort";
import MergeSort from "../Algoruthms/MergeSort";
import HeapSort from "../Algoruthms/HeapSort";
import BubbleSort from "../Algoruthms/BubbleSort";
import SelectionSort from "../Algoruthms/SelectionSort";
import InsertionSort from "../Algoruthms/InsertionSort";
import type { StepFrame } from "../utils/types/StepFrame";

type StepMap = { [key: string]: StepFrame[] };
type IndexMap = { [key: string]: number };
type AnimMap = { [key: string]: boolean };

const AlgorithmAnalyzer = () => {
  const {
    inputValue,
    setInputValue,
    steps,
    setSteps,
    currentStepIndex,
    setCurrentStepIndex,
    isAnimating,
    setisAnimating,
    speed,
    setSpeed,
  } = useAlgoControls();

  const defaultInput = "5,3,8,4,2";

  useEffect(() => {
    const rawItems = defaultInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    setInputValue(defaultInput);

    const results: StepMap = {
      QuickSort: QuickSort(rawItems),
      MergeSort: MergeSort(rawItems),
      HeapSort: HeapSort(rawItems),
      BubbleSort: BubbleSort(rawItems),
      SelectionSort: SelectionSort(rawItems),
      InsertionSort: InsertionSort(rawItems),
    };

    setSteps(results);

    const initialIndexes: IndexMap = {};
    Object.keys(results).forEach((algo) => {
      initialIndexes[algo] = 0;
    });
    setCurrentStepIndex(initialIndexes);

    const initialAnimationFlags: AnimMap = {};
    Object.keys(results).forEach((algo) => {
      initialAnimationFlags[algo] = false;
    });
    setisAnimating(initialAnimationFlags);
  }, [setInputValue, setSteps, setCurrentStepIndex, setisAnimating]);

  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];
    const stepsMap = steps as StepMap;

    Object.entries(isAnimating).forEach(([algoName, animating]) => {
      if (!animating || !stepsMap[algoName]) return;

      const interval = setInterval(() => {
        setCurrentStepIndex((prev) => {
          const current = prev[algoName] ?? 0;
          const nextIndex = current + 1;

          if (nextIndex >= stepsMap[algoName].length) {
            clearInterval(interval);
            setisAnimating((prevAnim) => ({
              ...prevAnim,
              [algoName]: false,
            }));
            return prev;
          }

          return {
            ...prev,
            [algoName]: nextIndex,
          };
        });
      }, speed);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [isAnimating, steps, speed, setCurrentStepIndex, setisAnimating]);

  const handleSort = () => {
    const rawItems = inputValue
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const results: StepMap = {
      QuickSort: QuickSort(rawItems),
      MergeSort: MergeSort(rawItems),
      HeapSort: HeapSort(rawItems),
      BubbleSort: BubbleSort(rawItems),
      SelectionSort: SelectionSort(rawItems),
      InsertionSort: InsertionSort(rawItems),
    };

    setSteps(results);

    const initialIndexes: IndexMap = {};
    const initialAnimationFlags: AnimMap = {};

    Object.keys(results).forEach((algo) => {
      initialIndexes[algo] = 0;
      initialAnimationFlags[algo] = true;
    });

    setCurrentStepIndex(initialIndexes);
    setisAnimating(initialAnimationFlags);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center z-30 relative items-center ">
      <div className="text-5xl text-[var(--text)]">Algorithm Analyzer</div>
      {Object.keys(steps).length > 0 &&
        (() => {
          const fastestAlgorithm = Object.entries(steps).reduce(
            (acc, [algo, frames]) => {
              if (!frames) return acc;
              if (!acc || frames.length < acc.frames.length) {
                return { algo, frames };
              }
              return acc;
            },
            null as null | { algo: string; frames: StepFrame[] }
          );

          return fastestAlgorithm ? (
            <div className="col-span-3 text-center text-xl mt-4 text-[var(--text)]">
              <strong>Fastest Algorithm:</strong> {fastestAlgorithm.algo} (
              {fastestAlgorithm.frames.length - 1} steps)
            </div>
          ) : null;
        })()}

      <Algo
        inputValue={inputValue}
        setInputValue={setInputValue}
        steps={steps}
        currentStepIndex={currentStepIndex}
        speed={speed}
        setSpeed={setSpeed}
        handleSort={handleSort}
      />
      <div className="w-full min-h-screen border-t space-y-10 z-10 p-20 bg-[image:var(--bg-main)] text-[var(--text)] text-3xl mt-15">
        <h2 className="text-4xl font-bold">Sorting Algorithm Analyzer</h2>

        <p>
          This tool lets you explore how different sorting algorithms work by
          running them side by side. You can input your own numbers and watch
          how each algorithm progresses step by step. Its designed to help you
          visually understand the differences in speed, behavior, and logic.
        </p>

        <div>
          <h3 className="font-bold">What's Happening Under the Hood</h3>
          <p>
            Each algorithm runs separately using the same input. At every step,
            you can see how it rearranges the list, which numbers it's looking
            at, and which ones it's moving. Some finish faster, some take more
            steps — and now you can see why.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Why Use This?</h3>
          <p>
            Its hard to really "get" sorting algorithms just by reading code.
            This visual breakdown helps you actually see them in motion — which
            ones more efficient, how they handle duplicates, and what makes each
            one unique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmAnalyzer;
