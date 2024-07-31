const url = "https://www.course-api.com/react-tours-project";

import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tourData, setTourData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTourData(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };

  const refresh = ()=>{
    fetchData()
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading-container">

    <Loading />;
    </div>
  }

  return (
    <main>
      <h1 className="title">Our Tours</h1>
      <div className="title-underline"></div>
      <Tours refresh={refresh} data={tourData} />
    </main>
  );
};
export default App;
