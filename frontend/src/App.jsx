import "./App.css";
import { useState, useEffect } from "react";
import useGetData from "./custom-hooks/useGetData";
function App() {
  const [selectedValue, setSelectedValue] = useState("data-1");
  const data = useGetData(selectedValue);

  const handleSelectChange = (e) => {
    console.log(e);
    setSelectedValue(e);
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleSelectChange(e.target.value)}>
          {/* check with onSelected */}
          <option value="data-1">Data-1</option>
          <option value="data-2">Data-2</option>
          <option value="data-3">Data-3</option>
          <option value="data-4">Data-4</option>
        </select>
      </div>
      <div>
        {data.length > 0 &&
          data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </div>
    </div>
  );
}

export default App;
