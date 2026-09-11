import { useState } from "react";
import Sidebar from "./Sidebar";
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
]);
    return(
        <>
        <Sidebar decisions={decisions}/>
        </>
    )
}
export default DecisionBoard