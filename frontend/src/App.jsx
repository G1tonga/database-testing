import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const API_URL = import.meta.env.VITE_DATABASE_TESTING_BACKEND_URL;

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${API_URL}/`);
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
