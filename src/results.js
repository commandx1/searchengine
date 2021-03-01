import React from "react";

const Results = ({ results }) => {
  return (
    <ul className="list-group">
      {results.map((r, i) => (
        <li key={r.bngid + i} className="list-group-item">
          <a
            href={r.link}
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center flex-wrap"
          >
            <div className="imgbox">
              <img src={r.image} alt={r.name} className="img-fluid" />
            </div>
            <div className="d-flex flex-column">
              <p className="mb-0">{r.name}</p>
              <div className="d-flex align-items-center">
                <span className="newPrice">{r.price_new}</span>
                <span className="oldPrice">{r.price_old}</span>
              </div>
            </div>
            <div style={{ flex: 1 }}></div>
            <span className="mt-2">{r.category}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Results;
