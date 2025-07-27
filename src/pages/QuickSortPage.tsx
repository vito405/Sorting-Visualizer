import { useEffect } from "react";
import InputArea from "../components/InputArea";
import { useSortControls } from "../utils/hooks/useSortControls";
import QuickSort from "../Algoruthms/QuickSort";

const QuickSortPage = () => {
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
    const sortSteps = QuickSort(rawItems);
    setSteps(sortSteps);
    setCurrentStepIndex(0);
    setisAnimating(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center z-30 relative items-center ">
      <div className="text-5xl text-[var(--text)]">Quick Sort</div>
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
          Quick Sort is a highly efficient, divide-and-conquer sorting algorithm
          that works by selecting a "pivot" element from the list and
          partitioning the other elements into two sub-arrays — those less than
          the pivot and those greater. It then recursively applies the same
          process to the sub-arrays. This results in a fully sorted list once
          all partitions are combined.
        </p>

        <p>
          Quick Sort is widely used in practice due to its average-case
          efficiency and relatively low memory usage compared to algorithms like
          Merge Sort. It is most effective on large, unordered datasets. When
          implemented with optimizations like median-of-three pivot selection or
          in-place partitioning, it performs exceptionally well. However, its
          worst-case time complexity can be poor if a bad pivot is consistently
          chosen (e.g., always picking the first or last element in a sorted
          array).
        </p>
        <div>
          <h3 className="text-bold">As simple as I can make it</h3>
          <p>
            Quick Sort starts by picking the first, middle, and last elements of
            the array. It finds the median (middle value) of those three to use
            as a pivot. Then it goes through the array, putting smaller elements
            into a new "left" array and larger elements into a new "right"
            array. It then repeats this process on each of those arrays until
            everything is sorted and combined into a final array.
          </p>
        </div>

        <div>
          <h3 className="text-bold">Average Case Complexity</h3>
          <p>
            O(n log n) — Quick Sort splits the array into balanced partitions in
            most cases, resulting in logarithmic depth and linear work per
            level.
          </p>
        </div>

        <div>
          <h3 className="text-bold">Best Case Complexity</h3>
          <p>
            O(n log n) — When the pivot consistently divides the array into
            nearly equal halves, Quick Sort performs at optimal efficiency.
          </p>
        </div>

        <div>
          <h3 className="text-bold">Worst Case Complexity</h3>
          <p>
            O(n²) — If the pivot selection is poor (e.g., always choosing the
            smallest or largest value), the partitions become unbalanced,
            degrading to quadratic time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickSortPage;
