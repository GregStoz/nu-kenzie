import "./TotalMoney.css";

const TotalMoney = ({ list }) => {
  if (list) {
    const totalValue = list.reduce((add, currentValue) => {
      return currentValue.value + add;
    }, 0);

    return (
      <div className="border margin__top">
        <div className="container__total">
          <h2 className="money__title">Valor total:</h2>
          <span>${totalValue.toFixed(2).replace(".", ",")}</span>
        </div>
        <span className="money__subtitle">O valor refere-se ao saldo</span>
      </div>
    );
  }
};
export default TotalMoney;
