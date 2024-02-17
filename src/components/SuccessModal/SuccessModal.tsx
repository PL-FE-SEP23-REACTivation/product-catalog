import React from 'react';
import './SuccessModal.scss';

interface Props {
  message: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="success-modal">
      <div className="success-modal__content">
        <p className="success-modal__message">{message}</p>
        <button className="success-modal__button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
