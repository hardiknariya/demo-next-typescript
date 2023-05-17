import type { NextPage } from "next";
import "../styles/Home.module.scss";
import { Modal } from "../components";

interface categoryObj {
  text: string;
  subCategory: categoryObj[];
}

const Home: NextPage = () => {
  const onClickPlus = () => {};

  return (
    <div className="container" id="home">
      <div className="button-container">
        <h3 className="m-0 button-label">category</h3>
        <button className="plus-button p-0" onClick={onClickPlus}>
          +
        </button>
      </div>
      <Modal title="Hello" />
    </div>
  );
};

export default Home;
