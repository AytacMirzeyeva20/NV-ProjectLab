import { MdDomainVerification } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { IoIosCafe } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
function Main({decision}) {
    const[select,setSelectOpen]=useState("");
    const[result,setResult]=useState("");
    const handleSubmit=()=>{
        if(select=== ""){
            return;
        }
        setResult(select);
    }
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
]);
const [currentDecision, setCurrentDecision] = useState(1);
  return (
    <section className="bg-gray-50 p-6 md:p-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <MdDomainVerification className="text-3xl text-gray-800" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
             {decision.question}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Choose one option
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
       <div className="space-y-4">
  {decision.options.map((option) => (
    <div
      key={option.id}
      className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-400 hover:shadow-md">
      <div className="flex items-center gap-4">

        {option.name === "Library" && (
          <BiLibrary className="text-2xl text-gray-700" />
        )}

        {option.name === "Home" && (
          <IoMdHome className="text-2xl text-gray-700" />
        )}

        {option.name === "Cafe" && (
          <IoIosCafe className="text-2xl text-gray-700" />
        )}

        <label
          htmlFor={`option-${option.id}`}
          className="font-medium text-gray-800"
        >
          {option.name}
        </label>

        <input
          type="radio"
          id={`option-${option.id}`}
          name="study-option"
          className="h-4 w-4"
          checked={select === option.name}
          onChange={() => setSelectOpen(option.name)}
        />
      </div>

      <div className="flex items-center gap-3">
        <IoIosArrowForward className="text-gray-400" />
      </div>
    </div>
  ))}
</div>
</div>
     <div className="mt-8 flex justify-center">
  <button onClick={handleSubmit} className="rounded-xl bg-black px-8 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-gray-800 hover:shadow-lg">
    Submit Decision
  </button>
</div>
{result && (
  <p className="mt-6 text-center text-lg font-semibold text-gray-800">
    Your decision: {result}
  </p>
)}
    </section>
  );
}
export default Main;