import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Characters() {
  const [searchParams] = useSearchParams({ q: "" });
  const query = searchParams.get("q");
  let { id } = useParams();

  let baseURL = "";
  if (query.length === 0) {
    if (id === undefined) {
      baseURL = "https://rickandmortyapi.com/api/character/?page=1";
      id = 1;
    } else {
      baseURL = "https://rickandmortyapi.com/api/character/?page=" + id;
    }
  } else {
    baseURL = "https://rickandmortyapi.com/api/character/?name=" + query;
  }

  const [data, setData] = useState([]);
  const [lastPage, setLastPage] = useState(100);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setData(res.data.results);
      setLastPage(res.data.info.pages);
    });
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        {data.length > 0 ? (
          data !== null &&
          data.map((character, key) => {
            return (
              <a key={key} href={"/character/" + character.id} className="item">
                <img draggable="false" src={character.image} />

                <h3>{character.name}</h3>
              </a>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      {query.length === 0 ? (
        <div className="container" style={{ marginTop: "10px" }}>
          {!(id == 1) ? (
            <button className="prevButton">
              <a href={"/" + (Number(id) - 1).toString()}>
                <i className="bx bx-skip-previous"></i>
                <p>
                  <b>PREV</b>
                </p>
              </a>
            </button>
          ) : (
            ""
          )}
          {!(id == lastPage) ? (
            <button className="nextButton">
              {/* if pages mentions */}
              <a href={"/" + (Number(id) + 1).toString()}>
                <p>
                  <b>NEXT</b>
                </p>
                <i className="bx bx-skip-next"></i>
              </a>
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Characters;
