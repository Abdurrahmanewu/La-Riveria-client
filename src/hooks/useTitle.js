import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - La Riveria Resort & Park`;
  }, [title]);
};

export default useTitle;
