import type { NextPage } from "next";
import "../styles/Home.module.scss";
import { Modal } from "../components";
import Input from "../components/Input";
import { createRef, useRef, useState } from "react";

interface categoryObj {
  text: string;
  subCategory?: categoryObj[] | any;
  edit: boolean;
  type?: "SERVICE" | "CATEGORY";
}

const Home: NextPage = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [abyss, setAbyss] = useState<categoryObj[]>([]);
  const [categoryIndex, setCategoryIndex] = useState<number | any>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onClickPlus = () => {
    setAbyss([...abyss, { text: "", subCategory: [], edit: true }]);
  };
  const onClickMinus = (index: number) => {};

  const saveElement = (
    value: string,
    index: number,
    subCategoryIndex: number | undefined
  ) => {
    console.log("subCategoryIndex--------->>2", subCategoryIndex);
    let arr: categoryObj[] = [...abyss];
    if (subCategoryIndex) {
      arr[index].subCategory[subCategoryIndex] = {
        text: value,
        subCategory: [],
        edit: false,
      };
    } else {
      arr[index] = { text: value, subCategory: [], edit: false };
    }
    setAbyss([...arr]);
  };

  const editElement = (index: number) => {
    let arr: categoryObj[] = [...abyss];
    arr[index] = { ...arr[index], edit: true };
    setAbyss([...arr]);
  };

  const onClickAddSubCate = (index: number) => {
    console.log("click....");
    setCategoryIndex(index);
    setModalVisible(true);
  };

  const onClickCategoryType = (index: number) => {
    setModalVisible(false);
    let arr: categoryObj[] = [...abyss];
    arr[index] = {
      ...arr[index],
      subCategory: [
        ...arr[index].subCategory,
        { text: "yes", subCategory: [], edit:true, type: "CATEGORY" },
      ],
      edit: false,
    };
    console.log("arr---------------------<>>", arr);
    setAbyss([...arr]);
  };

  console.log("abyss---------------------<>>", abyss);

  let c_id = -1;
  const renderItem = (
    item: categoryObj,
    index: number,
    subCategoryIndex: number
  ) => {
    console.log("subCategoryIndex--------->>", subCategoryIndex);

    c_id++;
    return (
      <div>
        <Input
          key={index}
          item={item}
          onClickAdd={(value: string) =>
            saveElement(value, index, subCategoryIndex)
          }
          onClose={() => onClickMinus(index)}
          onClickEdit={() => editElement(index)}
          onClickSub={() => onClickAddSubCate(index)}
        />
        {!!item.subCategory &&
          item.subCategory.map((o: categoryObj, i: number) =>
            renderItem(o, i, c_id)
          )}
      </div>
    );
  };

  return (
    <div className="container" id="home">
      <div className="button-container">
        <h3 className="m-0 button-label">category</h3>
        <button className="plus-button p-0" onClick={onClickPlus}>
          +
        </button>
      </div>
      <div style={{ display: "flex" }}>
        {!!abyss &&
          abyss.map((item: categoryObj, index: number) => {
            c_id++;

            return renderItem(item, index, c_id);
          })}
      </div>

      <Modal
        title="Hello"
        isVisible={modalVisible}
        onClickCategory={() => onClickCategoryType(categoryIndex)}
      />
    </div>
  );
};

export default Home;
