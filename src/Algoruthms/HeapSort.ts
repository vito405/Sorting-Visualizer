import detectType from "../utils/types/detectType";
import type { StepFrame } from "../utils/types/StepFrame";

export default function HeapSort(rawArr: string[]): StepFrame[] {
  const type = detectType(rawArr);
  let arr: (number | string)[];

  if (type === "numbers") {
    arr = rawArr.map(Number);
  } else {
    arr = [...rawArr];
  }

  const result = [...arr];
  const steps: StepFrame[] = [];

  const n = result.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(result, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    steps.push({
      arr: [...result],
      highlightIndex: i,
    });
    heapify(result, i, 0);
  }

  function heapify(arr: (number | string)[], heapSize: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      steps.push({
        arr: [...arr],
        highlightIndex: largest,
      });
      heapify(arr, heapSize, largest);
    }
  }

  steps.push({
    arr: [...result],
    highlightIndex: null,
  });

  return steps;
}
