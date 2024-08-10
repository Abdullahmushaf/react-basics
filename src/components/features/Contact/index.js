import React, { useState } from "react";
import Header from "../../common/Header";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputChangeHandler = (e) => {
    console.log(e);
    setContactForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handler = () => navigate("/");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };

  return (
    <div>
      <Header title="Expense Tracker Contact" />
      <main>
        <section>
          <h1>Contact Details</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi animi
            iusto rerum est impedit ea! Itaque sed repudiandae molestias quo!
          </p>

          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="fname">First Name</label> <br />
              <input
                type="text"
                name="fname"
                id="fname"
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="lname">Last Name</label> <br />
              <input
                type="text"
                name="lname"
                id="lname"
                onChange={inputChangeHandler}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
