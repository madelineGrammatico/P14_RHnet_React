import { PropsWithChildren } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
    onClose: ()=> void,
    isHidden?: boolean
}
export function Modal({ children, onClose, isHidden } : PropsWithChildren<ModalProps>) {
    const className = isHidden ? "hidden" : "modal"
    return(
        <div className={styles[className]}>
            <button 
                className={styles["close"]}
                onClick={() => 
                    onClose()}
            >X</button>
            {children}
        </div>
    )
}