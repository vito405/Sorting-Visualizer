import detectType from "../utils/types/detectType";
import type { StepFrame } from "../utils/types/StepFrame";

export default function MergeSort(rawArr: string[]): StepFrame[] {
  const type = detectType(rawArr);

  let arr: (number | string)[];
  if (type === "numbers") {
    arr = rawArr.map(Number);
  } else {
    arr = [...rawArr];
  }

  const steps: StepFrame[] = [];

  const sorted = mergeSort(arr, steps);

  steps.push({ arr: [...sorted], highlightIndex: null });
  return steps;
}

function mergeSort(arr: (number | string)[], steps: StepFrame[]): (number | string)[] {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle), steps);
  const right = mergeSort(arr.slice(middle), steps);

  return merge(left, right, steps);
}

function merge(
  left: (number | string)[],
  right: (number | string)[],
  steps: StepFrame[]
): (number | string)[] {
  const result: (number | string)[] = [];
  let i = 0 
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
     
      
    } else {
      result.push(right[j++]);
   
    }

    steps.push({
      arr: [...result, ...left.slice(i), ...right.slice(j)],
      highlightIndex: result.length - 1,
    });
  
  }

  while (i < left.length) {
    result.push(left[i++]);
   
    steps.push({
      arr: [...result, ...left.slice(i), ...right.slice(j)],
      highlightIndex: result.length - 1,
    });
 
  }

  while (j < right.length) {
    result.push(right[j++]);
    steps.push({
      arr: [...result, ...left.slice(i), ...right.slice(j)],
      highlightIndex: result.length - 1,
    });
    
  }

  return result;
}
