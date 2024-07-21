import React from "react";
import Header from "../../common/Header";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handler = () => navigate("/");

  return (
    <div>
      <Header title="Expense Tracker Contact" />
      <main>
        <section>
          <h1>Contact Details</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias
            saepe quisquam obcaecati porro excepturi illum provident officia
            harum id eius, officiis necessitatibus maxime cupiditate iste
            corrupti ipsa. Voluptas delectus minus dolorum similique recusandae
            itaque fugiat labore magni corrupti culpa illo quidem eius numquam,
            et excepturi cupiditate, soluta exercitationem tenetur deleniti
            laboriosam, temporibus earum nobis sit laborum. Quis magni
            perferendis, dignissimos ipsam doloremque sint dolorem id enim
            molestias itaque eaque hic? Quisquam unde aperiam velit in quas quae
            non eos obcaecati, assumenda consequatur dolor nemo error vel
            veritatis dolore laudantium. Minima obcaecati quam voluptate atque
            doloremque nemo aut quibusdam dolores.
          </p>
          <button type="button" onClick={handler}>
            Return to Home
          </button>
        </section>
      </main>
    </div>
  );
};

export default Contact;
