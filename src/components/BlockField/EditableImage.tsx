import React from "react";
import { EditableFieldProps } from "./EditableField";

export type ImageFieldInfo = {
  type: "image";
  src: string;
  alt: string;
};

type EditableImageProps = EditableFieldProps<ImageFieldInfo>;
const EditableImage = (props: EditableImageProps) => {
  return <div>EditableImage</div>;
};

export default EditableImage;
