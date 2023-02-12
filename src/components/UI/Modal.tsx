import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

type Props = {
    children: React.ReactNode,
    onClose: () => void
};

const Backdrop: React.FC<Props> = ({ onClose }) => {
    return <div className={classes.backdrop} onClick={onClose}></div>
};

const Modaloverlay: React.FC<Props> = ({ children }) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
    </div>
}

const portalElement: any = document.getElementById('overlays')

const Modal: React.FC<Props> = ({ children, onClose }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} children={undefined} />, portalElement)}
            {ReactDOM.createPortal(<Modaloverlay onClose={onClose}>{children}</Modaloverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;