import BaseInterface from "../../BaseInterface";

interface ModalProps extends BaseInterface {
  onClose?: () => void;
  children?: React.ReactNode;
  title: string;
}

interface ModalComponentProps extends BaseInterface {
  children?: React.ReactNode;
}

export type { ModalProps as default, ModalComponentProps };
