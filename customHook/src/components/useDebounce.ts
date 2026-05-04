import { useState, useEffect } from "react";
import DebounceSearchDemo from "./DebounceSearchDemo";


export function useDebounce(value, delay) {

  // Inittialize debouncedValue to input string
  const [debouncedValue, setDebouncedValue] = useState(value);

  //Trigger timeout function with changes in value or delay
  useEffect(() => {

    // Set timer in handler
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up timer everytime useDebounced is called
    return () => {
      clearTimeout(handler);
    }

  }, [value, delay]
  )

  // Return value once timer has expired
  return debouncedValue;
}