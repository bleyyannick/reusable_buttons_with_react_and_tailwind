import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [value, setValue] = useState(null);
  const handleSelect = (choice) => {
    setValue(choice);
  };

  const options = [
    { label: "Blue", value: "React" },
    { label: "Red", value: "Angular" },
    { label: "White", value: "Svelte" },
  ];
  return (
    <div className="flex">
      <Dropdown value={value} onChange={handleSelect} options={options} />
      <Dropdown value={value} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropdownPage;