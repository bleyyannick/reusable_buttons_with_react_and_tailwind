import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [value, setValue] = useState(null);
  const handleSelect = (choice) => {
    setValue(choice);
  };

  const options = [
    { label: "Blue", value: "React" },
    { label: "Red", value: "Angular" },
    { label: "White", value: "Svelte" },
  ];
  return <Dropdown value={value} onChange={handleSelect} options={options} />;
}

export default App;
