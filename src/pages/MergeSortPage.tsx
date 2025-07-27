import { useEffect } from "react";
import InputArea from "../components/InputArea";
import { useSortControls } from "../utils/hooks/useSortControls";
import MergeSort from "../Algoruthms/MergeSort";

const MergeSortPage = () => {
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
  } = useSortControls();

  useEffect(() => {
    if (!isAnimating || steps.length === 0) return;

    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setisAnimating(false);
          return prev;
        }
      });
    }, speed);
  }, [isAnimating, steps, speed]);

  const handleSort = () => {
    const rawItems = inputValue
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const sortSteps = MergeSort(rawItems);
    setSteps(sortSteps);
    setCurrentStepIndex(0);
    setisAnimating(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center z-30 relative items-center ">
      <div className="text-5xl text-[var(--text)]">Merge Sort</div>
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        steps={steps}
        currentStepIndex={currentStepIndex}
        speed={speed}
        setSpeed={setSpeed}
        handleSort={handleSort}
      />
      <div className="w-full h-[200vh] border-t space-y-6 z-10 p-30 bg-[image:var(--bg-main)] text-[var(--text)] text-3xl mt-15">
        <p>
          Merge Sort is a highly efficient, comparison-based sorting algorithm
          that follows the Divide and Conquer paradigm. It works by recursively
          splitting a list into halves until each sublist has one element, then
          merges those sublists back together in sorted order. The merging
          process ensures the resulting list is sorted at each step.
        </p>

        <p>
          Merge Sort is stable, predictable, and performs well even on large
          datasets. It's especially useful when sorting linked lists or working
          with data too large to fit in memory, since it accesses elements
          sequentially. While it does require additional memory for the merging
          process, its performance is consistent and often preferable for
          large-scale sorting needs.
        </p>
        <div>
          <h3 className="text-bold">As simple as I can make it</h3>
          <p>
            Merge Sort works by splitting the array into two halves, starting
            from the full array. Then it splits each half again, and keeps going
            until every part is just one element. It always finishes splitting
            one side completely (usually the left) before moving to the other.
            After that, it starts merging those single elements back together in
            the correct order, combining small sorted chunks into bigger sorted
            ones until the whole array is sorted.
          </p>
        </div>

        <div>
          <h3 className="text-bold">Average Case Complexity</h3>
          <p>
            O(n log n) — Merge Sort always divides the list into halves and
            merges them, resulting in logarithmic depth with linear merging at
            each level.
          </p>
        </div>

        <div>
          <h3 className="text-bold">Best Case Complexity</h3>
          <p>
            O(n log n) — Even when the list is already sorted, Merge Sort still
            performs its full recursive split and merge process.
          </p>
        </div>

        <div>
          <h3 className="text-bold">Worst Case Complexity</h3>
          <p>
            O(n log n) — Merge Sort maintains its performance in all scenarios,
            including reversed or completely random lists, making it very
            reliable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MergeSortPage;
