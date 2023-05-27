import { useEffect, useRef } from "react";

const useSetInterval = ({ cb, delay }) => {
  const cbRef = useRef(null);

  useEffect(() => {
    const newCB = () => {
      if (cbRef.current) cbRef.current();
    };
    const id = setInterval(newCB, delay);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    cbRef.current = cb;
  });
};
export default useSetInterval;
