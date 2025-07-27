import { useEffect } from "react";
import InputArea from "../components/InputArea";
import { useSortControls } from "../utils/hooks/useSortControls";
import HeapSort from "../Algoruthms/HeapSort";

const HeapSortPage = () => {
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
    const sortSteps = HeapSort(rawItems);
    setSteps(sortSteps);
    setCurrentStepIndex(0);
    setisAnimating(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center z-30 relative items-center ">
      <div className="text-5xl text-[var(--text)]">Heap Sort</div>
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
          Heap Sort is a comparison-based sorting algorithm that uses a binary
          heap data structure. A heap is like a tree where the parent is always
          larger (in a max heap) or smaller (in a min heap) than its children.
          Heap Sort builds a max heap from the input data and then repeatedly
          swaps the root (the largest element) with the last element, shrinking
          the heap and restoring the heap property until everything is sorted.
        </p>

        <p>
          It's more efficient than simpler algorithms like Bubble Sort or
          Selection Sort for larger data sets. Heap Sort is also notable because
          it sorts in place and doesn't require extra memory — but it's not
          stable, meaning the original order of equal elements isn't preserved.
        </p>

        <div>
          <h3 className="font-bold">As simple as I can make it</h3>
          <p>
            Heap Sort can be a bit confusing but here's how I understand it: it
            builds something called a "max heap," which basically means the
            biggest number is always at the top. It then swaps that biggest
            number with the last element in the array and moves it into a sorted
            section. This process repeats, rebuild the heap, move the biggest to
            the end, until the whole array is sorted.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Average Case Complexity</h3>
          <p>
            O(n log n) — Building the heap takes linear time, and each removal
            and heapify operation takes log n time.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Best Case Complexity</h3>
          <p>
            O(n log n) — Heap Sort doesnt adapt to the input; even a sorted
            array goes through the full heap-building and sorting process.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Worst Case Complexity</h3>
          <p>
            O(n log n) — Even in the worst case, Heap Sort performs
            consistently, making it more reliable than some other algorithms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeapSortPage;
