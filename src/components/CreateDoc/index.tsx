import "./index.scss";
import EditDoc from "../EditDoc";
import { createDoc } from "../../API/Firestore";

type isEditType = {
  id: string;
  isEdit: boolean;
  handleEdit: () => void;
};

function CreateDoc({ id, isEdit, handleEdit }: isEditType) {
  const createDocument = () => {
    const payload = {
      title: "",
      value: "",
    };
    createDoc(payload);
  };

  console.log(id);

  if (isEdit) {
    return <EditDoc handleEdit={handleEdit} id={id} />;
  }

  return (
    <div className="new-doc-container">
      <div className="new-doc-inner">
        <p>Start a new document</p>
        <img
          className="start-doc"
          src="https://cdn2.iconfinder.com/data/icons/thin-ui/100/add-512.png"
          onClick={() => {
            handleEdit();
            createDocument();
          }}
        />
        <p className="title">Blank</p>
      </div>
    </div>
  );
}

export default CreateDoc;
