import React from 'react';
import './UserPanel.scss';

interface Props {
  onClose: () => void;
}

export const UserPanel: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="success-modal">
      <div className="success-modal__content">
        <div className="user">
          <p className="user__title">Welcome back</p>
          <form className="user__form">
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
            <a className="user__links-button" href="#">
              Sign in
            </a>
          </form>
          <p>
            Don&apost have an account?{' '}
            <a href="#" className="user__links-signup">
              Sign up!
            </a>
          </p>
        </div>
        {/* <button className="success-modal__button" onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
};
