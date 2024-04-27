import React from "react";
import { axiosConfig } from "../axios.config";
import { useQuery } from "react-query";

const useGetData = (selectedValue) => {
  // const [data, setData] = React.useState("");

  // React.useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosConfig.get(`/${selectedValue}`, {
  //         signal: signal,
  //       });
  //       console.log(res.data);
  //       setData(res.data);
  //     } catch (error) {
  //       if (error.name !== 'AbortError') { // Only handle errors if it's not an abort error
  //         console.error('Request error:', error);
  //       }
  //     }
  //   };

  //   if (selectedValue) {
  //     fetchData();
  //   }

  //   return () => {
  //     controller.abort(); // Abort the request if component unmounts
  //   };
  // }, [selectedValue]);
  const fetchData = async () => {
    const res = await axiosConfig.get(`/${selectedValue}`);
    return res.data;
  };

  // Normal React Query without aborting requests......

  const { data, isLoading, isError } = useQuery(selectedValue, fetchData);


 //  React Query with aborting requests......
  // const { isLoading, data, isError } = useQuery({
  //   queryKey: ["bookmarks", selectedValue],
  //   queryFn: async ({ signal }) => {
  //     const data = await axiosConfig.get(`${selectedValue}`, {
  //       signal,
  //     });
  //     return data.data;
  //   },
  // });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetData;
