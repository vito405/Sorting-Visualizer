import { useEffect } from "react";
import BubbleSort from "../Algoruthms/BubbleSort";
import InputArea from "../components/InputArea";
import { useSortControls } from "../utils/hooks/useSortControls";

const BubbleSortPage = () => {
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
    const sortSteps = BubbleSort(rawItems);
    setSteps(sortSteps);
    setCurrentStepIndex(0);
    setisAnimating(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center z-30 relative items-center ">
      <div className="text-5xl text-[var(--text)]">Bubble Sort</div>
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        steps={steps}
        handleSort={handleSort}
        currentStepIndex={currentStepIndex}
        speed={speed}
        setSpeed={setSpeed}
      />
      <div className="w-full h-[200vh] border-t space-y-6 z-10 p-30 bg-[image:var(--bg-main)] text-[var(--text)] text-3xl mt-15">
        <p>
          Bubble Sort is a simple sorting algorithm that repeatedly steps
          through a list, compares adjacent elements, and swaps them if they are
          in the wrong order. This process is repeated until the list is fully
          sorted. The name “Bubble” comes from the way smaller or larger
          elements “bubble” to the top of the list with each pass. Although easy
          to understand and implement, Bubble Sort is not very efficient for
          large datasets.
        </p>

        <p>
          Bubble Sort is most useful for educational purposes and for small or
          nearly sorted datasets where its simplicity can be advantageous. It
          can be effective when you have a list that is almost sorted because it
          can stop early if no swaps are needed during a pass, making it faster
          than other more complex algorithms in this specific scenario. However,
          for larger or more random datasets, more advanced algorithms like
          Quick Sort or Merge Sort are preferred.
        </p>
        <div>
          <h3 className="font-bold">As simple as I can Make it</h3>{" "}
          <p>
            Bubble Sort starts at the first element of the array and compares it
            to the next one. If the next element is smaller, it swaps them. This
            process continues all the way through the array. It keeps doing this
            over and over, and the biggest number "bubbles" up to the end of the
            array — like a bubble rising to the top.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Average Case Complexity</h3>
          <p>
            O(n²) — Bubble Sort compares and swaps adjacent elements in multiple
            passes, resulting in quadratic time for typical unsorted lists.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Best Case Complexity</h3>
          <p>
            O(n) — When the list is already sorted, Bubble Sort can detect no
            swaps are needed and finish after one pass.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Worst Case Complexity</h3>
          <p>
            O(n²) — When the list is sorted in reverse order, Bubble Sort makes
            the maximum number of swaps and comparisons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortPage;
