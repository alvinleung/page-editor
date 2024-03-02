import { useDocumentContext } from "@/components/DocumentContext";
import EditableBlock, { EditableBlockInfo } from "@/components/EditableBlock";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { document, dispatchDocumentAction } = useDocumentContext();

  useEffect(() => {
    dispatchDocumentAction({ type: "block-clear" });

    dispatchDocumentAction({
      type: "block-insert",
      blockType: "default",
      fields: [
        { type: "string", value: "test-block" },
        { type: "string", value: "test-block" },
      ],
    });

    dispatchDocumentAction({
      type: "block-insert",
      blockType: "default",
      fields: [
        { type: "string", value: "test-block" },
        { type: "string", value: "test-block" },
      ],
    });
  }, []);

  const handleBlockChange = (latestBlockInfo: EditableBlockInfo) => {
    dispatchDocumentAction({
      type: "block-field-update",
      uuid: latestBlockInfo.uuid,
      fields: latestBlockInfo.fields,
    });
  };

  return (
    <main className="my-8 mx-8">
      {document.map((block, index) => (
        <EditableBlock
          key={index}
          isDraftMode={false}
          blockInfo={block}
          onChange={handleBlockChange}
        />
      ))}

      <button
        onClick={() => {
          dispatchDocumentAction({
            type: "block-insert",
            blockType: "default",
            fields: [
              { type: "string", value: "test-block" },
              { type: "string", value: "test-block" },
            ],
          });
        }}
      >
        Insert Block
      </button>
    </main>
  );
}
