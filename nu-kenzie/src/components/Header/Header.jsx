import "./Header.css";

const Header = ({ login }) => {
  return (
    <header>
      <h1 className="title">
        <strong>Nu</strong> Kenzie
      </h1>
      <button className="header__btn" type="button" onClick={() => login(false)} name="Sair">
        Sair
      </button>
    </header>
  );
};

export default Header;
