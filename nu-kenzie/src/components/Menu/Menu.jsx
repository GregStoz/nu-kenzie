import "./Menu.css";
const Menu = ({ handleSearch, resetList, filter }) => {
  return (
    <div className="container__menu margin__top">
      <h3>Resumo financeiro</h3>
      <nav>
        <button
          className="button__menu"
          id="filterAll"
          onClick={() => resetList()}
        >
          Todos
        </button>
        <button
          className="button__menu"
          id="filterIn"
          onClick={() => handleSearch("entrada")}
        >
          Entradas
        </button>
        <button
          className="button__menu"
          id="filterOut"
          onClick={() => handleSearch("despesa")}
        >
          Despesas
        </button>
      </nav>
    </div>
  );
};

export default Menu;
