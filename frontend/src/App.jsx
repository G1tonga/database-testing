import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/delivery");
    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <p>hello world</p>
        <p>welcome to this exciting project </p>

        {data.map((item) => (
          <p>{item.dispatch_date}</p>
        ))}
      </div>
    </>
  );
}
export default App;
