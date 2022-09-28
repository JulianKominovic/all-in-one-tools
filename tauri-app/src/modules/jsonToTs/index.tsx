import { useState } from "react";
import DuoEditor from "../duoEditor";
import jsonToTs from "json-to-ts";

const JsonToTs = () => {
  const [output, setOutput] = useState<string>();
  return (
    <DuoEditor
      left={{
        style: { height: "calc(100vh - 160px)" },
        onChange: (value) => {
          let valueToObject = "Error: Invalid JSON";
          try {
            valueToObject = JSON.parse(value);
          } catch (err) {}
          setOutput(jsonToTs(valueToObject).join("\n"));
        },
        langList: ["json"],
        initialValue: JSON.stringify({ hello: "world " }, null, 4),
      }}
      right={{
        style: { height: "calc(100vh - 160px)" },
        initialValue: output,
        langList: ["typescript"],
      }}
    />
  );
};

export default JsonToTs;
