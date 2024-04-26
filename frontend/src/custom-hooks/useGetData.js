import React from "react";
import { axiosConfig } from "../axios.config";

const useGetData = (selectedValue) => {
    const [data, setData] = React.useState("");
    
    React.useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
  
      const fetchData = async () => {
        try {
          const res = await axiosConfig.get(`/${selectedValue}`, {
            signal: signal,
          });
          console.log(res.data);
          setData(res.data);
        } catch (error) {
          if (error.name !== 'AbortError') { // Only handle errors if it's not an abort error
            console.error('Request error:', error);
          }
        }
      };
  
      if (selectedValue) {
        fetchData();
      }
  
      return () => {
        controller.abort(); // Abort the request if component unmounts
      };
    }, [selectedValue]);
  
    return data;
  };
  
  export default useGetData;