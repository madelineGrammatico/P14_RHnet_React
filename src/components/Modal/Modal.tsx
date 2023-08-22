import styles from './Modal.module.css'

export function Modal({children, setShowModal} ) {
    return(
        <div className={styles["modale"]}>
            <button 
                className={styles["close"]}
                onClick={() => 
                    setShowModal(false)}
            >X</button>
            {children}
        </div>
    )
}