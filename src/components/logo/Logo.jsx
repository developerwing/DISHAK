import "./_logo.scss";

function Logo() {
  return (
    <img
    src={process.env.PUBLIC_URL + '/images/logo.png'}
    alt=""
    className="header__logo"
  />
  );
}

export default Logo;
