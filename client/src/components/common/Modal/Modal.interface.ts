import BaseInterface from "../../BaseInterface";

interface ModalProps extends BaseInterface {
  onClose?: () => void;
  children?: React.ReactNode;
  title: string;
}

export default ModalProps;
