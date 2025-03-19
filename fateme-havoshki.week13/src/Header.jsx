import React from "react";
import styles from "./StyleHeader.module.css";
import { useState } from "react";

function Header() {
  const [newdata, setnewdata] = useState({
    TabClick1: "content1",
    TabClick2: "content2",
    TabClick3: "content3",
    TabClick4: "content4",
  });
  const [Text, SetText] = useState(newdata.TabClick1);
  const [step, setstep] = useState(1);

  const clickHandeler = (text, step) => {
    SetText(text);
    setstep(step);
  };
  return (
    <>
      <header className={styles.header}>
        <p>Tabs Component With React</p>
        <button
          className={`${styles.btn} ${step === 1 ? styles.btnclick : ""}`}
          onClick={() => clickHandeler(newdata.TabClick1, 1)}
        >
          Tab1
        </button>
        <button
          className={`${styles.btn} ${step === 2 ? styles.btnclick : ""}`}
          onClick={() => clickHandeler(newdata.TabClick2, 2)}
        >
          Tab2
        </button>
        <button
          className={`${styles.btn} ${step === 3 ? styles.btnclick : ""}`}
          onClick={() => clickHandeler(newdata.TabClick3, 3)}
        >
          Tab3
        </button>
        <button
          className={`${styles.btn} ${step === 4 ? styles.btnclick : ""}`}
          onClick={() => clickHandeler(newdata.TabClick4, 4)}
        >
          Tab4
        </button>
      </header>
      <div className={styles.main}>
        <h1>{Text}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          accusamus repudiandae, aspernatur eius, cumque maiores voluptatibus
          aperiam quo, ad animi velit dicta error. Non omnis sit cumque
          laudantium repellat sed?
        </p>
      </div>
    </>
  );
}

export default Header;
