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
const[formopen,setFormOpen]=useState(false);
const[newquestion,setNewQuestion]=useState("");
const[newoption,setNewOption]=useState("");
const[newoptions,setNewOptions]=useState([]);
const handleOption=()=>{
if(newoption.trim()=== ""){
return;
}
setNewOptions([
    ...newoptions,
    {
      id: Date.now(),
      name: newoption,
    },
  ]);

  setNewOption("");
}
const handleCreateDecision = () => {
  if (newquestion.trim() === "" || newoptions.length === 0) {
    return;
  }

  const newDecision = {
    id: Date.now(),
    question: newquestion,
    options: newoptions,
  };

  setDecisions([...decisions, newDecision]);

  setCurrentDecision(newDecision.id);

  setFormOpen(false);

  setNewQuestion("");
  setNewOption("");
  setNewOptions([]);
};
    return(
        <>
        {formopen && (
  <div className="mt-6 ml-5 mr-5 rounded-2xl border border-purple-200 bg-white p-6 shadow-sm">
    <h2 className="mb-2 text-xl font-bold text-purple-900">
      Create New Decision
    </h2>
      <p className="mb-5 text-sm text-gray-500">
      Write a question you want to make a decision about.
    </p>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Decision question
    </label>
<input type="text" value={newquestion} onChange={(e) => setNewQuestion(e.target.value)} 
 placeholder="What is your decision?" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100"/>
 {newoptions.map((option)=>(
    <div key={option.id} className="mt-3 rounded-xl bg-purple-50 px-4 py-3 text-sm font-medium text-purple-900" >
    {option.name}
  </div>
 ))}
 <input type="text" value={newoption}  onChange={(e) => setNewOption(e.target.value)}
  placeholder="Add an option"
  className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800"/>
  <button onClick={handleOption} type="button" className="rounded-xl mt-5 bg-purple-100 px-5 py-3 font-semibold text-purple-800 transition hover:bg-purple-200">
      +
 </button>
 <button onClick={handleCreateDecision} type="button" className="mt-5 ml-3 rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800" >
  Create Decision
</button>
  </div>
)}
        <Sidebar decisions={decisions} currentDecision={currentDecision} setCurrentDecision={setCurrentDecision} setFormOpen={setFormOpen} />
        <Main decision={decision} />
        </>
    )
}
export default DecisionBoard