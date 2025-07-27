import { useEffect } from "react";
import InputArea from "../components/InputArea";
import { useSortControls } from "../utils/hooks/useSortControls";
import SelectionSort from "../Algoruthms/SelectionSort";

const SelectionSortPage = () => {
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
    const sortSteps = SelectionSort(rawItems);
    setSteps(sortSteps);
    setCurrentStepIndex(0);
    setisAnimating(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center z-30 relative items-center ">
      <div className="text-5xl text-[var(--text)]">Selection Sort</div>
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
          Selection Sort is a simple comparison-based sorting algorithm. It
          works by dividing the list into a sorted and an unsorted part. It
          repeatedly finds the smallest (or largest) element from the unsorted
          section and moves it to the end of the sorted section. This process is
          repeated until the entire list is sorted.
        </p>

        <p>
          Although Selection Sort is easy to implement and understand, it is not
          very efficient on large datasets. It does not adapt to the data in any
          way and always performs the same number of comparisons, even if the
          array is already sorted.
        </p>

        <div>
          <h3 className="font-bold">As simple as I can make it</h3>
          <p>
            it gose through the array finds the smallest element and puts it at
            the end
          </p>
        </div>

        <div>
          <h3 className="font-bold">Average Case Complexity</h3>
          <p>
            O(n²) — Selection Sort always performs the same number of
            comparisons, regardless of the initial order of elements.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Best Case Complexity</h3>
          <p>
            O(n²) — Even when the array is already sorted, Selection Sort will
            still compare every element to every other.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Worst Case Complexity</h3>
          <p>
            O(n²) — In the worst case (reverse order), the algorithm still
            performs the maximum number of comparisons and swaps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectionSortPage;
