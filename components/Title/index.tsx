import Link from "next/link";
import styles from "./style.module.scss";
import cl from "classnames";

interface TitleProps {
  children: React.ReactNode;
  size?: "medium" | "large";
}

export const Title: React.FC<TitleProps> = ({ children, size = "medium" }) => {
  return (  
     <h2 className={cl()}>{children}</h2>
  );
};
