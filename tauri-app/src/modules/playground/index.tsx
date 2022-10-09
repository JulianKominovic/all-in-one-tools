// @ts-nocheck
import React, { useState } from "react";
import PlaygroundLibrary from "javascript-playgrounds";
import { CompilerOptions } from "javascript-playgrounds/dist/src/utils/options";
import { Dropdown } from "primereact/dropdown";
import { SelectItemOptionsType } from "primereact/selectitem";

type Props = {
  compileType: CompilerOptions["type"];
};

type config = {
  compileType: CompilerOptions["type"];
};

const compilerOptions: SelectItemOptionsType = [
  { label: "Typescript", value: "tsc" },
  { label: "Babel", value: "babel" },
  { label: "None", value: "none" },
];

const Playground = ({ compileType = "babel" }: Props) => {
  const [config, setConfig] = useState<config>({
    compileType: compileType,
  });
  return (
    <div>
      {/* <header
        style={{
          marginBottom: "12px",
        }}
      >
        <div className={`flex flex-dir-col max-20ch`}>
          <label htmlFor="compiler-type">Compiler type</label>
          <Dropdown
            className="max-20ch"
            id="compiler-type"
            value={config.compileType}
            options={compilerOptions}
            onChange={(e) =>
              setConfig((prev) => ({ ...prev, compileType: e.value }))
            }
            placeholder="Select a compiler"
          />
        </div>
      </header> */}
      <PlaygroundLibrary
        style={{ width: "100%", height: "calc(100vh - 160px)" }}
        compiler={{ type: config.compileType }}
        typescript={{
          compilerOptions: { allowJs: true },
          enabled: true,
        }}
        css={{
          fontSize: "20px",
        }}
      />
    </div>
  );
};

export default Playground;
