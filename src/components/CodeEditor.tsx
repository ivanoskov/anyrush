import { useState } from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorWindowProps {
  onChange: (type: string, value: string) => void;
  language: string;
  code: string;
  theme: string;
}

const CodeEditorWindow = ({
  onChange,
  language,
  code,
  theme,
}: CodeEditorWindowProps) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value: string | undefined) => {
    setValue(value ?? "");
    onChange("code", value ?? "");
    console.log(value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        loading="Грузим кодов.."
        height="60vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        // options={{ readOnly: true }}
      />
    </div>
  );
};
export default CodeEditorWindow;
