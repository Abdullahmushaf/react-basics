import React, { useState } from "react";

const ExpenseForm = ({
  inputData,
  setInputData,
  submitHandler,
  resetClickHandler,
}) => {
  //   const [title, setTitle] = React.useState("");
  //   const [date, setDate] = useState("");
  //   const [price, setPrice] = React.useState("");

  const inputChangeHandler = (e) => {
    // setInputData({ ...inputData, [e.target.name]: e.target.value });
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // const data = {
  //   //   title,
  //   //   price,
  //   //   date,
  //   // };

  //   listItemsHandler(inputData);

  //   setInputData({
  //     name: "",
  //     price: "",
  //     date: "",
  //   });
  // };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input
          type="text"
          name="name"
          id="title"
          value={inputData.name}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <div>
          <label htmlFor="date">Date</label> <br />
          <input
            type="date"
            name="date"
            id="date"
            value={inputData.date}
            onChange={inputChangeHandler}
          />
        </div>
        <label htmlFor="price">Price</label> <br />
        <input
          type="number"
          name="price"
          id="price"
          value={inputData.price}
          onChange={inputChangeHandler}
        />
      </div>
      <button type="submit">{inputData?.id ? "Update" : "Add"}</button>
      {inputData?.id && (
        <button type="button" onClick={resetClickHandler}>
          Reset
        </button>
      )}
    </form>
  );
};

export default ExpenseForm;
