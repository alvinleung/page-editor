import { v4 as uuidv4 } from "uuid";
import { EditableBlockInfo } from "./EditableBlock";
import { BlockFieldInfo, BlockFieldType } from "./BlockField/EditableField";

type BlockType = "string" | "default";

type BlockAddAction = {
  type: "block-insert";
  index?: number;
  blockType: BlockType;
  fields: Array<BlockFieldInfo>;
};
type BlockRemoveAction = {
  type: "block-remove";
  index: number;
};
type BlockClearAction = {
  type: "block-clear";
};
type BlockFieldsUpdateAction = {
  type: "block-field-update";
  fields: Array<BlockFieldInfo>;
  uuid: string;
};

export type PageContent = Array<EditableBlockInfo>;
export type PageActionTypes =
  | BlockAddAction
  | BlockRemoveAction
  | BlockFieldsUpdateAction
  | BlockClearAction;

export function documentActionReducer(
  prevPageContent: PageContent,
  action: PageActionTypes
) {
  if (action.type === "block-insert") {
    const newBlock: EditableBlockInfo = {
      uuid: uuidv4(),
      type: action.blockType,
      fields: action.fields,
    };

    const newPageContent = [...prevPageContent];
    newPageContent.splice(action.index || newPageContent.length, 0, newBlock);

    return newPageContent;
  }

  if (action.type === "block-field-update") {
    // update block field here
    const targetBlockIndex = prevPageContent.findIndex(
      (blockInfo) => blockInfo.uuid === action.uuid
    );

    // console.log(prevPageContent[targetBlockIndex].fields);
    const latestFields = action.fields;

    const newPageContent = [...prevPageContent];
    newPageContent[targetBlockIndex].fields = latestFields;
    return newPageContent;
  }

  if (action.type === "block-clear") {
    return [];
  }

  console.log(`Document action not implemented: ${action.type}`);
  return prevPageContent;
}
