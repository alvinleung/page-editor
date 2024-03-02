import React, { useState } from "react";
import EditableTextField from "./BlockField/EditableTextField";
import EditableField, {
  BlockFieldInfo,
  StringFieldInfo,
} from "./BlockField/EditableField";

export type EditableBlockInfo = {
  fields: Array<BlockFieldInfo>;
  type: string;
  uuid: string;
};

type Props = {
  isDraftMode: boolean;
  blockInfo: EditableBlockInfo;
  onChange: (latestBlockInfo: EditableBlockInfo) => void;
};

const EditableBlock = ({ blockInfo, onChange }: Props) => {
  const handleFieldChange = (
    latestFieldInfo: BlockFieldInfo,
    index: number
  ) => {
    const latestFields = [...blockInfo.fields];
    // update the field
    latestFields[index] = latestFieldInfo;

    // push changes
    const newBlockInfo = blockInfo;
    newBlockInfo.fields = latestFields;
    onChange(newBlockInfo);
  };
  return (
    <div className="my-4">
      <div className="mx-4 text-sm opacity-50 mb-2">{blockInfo.uuid}</div>
      {blockInfo.fields.map((field, index) => (
        <div className="px-4 py-4 mb-2 bg-zinc-900 rounded-lg" key={index}>
          <EditableField
            fieldInfo={field}
            onFieldChange={(latest: BlockFieldInfo) =>
              handleFieldChange(latest, index)
            }
          />
          <div className="opacity-50 text-xs">{field.type}</div>
        </div>
      ))}
    </div>
  );
};

export default EditableBlock;
