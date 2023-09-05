import { PropsWithChildren } from 'react'
import styles from './Modal.module.css'
import { createPortal } from 'react-dom'

type ModalProps = {
    onClose: ()=> void,
    isOpen?: boolean
}
export function Modal({ children, onClose, isOpen = true } : PropsWithChildren<ModalProps>) {
    if (!isOpen) return

    return createPortal(
        <div className={styles["modal"]}>
            <button 
                className={styles["close"]}
                onClick={() => 
                    onClose()}
            >X</button>
            {children}
        </div>
    , document.body)
}