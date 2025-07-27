import { useEffect } from "react";
import InputArea from "../components/InputArea";
import { useSortControls } from "../utils/hooks/useSortControls";
import InsertionSort from "../Algoruthms/InsertionSort";

const InsertionSortPage = () => {
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
    const sortSteps = InsertionSort(rawItems);
    setSteps(sortSteps);
    setCurrentStepIndex(0);
    setisAnimating(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center z-30 relative items-center ">
      <div className="text-5xl text-[var(--text)]">Insertion Sort</div>
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
          Insertion Sort is a straightforward sorting algorithm that builds the
          final sorted list one item at a time. It takes each element and places
          it into its correct position relative to the ones before it.
        </p>

        <p>
          Its efficient for small or nearly sorted datasets, but not ideal for
          large or random data sets due to its quadratic time complexity. Still,
          it's easy to implement and can outperform more complex algorithms on
          small inputs.
        </p>

        <div>
          <h3 className="font-bold">As simple as I can make it</h3>
          <p>
            It starts with the second element and checks if its smaller than the
            one before it. If it is, it moves to the front. Then it does the
            same with the next element comparing it to the ones before and
            sliding it into the right spot. It keeps doing this until the whole
            array is sorted.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Average Case Complexity</h3>
          <p>
            O(n²) — On average, it needs to compare and shift elements roughly
            halfway through the list for each new item.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Best Case Complexity</h3>
          <p>
            O(n) — If the array is already sorted, Insertion Sort only needs to
            do one comparison per element — super fast.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Worst Case Complexity</h3>
          <p>
            O(n²) — When the list is in reverse order, every new element has to
            be compared and shifted through the whole sorted part.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsertionSortPage;
