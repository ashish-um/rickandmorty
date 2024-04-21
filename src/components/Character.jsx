import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Character() {
  const [data, setData] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/" + id).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  if (data.length !== 0) {
    // console.log("data is " + data);
    return (
      <div className="boxHolder">
        <div className="box">
          <div className="imgHolder">
            <img src={data.image} alt="character image" />
          </div>
          <div className="line"></div>
          <div className="characterDetails">
            <h1>
              <u>{data?.name}</u>
            </h1>
            <h3>Status: {data?.status}</h3>
            <h3>Species: {data?.species}</h3>
            <h3>Gender: {data?.gender}</h3>
            <h3>Origin: {data?.origin.name}</h3>
            <h3>Current Location: {data?.location.name}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="boxHolder">
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default Character;
