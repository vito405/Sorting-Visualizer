import detectType from "../utils/types/detectType";
import type { StepFrame } from "../utils/types/StepFrame";

export default function InsertionSort(rawArr: string[]): StepFrame[]{
    const type = detectType(rawArr)
     let arr: (number | string)[];

  if(type === 'numbers'){
    arr = rawArr.map(Number);
  }else {
    arr = [...rawArr]
  }

  const result = [...arr];
  const steps: StepFrame[] = [];
  

  for(let i = 1; i < result.length; i++){
    let current = result[i];
    let j = i - 1

  while(j >= 0 && result[j] > current){
    result[j + 1] = result[j]
    j--;
  }

  result[j + 1] = current

  steps.push({
    arr: [...result],
    highlightIndex: j + 1
  })
  }

  
  return steps
}