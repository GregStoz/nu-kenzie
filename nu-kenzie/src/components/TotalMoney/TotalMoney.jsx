import "./TotalMoney.css";

const TotalMoney = ({ list }) => {
  if (list) {
    const totalValue = list.reduce((add, currentValue) => {
      return currentValue.value + add;
    }, 0);

    return (
      <div className="container__total margin__top">
        <h2>Total:</h2>
        <span>R$ {totalValue.toFixed(2).replace(".", ",")}</span>
      </div>
    );
  }
};
export default TotalMoney;
