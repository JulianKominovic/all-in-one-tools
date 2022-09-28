import React from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

import { langs } from "@uiw/codemirror-extensions-langs";
import Editor, { EditorProps } from "../../ui/Editor";

type Props = {
  left: EditorProps;
  right: EditorProps;
  style?: React.CSSProperties;
};

const DuoEditor = ({ left, right, style }: Props) => {
  return (
    <Splitter style={{ height: "100%", ...style }}>
      <SplitterPanel>
        <Editor {...left} />
      </SplitterPanel>
      <SplitterPanel>
        <Editor {...right} />
      </SplitterPanel>
    </Splitter>
  );
};

export default DuoEditor;
