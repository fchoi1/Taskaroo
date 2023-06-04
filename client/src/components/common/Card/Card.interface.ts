import BaseInterface from "../../BaseInterface";

interface CardProps extends BaseInterface {
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export default CardProps