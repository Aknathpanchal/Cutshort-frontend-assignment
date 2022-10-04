import React from "react";
import "./page.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../Context/StepContext";

const Page1 = () => {
  const { step, setStep } = useContext(StepContext);

  const navigate = useNavigate();
  const hendeSubmit = () => {
    setStep(step + 1);
    navigate("/page2");
  };

  return (
    <div className="container">
      <h2 className="title">Welcome! First things first...</h2>

      <p className="sub-title">You can always change them later.</p>

      <form onSubmit={hendeSubmit}>
        <div className="main">
          <div className="borderblack">
            <p className="input-name">Full Name</p>

            <input required={true} placeholder="Steve Jobs" />
          </div>
          <div className="borderblack">
            <p className="input-name">Display Name</p>

            <input placeholder="Steve" required={true} />
          </div>
          <button className="button-9" type="submit">
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page1;
