import React, { useState } from 'react';
import './UserPanel.scss';

interface Props {
  onClose: () => void;
}

export const UserPanel: React.FC<Props> = ({ onClose }) => {
  const [isFlipped, setFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="modal-user">
      <div className="modal-user__content">
        <div className={`user ${isFlipped ? 'flipped' : ''}`}>
          <button className="modal-user__button" onClick={onClose}>
            Close
          </button>
          <div className="user__inner">
            <div className="user__front">
              <div className="user__title">Welcome back!</div>
              <div className="user__form-box">
                <input
                  type="text"
                  name=""
                  required
                  className="user__form-box-input"
                />
                <label className="user__form-box-label">E-mail</label>
              </div>
              <div className="user__form-box">
                <input
                  type="password"
                  name=""
                  required
                  className="user__form-box-input"
                />
                <label className="user__form-box-label">Password</label>
              </div>
              <button className="user__links-button">Sign in</button>
              <p>
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  className="user__links-signup"
                  onClick={handleFlip}
                >
                  Sign up!
                </button>
              </p>
            </div>
            <div className="user__back">
              <div className="card-content">back card</div>
              <button className="flip-button" onClick={handleFlip}>
                Flip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
