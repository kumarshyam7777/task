import {useMemo, useMeno}  from "react";

const Memo =({value}) => {
  const memoHook = useMemo(value) => {
    return (
      value = value * 2
    )
  },value);
  return(
    <div>
        <p>{value}</p>
       </div>
  )
}