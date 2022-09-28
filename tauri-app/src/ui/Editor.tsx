import React from "react";
import CodeMirror from "@uiw/react-codemirror/esm";
import { basicSetup } from "@uiw/codemirror-extensions-basic-setup";
import { langs, LanguageName } from "@uiw/codemirror-extensions-langs";
import { dracula } from "@uiw/codemirror-theme-dracula/esm";
export type EditorProps = {
  langList: LanguageName[];
  onChange?: (any: any) => void;
  initialValue?: string;
  style?: React.CSSProperties;
};

function Editor({ langList, onChange, initialValue, style }: EditorProps) {
  return (
    <CodeMirror
      style={{ ...style }}
      height="100%"
      value={initialValue}
      theme={dracula}
      extensions={[basicSetup(), langList.map((langName) => langs[langName]())]}
      onChange={onChange}
    />
  );
}
export default Editor;
