import React, { createContext, useContext, useReducer, useState } from "react";
import { EditableBlockInfo } from "./EditableBlock";
import {
  PageActionTypes,
  PageContent,
  documentActionReducer,
} from "./DocumentActionReducer";

type Props = {
  children: React.ReactNode;
};

export type DocumentGlobalState = {
  document: PageContent;
  dispatchDocumentAction: React.Dispatch<PageActionTypes>;
};

const initialDocument: PageContent = [];
const DocumentContext = createContext<DocumentGlobalState>({
  document: initialDocument,
  dispatchDocumentAction: () => {},
});

export const useDocumentContext = () => useContext(DocumentContext);

const DocumentContextProvider = ({ children }: Props) => {
  const [document, dispatchDocumentAction] = useReducer(
    documentActionReducer,
    initialDocument
  );

  return (
    <DocumentContext.Provider value={{ document, dispatchDocumentAction }}>
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextProvider;
