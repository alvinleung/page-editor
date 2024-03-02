import React from "react";
import { EditableFieldProps } from "./EditableField";

export type VideoFieldInfo = {
  type: "video";
  src: string;
  alt: string;
};

const EditableVideo = (props: EditableFieldProps<VideoFieldInfo>) => {
  return <div>EditableVideo</div>;
};

export default EditableVideo;
