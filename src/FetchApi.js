import { useState } from "react";

async function fetchAPI() {
  const [datas, setDatas] = useState("");
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();
  console.log(data);
  console.log(data.title);
  setDatas(data.title);
}

const FetchApi = () => {
  return (
    <div>
      {/* <h3>{datas}</h3> */}
      <button onClick={fetchAPI}>Fetch API </button>
    </div>
  );
};

export default FetchApi;
