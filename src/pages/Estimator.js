import React, { useState, useRef, useEffect } from "react";
import Estimatortool from "../components/Estimatortool";
import Labor from "../components/Labor";
import Permit from "../components/Permit";
import { Switch, Button, Input } from "evergreen-ui";
import Line from "../components/Line";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "estimator";

const Pricing = () => {
  const [component, setComponent] = useState("componentA");

  const [lines, setLines] = useState([]);
  const lineNameRef = useRef();

  useEffect(() => {
    const storedLines = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY));
    if (storedLines) setLines(storedLines);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lines));
  }, [lines])

  function handleAddLine(e) {
    const name = lineNameRef.current.value;
    if (name === "") return;

    setLines((prevLines) => {
      return [...prevLines, { id: uuidv4(), name: name, complete: false }];
    });

    lineNameRef.current.value = null;
  }

  return (
    <div>
      <Button
        margin={16}
        appearance="primary"
        intent="none"
        onClick={() => setComponent("componentA")}
      >
        MATERIAL
      </Button>

      <Button
        margin={16}
        appearance="primary"
        intent="success"
        onClick={() => setComponent("componentB")}
      >
        LABOR
      </Button>

      <Button
        margin={16}
        appearance="primary"
        intent="danger"
        onClick={() => setComponent("componentC")}
      >
        PERMITTING
      </Button>

      <Button
        margin={16}
        appearance="primary"
        intent="info"
        onClick={handleAddLine}
      >
        +
      </Button>

      <input ref={lineNameRef} type="text" />

      {/* {component === 'componentA' && <Estimatortool />} */}

      {component === "componentA" && <Line lines={lines} />}
      {component === "componentB" && <Labor />}
      {component === "componentC" && <Permit />}
    </div>
  );
};

export default Pricing;
