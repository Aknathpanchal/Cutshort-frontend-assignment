import React, { useContext } from "react";
import "./steper.css";
import { StepContext } from "../../Context/StepContext";
import { useNavigate } from "react-router-dom";

const Steper = () => {
  const navigate = useNavigate();
  const { step, setStep } = useContext(StepContext);

  let borderclr = "#EDF2F7";
  let c1 = step >= 1 ? "#664DE5" : borderclr;
  let c2 = step >= 2 ? "#664DE5" : borderclr;
  let c3 = step >= 3 ? "#664DE5" : borderclr;
  let c4 = step >= 4 ? "#664DE5" : borderclr;

  let b1 = step >= 1 ? "#664DE5" : "white";
  let b2 = step >= 2 ? "#664DE5" : "white";
  let b3 = step >= 3 ? "#664DE5" : "white";
  let b4 = step >= 4 ? "#664DE5" : "white";

  let t1 = step >= 1 ? "white" : "rgb(108, 108, 108)";
  let t2 = step >= 2 ? "white" : "rgb(108, 108, 108)";
  let t3 = step >= 3 ? "white" : "rgb(108, 108, 108)";
  let t4 = step >= 4 ? "white" : "rgb(108, 108, 108)";

  return (
    <div className="cont">

      <div className="grid">
        <div style={{backgroundColor:c1}}/>
        <div style={{backgroundColor:c2}}/>
        <div style={{backgroundColor:c2}}/>
        <div style={{backgroundColor:c3}}/>
        <div style={{backgroundColor:c3}}/>
        <div style={{backgroundColor:c4}}/>
      </div>

      <div className="no-box no-box1" value="1" style={{borderColor:borderclr,color:t1,background:b1}} onClick={(e)=>{
        setStep(1)
        navigate("/")}}>1</div>
      <div className="no-box no-box2" value="2" style={{borderColor:borderclr,color:t2,background:b2}} onClick={(e)=>{
        setStep(2)
        navigate("/page2")}}>2</div>
      <div className="no-box no-box3" value="3" style={{borderColor:borderclr,color:t3,background:b3}} onClick={(e)=>{
        setStep(3)
        navigate("/page3")}}>3</div>
      <div className="no-box no-box4" value="4" style={{borderColor:borderclr,color:t4,background:b4}} onClick={(e)=>{
        setStep(4)
        navigate("/page4")}}>4</div>

    </div>
  );
};

export default Steper;
