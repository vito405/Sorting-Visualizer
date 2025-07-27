import { useState } from "react";
import type { StepFrame } from "../types/StepFrame";

export const useSortControls = () => {
    const [inputValue, setInputValue] = useState("5, 3, 2, 4");
      const [steps, setSteps] = useState<StepFrame[]>([]);
      const [currentStepIndex, setCurrentStepIndex] = useState(0);
      const [isAnimating, setisAnimating] = useState<boolean>(false);
      const [speed, setSpeed] = useState<number>(1000);

      


      return {
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
         
      }
      
}