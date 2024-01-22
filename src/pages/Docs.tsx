import ModalComponent from "../components/Modal";
import { loginWithGoogle } from "../API/Auth";
import useCheckAuth from "../hooks/useCheckAuth";
import Document from "../components/Document";

const Docs: React.FC = () => {
  const handleLogin = () => {
    loginWithGoogle();
  };

  const { isAuthenticated, userData } = useCheckAuth();
  console.log(userData);
  return (
    <div className="docs-container">
      {!isAuthenticated ? (
        <ModalComponent
          title="Login with google"
          handleLogin={handleLogin}
        ></ModalComponent>
      ) : (
        <>
          <Document photoURL={userData?.photoURL} />
        </>
      )}
    </div>
  );
};

export default Docs;
