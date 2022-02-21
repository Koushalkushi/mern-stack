import React from 'react';
import reactDom from 'react-dom';
import Button from './Button';

import Card from './Card';
import styles from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />
};

const ModalOverlay = props =>{
    return(
        <Card className={styles.modal}>
            <div className={styles.header}>
                <h2>{props.title}</h2>  
            </div>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = props => {
    return(
        <>
        {reactDom.createPortal( <Backdrop onConfirm={props.onConfirm} />  , document.getElementById("backDrop-root"))}
        {reactDom.createPortal( 
                    <ModalOverlay 
                        title={props.title}
                        message={props.message}
                        onConfirm={props.onConfirm}
                        /> , 
                    document.getElementById('overlay-root') 
            )}
        </>
    );
}

export default ErrorModal;