import "./page.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../Context/StepContext";

const Page2 = () => {
  const { step, setStep } = useContext(StepContext);

  const navigate = useNavigate();
  const hendeSubmit = () => {
    setStep(step + 1);
    navigate("/page3");
  };

  return (
    <div className="container">
      <h2 className="title">Let's set up a home for all your work</h2>
      <p className="sub-title">You can always create another workspace later</p>
      <form onSubmit={hendeSubmit}>
        <div className="main">
          <div className="borderblack">
            <p className="input-name">Workspace Name</p>

            <input required={true} placeholder="Eden" size="lg" />
          </div>
          <div className="borderblack">
            <p className="input-name">Workspace URL(Optional)</p>

            <div className="input-addon">
              {/* <!-- Add-on --> */}
              <div className="input-addon__addon input-addon__addon--prepended">
                www.eden.com/
              </div>

              {/* <!-- Input --> */}
              <input
                required
                type="text"
                className="input-addon__input"
                placeholder="Example"
              />
            </div>
          </div>
          <button className="button-9" type="submit">
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page2;
