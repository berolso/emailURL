import React, { useState } from "react";

import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [tinyResult, setTinyResult] = useState('')

  return (
    <div>
      <Header />
      <Form setTinyResult={setTinyResult} />
      <Result result={tinyResult} />
    </div>
  );
}

export default App;
