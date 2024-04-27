import { useState } from "react";
import useGetData from "../custom-hooks/useGetData";
import ShowData from "./ShowData";

export const DisplayData = () => {
  const [selectedValue, setSelectedValue] = useState("data-1");
  const { data, isLoading, isError } = useGetData(selectedValue);

  const handleSelectChange = (e) => {
    console.log(e);
    setSelectedValue(e);
  };

  return (
    <div>
      <div>
        <select
          value={selectedValue}
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          {/* check with onSelected */}
          <option value="data-1">Data-1</option>
          <option value="data-2">Data-2</option>
          <option value="data-3">Data-3</option>
          <option value="data-4">Data-4</option>
        </select>
        {/* <input type="text" onSelect={handleSelect} /> */}
      </div>

      <div>
        <ShowData
          data={data}
          isLoading={isLoading}
          isError={isError}
        ></ShowData>
      </div>
    </div>
  );
};
