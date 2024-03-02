import React from "react";
import EditableImage from "./EditableImage";
import EditableTextField from "./EditableTextField";

export type BlockFieldInfo = StringFieldInfo | ImageFieldInfo | VideoFieldInfo;
export type StringFieldInfo = {
  type: "string";
  value: string;
};
export type ImageFieldInfo = {
  type: "image";
  src: string;
  alt: string;
};

export type VideoFieldInfo = {
  type: "video";
  src: string;
  alt: string;
};

// for the editor
export type EditableFieldProps<T extends ExtractGeneric<BlockFieldInfo>> = {
  onFieldChange: (latest: T) => void;
} & T;

// Extract the types from BlockField Object
type ExtractType<T extends { type: any }> = T["type"];
type ExtractGeneric<T> = T extends infer U ? U : never;
export type BlockFieldType = ExtractType<BlockFieldInfo>;

type Props = {
  fieldInfo: BlockFieldInfo;
  onFieldChange: (latest: BlockFieldInfo) => void;
};

const EditableField = ({ fieldInfo, onFieldChange }: Props) => {
  return (
    <>
      {fieldInfo.type === "image" && (
        <EditableImage onFieldChange={onFieldChange} {...fieldInfo} />
      )}
      {fieldInfo.type === "string" && (
        <EditableTextField onFieldChange={onFieldChange} {...fieldInfo} />
      )}
    </>
  );
};

export default EditableField;
