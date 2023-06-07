import "./styles.css";
import React, { useState } from "react";

const data = [
  { name: "John" },
  { name: "Jane" },
  { name: "John" },
  { name: "Bob" },
  { name: "Jane" },
  { name: "John" },
  { name: "Alice" }
];

const Table = ({ data, duplicateCounts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Duplicate Count</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            style={{
              backgroundColor:
                duplicateCounts[item.name] > 0 && duplicateCounts[item.name] < 3
                  ? "red"
                  : duplicateCounts[item.name] > 2 &&
                    duplicateCounts[item.name] < 10
                  ? "yellow"
                  : duplicateCounts[item.name] > 10
                  ? "green"
                  : "white"
            }}
          >
            <td>{item.name}</td>
            <td>{duplicateCounts[item.name]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Task = () => {
  const [duplicateCounts, setDuplicateCounts] = useState({});

  // Count duplicates and store the result in duplicateCounts state
  useState(() => {
    const counts = data.reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});
    setDuplicateCounts(counts);
  }, []);

  return <Table data={data} duplicateCounts={duplicateCounts} />;
};

export default Task;
