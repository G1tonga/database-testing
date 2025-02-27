import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import axios from "axios";

function Content() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/delivery");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <p>{data}</p>
      </div>
    </>
  );
}
export default Content;
