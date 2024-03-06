/* eslint-disable max-len */
import React, { useState } from 'react';
import './UserPanel.scss';

interface Props {
  onClose: () => void;
}

export const UserPanel: React.FC<Props> = ({ onClose }) => {
  const [isFlipped, setFlipped] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [passwordLoginType, setPasswordLoginType] = useState<
    'password' | 'text'
  >('password');
  const [passwordRegisterType, setPasswordRegisterType] = useState<
    'password' | 'text'
  >('password');

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const handleShowLoginPassword = () => {
    setIsVisible(!isVisible);
    setPasswordLoginType(isVisible ? 'text' : 'password');
  };

  const handleShowRegisterPassword = () => {
    setIsVisible(!isVisible);
    setPasswordRegisterType(isVisible ? 'text' : 'password');
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
              <div className="user__title front-title">Welcome back!</div>
              <div className="user__form-box box-front">
                <input
                  type="text"
                  name=""
                  required
                  className="user__form-box-input"
                />
                <label className="user__form-box-label">E-mail</label>
              </div>
              <div className="user__form-box box-front">
                <input
                  type={passwordLoginType}
                  name=""
                  required
                  className="user__form-box-input"
                />
                <input
                  type="checkbox"
                  onClick={handleShowLoginPassword}
                  className="user__form-box-checkbox"
                />
                <label className="user__form-box-label">Password</label>
              </div>
              <button className="user__links-button-login">Sign in</button>
              <p className="redirect__link-login">
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
                  type={passwordRegisterType}
                  name=""
                  required
                  className="user__form-box-input"
                />
                <input
                  type="checkbox"
                  onClick={handleShowRegisterPassword}
                  className="user__form-box-checkbox"
                />
                <label className="user__form-box-label">Password</label>
              </div>
              <button className="user__links-button-login">Sign up</button>
              <p className="redirect__link-register">
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
