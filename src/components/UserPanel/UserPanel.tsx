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
          <div className="user__inner">
            {' '}
            <div className="user__front">
              {' '}
              <button className="modal-user__button" onClick={onClose}></button>
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
              <p className="redirect__link">
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  className="redirect__button"
                  onClick={handleFlip}
                >
                  Sign up!
                </button>
              </p>
            </div>
            <div className="user__back">
              <button className="modal-user__button" onClick={onClose}></button>
              <div className="user__title">Register now!</div>
              <div className="user__form-box">
                <input
                  type="text"
                  name=""
                  required
                  className="user__form-box-input"
                />
                <label className="user__form-box-label">First Name</label>
              </div>
              <div className="user__form-box">
                <input
                  type="text"
                  name=""
                  required
                  className="user__form-box-input"
                />
                <label className="user__form-box-label">Last Name</label>
              </div>
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
              <p className="redirect__link">
                Do you have an account?
                <button className="redirect__button" onClick={handleFlip}>
                  Sign in!
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
