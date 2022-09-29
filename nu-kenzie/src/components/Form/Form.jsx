import "./Form.css";

const Form = ({ handleButton, setData, data }) => {
  return (
    <form className="margin__top">
      <label htmlFor="description" className="">
        Descrição da transação
      </label>
      <input
        required
        name="description"
        type="text"
        placeholder="Ex: Ingressos cinema"
        value={data.description}
        onChange={(event) =>
          setData({ ...data, description: event.target.value })
        }
      />
      <div className="container__flex">
        <div className="column__fix">
          <label htmlFor="value">Valor</label>
          <input
            required
            className="input__value"
            name="value"
            type="number"
            placeholder="Valor"
            value={data.value}
            onChange={(event) =>
              setData({ ...data, value: Number(event.target.value) })
            }
          />
        </div>
        <div className="column__fix">
          <label htmlFor="type">Tipo de transação</label>
          <select
            name="type"
            placeholder="Selecione"
            value={data.type}
            onChange={(event) => setData({ ...data, type: event.target.value })}
          >
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button className="input__value" type="button" onClick={handleButton}>
        Adicionar
      </button>
    </form>
  );
};

export default Form;
