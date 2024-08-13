import Link from 'next/link';
import styles from './style.module.scss';

interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void,
}



export const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return(
        <button 
            className={styles.button}
            onClick={onClick}>
            {children}
        </button>
    );
}