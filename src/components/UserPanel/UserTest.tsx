import React, { useState } from 'react';
import './SuccessModal.scss';

interface Props {
  message: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<Props> = ({ message, onClose }) => {
  const [isFlipped, setFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="success-modal">
      <div className="success-modal__content">
        <p className="success-modal__message">{message}</p>
        <div className={`user ${isFlipped ? 'flipped' : ''}`}>
          <div className="user-inner" id="user-inner">
            <p className="user__title">Welcome back</p>
            <form className="user__form form-front">
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
              <button
                type="button"
                className="user__links-signup"
                onClick={handleFlip}
              >
                Sign up!
              </button>
            </p>
            <form className="user__form form-back">
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
          </div>
        </div>{' '}
        */
        <button className="success-modal__button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// .container {
// 	display: flex;
// 	justify-content: center;
// 	margin: auto;
// }

// .user {
// 	perspective: 1000px;
// 	width: 400px;
// 	height: 500px;
// 	position: relative;
// 	transform-style: preserve-3d;
// 	transition: transform 0.5s;

// 	&.flipped {
// 		transform: rotateY(180deg);
// 	}

// 	&__inner {
// 		width: 100%;
// 		height: 100%;
// 		transform-style: preserve-3d;
// 	}

//   &__front {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     background-color: #d7fbda;
//     color: green;
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//   }

// 	  &__back {
// 		width: 100%;
// 		height: 100%;
// 		position: absolute;
// 		background-color: #fbd7f8;
// 		color: blue;
// 		transform: rotateY(180deg);
// 		-webkit-backface-visibility: hidden;
// 		backface-visibility: hidden;
// 	}
// }

// .card-content {
// 	padding: 20px;
// 	text-align: center;
// }

// .flip-button {
// 	width: 100px;
// 	padding: 10px;
// 	font-size: 16px;
// 	margin-top: 10px;
// 	background-color: #f5d9fa;
// 	border: none;
// 	border-radius: 5px;
// 	cursor: pointer;
// }

// ----------------------------------old
// @import '../../utils/fonts.scss';
// @import '../../utils/mixins.scss';
// @import '../../utils/variables.scss';

// .success-modal {
//   font-family: Mont;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   backdrop-filter: blur(4px);
//   z-index: 1000;

//   &__content {
//     color: $color-primary;
//     border-radius: 0.25rem;
//     font-size: 1.5rem;
//     text-align: center;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   }

//   &__message {
//     margin-bottom: 1rem;
//   }

//   &__button {
//     background-color: $color-primary;
//     border: none;
//     width: 50%;
//     height: 50px;
//     color: $color-white;
//     font-size: 1.25rem;
//     cursor: pointer;
//   }
// }

// .user {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   height: 500px;
//   width: 400px;
//   padding: 40px;
//   margin: 20px auto;
//   background-color: rgba(79, 79, 99, 0.76);
//   box-sizing: border-box;
//   box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
//   border-radius: 10px;

//   &__title {
//     margin-top: 40px;
//     padding: 0;
//     color: #ffff;
//     text-align: center;
//     font-size: 2rem;
//     font-weight: bold;
//     letter-spacing: 1px;
//   }

//   &__form {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     &-box {
//       position: relative;

//       &-input {
//         width: 100%;
//         padding: 10px 0;
//         font-size: 16px;
//         color: #fff;
//         margin-bottom: 50px;
//         border: none;
//         border-bottom: 1px solid #fff;
//         outline: none;
//         background: transparent;
//       }

//       &-label {
//         position: absolute;
//         top: 0;
//         left: 0;
//         padding: 10px 0;
//         font-size: 16px;
//         color: #fff;
//         pointer-events: none;
//         transition: 0.5s;
//       }
//     }
//   }

//   &__links-button {
//     position: relative;
//     display: inline-block;
//     padding: 10px 20px;
//     font-weight: bold;
//     color: #fff;
//     font-size: 16px;
//     text-decoration: none;
//     text-transform: uppercase;
//     overflow: hidden;
//     transition: 0.5s;
//     letter-spacing: 3px;

//     &:hover {
//       background: #fff;
//       color: #272727;
//       border-radius: 5px;
//     }
//   }
// }

// .user .user__form-box .user__form-box-input:focus ~ .user__form-box-label,
// .user .user__form-box .user__form-box-input:valid ~ .user__form-box-label {
//   top: -20px;
//   left: 0;
//   color: #fff;
//   font-size: 12px;
// }

// .user p:last-child {
//   color: #aaa;
//   font-size: 14px;
// }

// .user .user__links-button.a2:hover {
//   background: transparent;
//   color: rgb(175, 175, 175);
//   border-radius: 5px;
// }
// .user__links-button {
//   border: 1px solid green;
// }
