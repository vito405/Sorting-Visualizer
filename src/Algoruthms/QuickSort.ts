import detectType from "../utils/types/detectType";
import type { StepFrame } from "../utils/types/StepFrame";

export default function QuickSort(rawArr: string[]): StepFrame[] {
  const type = detectType(rawArr);

  let arr: (number | string)[];
  if (type === "numbers") {
    arr = rawArr.map(Number);
  } else {
    arr = [...rawArr];
  }

  const steps: StepFrame[] = [];

  function medianOfThree(a: any, b: any, c: any) {
    if ((a > b) !== (a > c)) return a;
    if ((b > a) !== (b > c)) return b;
    return c;
  }

  function sorting(arr: (number | string)[]): (number | string)[] {
    if (arr.length <= 1) return arr;

    const first = arr[0];
    const middle = arr[Math.floor(arr.length / 2)];
    const last = arr[arr.length - 1];
    const pivot = medianOfThree(first, middle, last);

    const left: (number | string)[] = [];
    const right: (number | string)[] = [];
    const pivots: (number | string)[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        pivots.push(arr[i]); // keep all pivot duplicates
      }
    }

    const sortedLeft = sorting(left);
    const sortedRight = sorting(right);
    const combined = [...sortedLeft, ...pivots, ...sortedRight];

    steps.push({
      arr: [...combined],
      highlightIndex: combined.indexOf(pivot),
    });

    return combined;
  }

  const sorted = sorting(arr);

  steps.push({
    arr: [...sorted],
    highlightIndex: null,
  });

  return steps;
}
