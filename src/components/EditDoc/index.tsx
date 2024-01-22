import "./index.scss";
import { useState, useRef, useEffect, useCallback } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../Toolbar";
import { editDoc, getCurrentDoc } from "../../API/Firestore";
import { Input } from "antd";

export default function EditDoc({ id }: EditDocProps) {
  const quillRef = useRef<any>(null);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [isSaving, setIsSaving] = useState("");

  const editDocument = useCallback(() => {
    const payload = {
      value,
      title,
    };
    editDoc(payload, id);
  }, [id, title, value]);

  const getCurrentDocument = useCallback(() => {
    if (id) {
      getCurrentDoc(id, setValue, setTitle);
    }
  }, [id]);

  useEffect(() => {
    setIsSaving("");
    const debounced = setTimeout(() => {
      editDocument();
    }, 500);

    return () => {
      clearTimeout(debounced);
    };
  }, [value, title, editDocument]);

  useEffect(() => {
    getCurrentDocument();
    quillRef.current.focus();
  }, [getCurrentDocument]);

  console.log(isSaving);
  return (
    <div className="edit-container">
      <Input
        value={title}
        className="title-input"
        onChange={(event) => setTitle(event?.target.value)}
        placeholder="Enter the Title"
      />
      <div className="quill-container">
        <EditorToolbar />
        <ReactQuill
          className="react-quill"
          theme="snow"
          ref={quillRef}
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
}
