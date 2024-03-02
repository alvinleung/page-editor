import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { EditableFieldProps, StringFieldInfo } from "./EditableField";

const EditableTextField = ({
  onFieldChange,
  value,
}: EditableFieldProps<StringFieldInfo>) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange({
      type: "string",
      value: e.target.value,
    });
  };

  const handleContainerClicked = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  useOnClickOutside(inputRef, () => {
    setIsEditing(false);
  });

  return (
    <div onClick={handleContainerClicked}>
      <div className={isEditing ? `hidden` : ``}>{value}</div>
      <input
        ref={inputRef}
        onChange={handleChange}
        value={value}
        className={isEditing ? `bg-black text-zinc-50` : `hidden`}
      />
    </div>
  );
};

export default EditableTextField;
