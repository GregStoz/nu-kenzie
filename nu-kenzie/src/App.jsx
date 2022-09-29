import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard/Dashboard";
import Index from "./pages/Index";
import "./index.css";

const App = () => {
  const [isConnected, setConnected] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [search, setSearch] = useState([]);
  const [filter, setFilter] = useState("todos");
  

  const [data, setData] = useState({
    description: "",
    type: "entrada",
    value: "",
  });

  function removeItem(selectedItem) {
    const newList = listTransactions.filter((item) => item !== selectedItem);
    setListTransactions(newList);

    if (search.length > 0) {
      const filteredList = search.filter((item) => item !== selectedItem);
      setSearch(filteredList);
    }
  }

  function handleButton() {
    const newItem = {
      description: data.description,
      type: data.type,
      value: data.value,
    };
    if (data.description === "") {
      alert("Defina uma descrição");
      window.location.reload();
    }

    if (data.value === "" || data.value < 0) {
      alert("Defina um valor válido (inteiro/positivo)");
      window.location.reload();
    }
    if (data.type === "despesa") {
      newItem.value = -data.value;
    }

    setListTransactions([...listTransactions, newItem]);

    setData({
      description: "",
      type: "entrada",
      value: "",
    });
  }

  function handleSearch(type) {
    const newList = listTransactions.filter((item) => item.type === type);

    setSearch(newList);
    setFilter(type);
  }

  function resetList() {
    setSearch([]);
    setFilter("todos");
  }

  return (
    <>
      {isConnected ? (
        <>
          <Header login={setConnected} />
          <main>
            <div className="adjust__div">
              <Form handleButton={handleButton} setData={setData} data={data} />
              <TotalMoney list={listTransactions} />
            </div>

            <div className="adjust__div">
              <Menu
                handleSearch={handleSearch}
                resetList={resetList}
                filter={filter}
              />
              <Dashboard
                itemList={listTransactions}
                removeItem={removeItem}
                search={search}
                filter={filter}
              />
            </div>
          </main>
        </>
      ) : (
        <>
          <Index login={setConnected} />
        </>
      )}
    </>
  );
};

export default App;
