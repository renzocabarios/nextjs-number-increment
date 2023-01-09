import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="body">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Number</button>
      </div>
    </>
  );
}
