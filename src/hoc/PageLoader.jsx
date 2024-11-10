import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";

const withLoading = (Component) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 400);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <Loader /> : <Component {...props} />;
  };
};

export default withLoading;
