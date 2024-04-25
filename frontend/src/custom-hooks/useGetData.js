import React from "react";
import { axiosConfig } from "../axios.config";
const useGetData = (selectedValue) => {
  const [data, setData] = React.useState("");
console.log('selectedValue', selectedValue)
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axiosConfig.get(`/${selectedValue}`);
      console.log(res.data);
      setData(res.data);
    };
    fetchData();
  }, [selectedValue]);

  return data;
};

export default useGetData;
