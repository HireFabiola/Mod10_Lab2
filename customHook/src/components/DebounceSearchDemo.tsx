import { useState, useEffect } from "react";
import { useDebounce } from "../components/useDebounce";
import type { useDebounceProps } from "../types";

export default function DebounceSearchDemo() {
  const [inputValue, setInputValue] = useState("");
  const delay = 500;

  // ✅ Actual call to your custom hook
  const debouncedValue = useDebounce(inputValue, delay);

  // Simulate API call when debounced value changes
  useEffect(() => {
    if (debouncedValue) {
      console.log(`Searching for: ${debouncedValue}`);
    }
  }, [debouncedValue]);

  return (
    <div className="wrapperContainer">
      <h2>Debounce Search Demo</h2>

      <p>Debounce Delay (ms): {delay}</p>

      <input
        type="text"
        placeholder="Type to search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h3>Current Input:</h3>
      <p>{inputValue}</p>

      <h3>Debounced Value (after {delay}ms):</h3>
      <p>{debouncedValue}</p>

      <h3>Simulated Search Results:</h3>
      {debouncedValue ? (
        <p>Results for "{debouncedValue}"</p>
      ) : (
        <p>Type to see results.</p>
      )}
    </div>
  );
}