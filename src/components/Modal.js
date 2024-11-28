import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigation = useNavigate();
  function cancelModalHandler() {
    navigation("/");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={cancelModalHandler} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
