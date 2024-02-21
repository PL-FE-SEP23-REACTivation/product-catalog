import './ErrorNotification.scss';

export const ErrorNotification = () => {
  return (
    <div className="error">
      <img
        src={process.env.PUBLIC_URL + '/icons/error-emoji.svg'}
        alt="Emoji"
        className="error__icon"
      />
      <div className="error__text text">
        <p className="text__main">Something went wrong</p>
        <p className="text__small">Please try again later</p>
      </div>
    </div>
  );
};
