import { useState } from "react";
import "./ProgressStep.scss";
const active = "active";
const Text = "ProgressStep__text";
const space = "ProgressStep__space";

const ProgressSteps = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="ProgressStep">
      <div className="ProgressStep__container">
        <h3 className={count >= 1 ? `${Text} ${active}` : Text}>1</h3>
        <span className={count >= 2 ? `${space} ${active}` : space}></span>
        <h3 className={count >= 2 ? `${Text} ${active}` : Text}>2</h3>
        <span className={count >= 3 ? `${space} ${active}` : space}></span>
        <h3 className={count >= 3 ? `${Text} ${active}` : Text}>3</h3>
        <span className={count >= 4 ? `${space} ${active}` : space}></span>
        <h3 className={count >= 4 ? `${Text} ${active}` : Text}>4</h3>
      </div>
      <div className="container">
        <button
          onClick={() => count > 1 && setCount(count - 1)}
          className={count <= 1 ? "null" : ""}
        >
          Prew
        </button>
        <button
          onClick={() => count < 4 && setCount(count + 1)}
          className={count >= 4 ? "null" : ""}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
