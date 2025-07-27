import detectType from "../utils/types/detectType";
import type { StepFrame } from "../utils/types/StepFrame";

export default function BubbleSort(rawArr: string[]): StepFrame[] {
  const type = detectType(rawArr)

  let arr: (number | string)[];

  if(type === 'numbers'){
    arr = rawArr.map(Number);
  }else {
    arr = [...rawArr]
  }

  const result = [...arr];
  const steps: StepFrame[] = [];

  for(let i = 0; i < result.length; i++){
    let swapped = false;
    for(let j = 0; j < result.length - i - 1; j++){
      const left = result[j];
      const right = result[j + 1]

      const shouldSwap = String(left).toLowerCase() > String(right).toLowerCase()

      const highlightIndex = shouldSwap ? j : j + 1;
      steps.push({arr: [...result], highlightIndex})

      if(shouldSwap){
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
        swapped = true
      }
    }
    if(!swapped) break
  }

  steps.push({arr: [...result], highlightIndex: null})
  return steps
}
