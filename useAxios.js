//Requires installing axios

import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url = " ", options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);

    axios
      .get(url, options)
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  }, [setLoading, url, options]);

  return { loading, error, data };
};

//Rewritten

// export const useAxios = (url = " ", options = null) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     let isMounted = true;

//       const fetchData = async () => {
//       try {
//         if(isMounted){
//         setLoading(true);
//         const res = await axios(url)
//         setData(res)
//         setLoading(false)}
//       }catch (error) {
//         if(isMounted){setError(error)}
//       } finally {
//         () => isMounted && setLoading(false)
//       }

//       fetchData();
//      }
//     return () => (isMounted = false);
//   }, [setLoading, url, options]);

//   return { loading, error, data };
// };
