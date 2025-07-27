import { useState } from "react";
import type { StepFrame } from "../types/StepFrame";

export const useAlgoControls = () => {
    const [inputValue, setInputValue] = useState("5, 3, 2, 4");
    const [steps, setSteps] = useState<{ [key: string]: StepFrame[] }>({});
    const [currentStepIndex, setCurrentStepIndex] = useState<{ [key: string]: number }>({});
    const [isAnimating, setisAnimating] = useState<{ [key: string]: boolean }>({});
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