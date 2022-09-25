import illustration from "../assets/illustration.svg";
import "./Index.css";
const Index = ({ login }) => {
  return (
    <div className="container">
      <div className="title__area">
        <h1>
          <strong>Nu</strong> Kenzie
        </h1>
        <p className="subtitle">Centralize o controle das suas finanças</p>
        <p>de forma rápida e segura</p>
        <button type="button" onClick={() => login(true)} name="Iniciar">
          Iniciar
        </button>
      </div>
      <img src={illustration} alt="" />
    </div>
  );
};

export default Index;
