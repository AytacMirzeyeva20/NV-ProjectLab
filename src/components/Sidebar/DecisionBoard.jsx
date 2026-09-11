import { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "../Main/Main";
function DecisionBoard(){
   const [decisions, setDecisions] = useState([
  {
    id: 1,
    question: "Where should I study?",
    options: [
      { id: 1, name: "Library" },
      { id: 2, name: "Home" },
      { id: 3, name: "Cafe" },
    ],
  },
  {
    id: 2,
  question: "Which laptop should I buy?",
  options: [
    { id: 1, name: "MacBook" },
    { id: 2, name: "Dell" },
    { id: 3, name: "Lenovo" },
  ],
  },
  {
  id: 3,
  question: "What language should I learn?",
  options: [
    { id: 1, name: "English" },
    { id: 2, name: "German" },
    { id: 3, name: "Spanish" },
  ],
},
]);
const [currentDecision, setCurrentDecision] = useState(1);
const decision = decisions.find(
  (item) => item.id === currentDecision
);
    return(
        <>
        <Sidebar decisions={decisions} currentDecision={currentDecision} setCurrentDecision={setCurrentDecision} />
        <Main decision={decision} />
        </>
    )
}
export default DecisionBoard