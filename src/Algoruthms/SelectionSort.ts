import detectType from "../utils/types/detectType";
import type { StepFrame } from "../utils/types/StepFrame";

export default function SelectionSort(rawArr: string[]): StepFrame[]{
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
    let minIndex = i;



    for(let j = i + 1; j < result.length; j++){
     
        
        if(result[j] < result[minIndex]){
            minIndex = j
            
            
        }
    }

    if(minIndex !== i){
        [result[i], result[minIndex]] = [result[minIndex], result[i]]
        
        
    }
    steps.push({
      arr: [...result],
      highlightIndex: i
    })
  }


  return steps
}