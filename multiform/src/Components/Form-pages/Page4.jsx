import "./page.css";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../Context/StepContext";

const Page4 = () => {
  const { setStep } = useContext(StepContext);
  const navigate = useNavigate();
  const hendelClick = () => {
    setStep(1);
    navigate("/");
  };
  return (
    <div>
      <div className="stack">
        <div className="done">
          <span className="material-symbols-rounded">done</span>
        </div>
      </div>

      <div className="container">
        <h2 className="title">Congratulations, Eren!</h2>

        <p className="sub-title">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
      <div className="stack">
        <button className="button-9" onClick={hendelClick}>
          Launch Eden
        </button>
      </div>
    </div>
  );
};

export default Page4;
