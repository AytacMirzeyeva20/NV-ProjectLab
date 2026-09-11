import { MdDomainVerification } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { IoIosCafe } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
function Main() {
    const[select,setSelectOpen]=useState("");
    const[result,setResult]=useState("");
    const handleSubmit=()=>{
        if(select=== ""){
            return;
        }
        setResult(select);
    }
  return (
    <section className="bg-gray-50 p-6 md:p-10">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <MdDomainVerification className="text-3xl text-gray-800" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Where should I study?
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Choose one option
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-400 hover:shadow-md">
          <div className="flex items-center gap-4">
            <BiLibrary className="text-2xl text-gray-700" />

            <label htmlFor="library" className="font-medium text-gray-800">
              Library
            </label>
            <input  type="radio" id="library" name="study-option" className="h-4 w-4" 
            checked={select === "Library"}
onChange={() => setSelectOpen("Library")}
            />
          </div>

          <div className="flex items-center gap-3">
            <IoIosArrowForward className="text-gray-400" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-400 hover:shadow-md">
          <div className="flex items-center gap-4">
            <IoMdHome className="text-2xl text-gray-700" />

            <label htmlFor="home" className="font-medium text-gray-800">
              Home
            </label>
             <input type="radio" id="home" name="study-option" className="h-4 w-4" 
              checked={select === "Home"}
onChange={() => setSelectOpen("Home")}
             />
          </div>

          <div className="flex items-center gap-3">
            <IoIosArrowForward className="text-gray-400" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-400 hover:shadow-md">
          <div className="flex items-center gap-4">
            <IoIosCafe className="text-2xl text-gray-700" />

            <label htmlFor="cafe" className="font-medium text-gray-800">
              Cafe
            </label>
              <input  type="radio" id="cafe"  name="study-option" className="h-4 w-4"
               checked={select === "Cafe"}
onChange={() => setSelectOpen("Cafe")}
              />
          </div>
          <div className="flex items-center gap-3">
            <IoIosArrowForward className="text-gray-400" />
          </div>
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