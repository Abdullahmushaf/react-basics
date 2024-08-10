import React, { useState } from "react";
import Header from "../../common/Header";
import ExpenseForm from "../../common/ExpenseForm";

const Home = () => {
  const [lists, setLists] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    date: "",
  });

  // const listItemsHandler = (data) => {
  //   setLists((prevState) => [
  //     { ...data, id: Math.floor(Math.random() * 1000) },
  //     ...prevState,
  //   ]);
  // };

  const actionHandler = (id, actionType) => {
    console.log(id, actionType);
    if (actionType === "edit") {
      const newList = lists.filter((d) => d.id === id);
      setInputData({
        name: newList[0].name,
        price: newList[0].price,
        date: newList[0].date,
        id: newList[0].id,
      });
    }

    if (actionType === "delete") {
      const newList = lists.filter((d) => d.id !== id);
      setLists(newList);
    }
  };

  const resetClickHandler = () => {
    setInputData({
      name: "",
      price: "",
      date: "",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const data = {
    //   title,
    //   price,
    //   date,
    // };

    // listItemsHandler(inputData);
    if (inputData?.id) {
      const newList = lists.map((d) => {
        if (inputData.id === d.id) {
          return {
            name: inputData.name,
            price: inputData.price,
            date: inputData.date,
            id: inputData?.id,
          };
        }
        return d;
      });
      setLists(newList);
    } else {
      setLists((prevState) => [
        { ...inputData, id: Math.floor(Math.random() * 1000) },
        ...prevState,
      ]);
    }

    setInputData({
      name: "",
      price: "",
      date: "",
    });
  };
  return (
    <>
      <Header title="Expense Tracker" />
      <main>
        <section>
          <ExpenseForm
            resetClickHandler={resetClickHandler}
            inputData={inputData}
            setInputData={setInputData}
            submitHandler={submitHandler}
          />
        </section>

        <section>
          <ul>
            {lists && lists.length ? (
              lists.map((d, idx) => (
                <li key={idx}>
                  <div className="date">{d.date}</div>
                  <div className="date">{d.title}</div>
                  <div className="date">${d.price}</div>
                  <div className="date">
                    <button
                      type="button"
                      onClick={() => actionHandler(d?.id, "edit")}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => actionHandler(d?.id, "delete")}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <h4>No record found!</h4>
            )}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
