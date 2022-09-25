import "./Card.css";

const Card = ({ item, removeItem }) => {
  if (item.type === "entrada") {
    return (
      <div className="card in margin__top">
        <div className="card__div">
          <h3>{item.description}</h3>
          <div className="price__align">
            <p className="price__in">
              R$ {item.value.toFixed(2).replace(".", ",")}
            </p>
            <button className="remove__button" onClick={() => removeItem(item)}>
              X
            </button>
          </div>
        </div>
        <span className="subtitle__type">{item.type}</span>
      </div>
    );
  }
  if (item.type === "despesa") {
    return (
      <div className="card out margin__top">
        <div className="card__div">
          <h3>{item.description}</h3>
          <div className="price__align">
            <p className="price__out">
              R$ {item.value.toFixed(2).replace(".", ",")}
            </p>
            <button className="remove__button" onClick={() => removeItem(item)}>
              X
            </button>
          </div>
        </div>
        <span className="subtitle__type">{item.type}</span>
      </div>
    );
  }
};

export default Card;
