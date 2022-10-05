import React, { useContext} from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../Context/StepContext";

const Page3 = () => {
  const { step, setStep } = useContext(StepContext);
 

  const navigate = useNavigate();
  const hendelClick = () => {
    setStep(step + 1);
    navigate("/page4");
  };
  return (
    <div className="container">
      <h2 className="title">How are you planning to use Eden?</h2>

      <p className="sub-title">
        We'll streamline your setup experience accordingly.
      </p>

      <div className="stack">
        <div className="check-flex">
          <div className="checkbox" id="border1">
            <span className="material-symbols-rounded" id="logo1">person</span>
            <h6>For myself</h6>
            <p>Write better. Think more clearly. Stay organized</p>
          </div>
          <div className="checkbox">
            <span className="material-symbols-rounded">groups</span>
            <h6>With my team</h6>
            <p>Wikis, docs, tasks & projects, all in one place.</p>
          </div>
        </div>
        <button className="button-9" onClick={hendelClick}>
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default Page3;
