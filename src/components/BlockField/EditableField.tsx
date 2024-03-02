import React from "react";
import EditableImage, { ImageFieldInfo } from "./EditableImage";
import EditableTextField, { StringFieldInfo } from "./EditableTextField";
import { VideoFieldInfo } from "./EditableVideo";

export type BlockFieldInfo = StringFieldInfo | ImageFieldInfo | VideoFieldInfo;

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
