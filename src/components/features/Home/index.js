import React from "react";
import Header from "../../common/Header";

const Home = () => {
  return (
    <>
      <Header title="Expense Tracker" />
      <main>
        <section>
          <form>
            <input type="text" name="" id="" /> <br />
            <button type="submit">Add</button>
          </form>
        </section>

        <section>
          <ul>
            <li>
              <div className="date">Date</div>
              <div className="date">title</div>
              <div className="date">
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </div>
            </li>
            <li>
              <div className="date">Date</div>
              <div className="date">title</div>
              <div className="date">
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </div>
            </li>
            <li>
              <div className="date">Date</div>
              <div className="date">title</div>
              <div className="date">
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
