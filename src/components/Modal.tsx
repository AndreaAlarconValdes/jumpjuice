import React from "react";
import "./Modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    title: string;
    description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, title, description }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                <div className="modal-content">
                    <div className="modal-information">
                        <h2 className="modal-title">{title}</h2>
                        <p className="modal-description">{description}</p>
                    </div>
                    <img src={imageUrl} alt={title} className="modal-image" />
                </div>
            </div>
        </div>
    );
};

export default Modal;
