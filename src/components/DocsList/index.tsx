import "./index.scss";
import { getDocuments } from "../../API/Firestore";
import { useEffect, useState } from "react";

type OpenDocType = {
  openDoc: (id: string, value: string, title: string) => void;
};

function DocsList({ openDoc }: OpenDocType) {
  const [docs, setDocs] = useState([
    {
      id: "",
      title: "",
      userName: "",
      value: "",
    },
  ]);
  const getDocs = async () => {
    await getDocuments(setDocs);
  };
  useEffect(() => {
    getDocs();
  }, []);

  console.log(docs);
  return (
    <div className="docs-main">
      {docs.map((doc) => {
        return (
          <div
            onClick={() => openDoc(doc.id, doc.value, doc.title)}
            className="doc-card"
            key={doc.id}
          >
            <p
              className="doc-content"
              dangerouslySetInnerHTML={{
                __html: `${doc.value.substring(0, 100)}`,
              }}
            ></p>
            <p className="doc-title">{doc.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DocsList;
