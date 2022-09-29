import Card from "../Card/Card";
import "./Dashboard.css";

const Dashboard = ({ itemList, removeItem, search, filter }) => {
  const render = filter !== "todos" ? search : itemList;
  

  return (
    <div className="container__dashboard">
      {render.length ? (
        render.map((item, index) => (
          <Card key={index} item={item} removeItem={removeItem} />
        ))
      ) : (
        <>
          <h2 className="margin__top">
            Ainda não há transações em <strong>{filter.toUpperCase()}</strong>
          </h2>
          <div className="placeholder__img margin__top">
            <div className="placeholder__text"></div>
            <div className="placeholder__text short"></div>
          </div>
          <div className="placeholder__img margin__top">
            <div className="placeholder__text"></div>
            <div className="placeholder__text short"></div>
          </div>
          <div className="placeholder__img margin__top">
            <div className="placeholder__text"></div>
            <div className="placeholder__text short"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
