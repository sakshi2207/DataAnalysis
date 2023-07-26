import React from "react";
import "./ClassStatsTable.css";

const ClassStatsTable = ({ classWiseStats }) => {
  console.log("table", classWiseStats);
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Alcohol Class</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(classWiseStats).map(([alcoholClass, stats]) => (
            <tr key={alcoholClass}>
              <td>{alcoholClass}</td>
              <td>{stats.mean}</td>
              <td>{stats.median}</td>
              <td>{stats.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassStatsTable;
