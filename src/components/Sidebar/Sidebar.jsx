function Sidebar({decisions,currentDecision,setCurrentDecision,setFormOpen}){
    return(
        <>
 <aside className="w-full rounded-2xl border border-purple-200 bg-purple-50 p-5 md:w-64 mt-3 ml-3">
     <h2 className="mb-5 rounded-xl bg-purple-100 px-4 py-3 font-semibold text-purple-900">
My Decisions
  </h2>
    {decisions.map((decision) => (
  <div key={decision.id}>
  <p onClick={()=>setCurrentDecision(decision.id)}
  className={`mb-5 rounded-xl px-4 py-3 font-semibold ${currentDecision === decision.id ? "bg-purple-200 text-purple-900"  : "bg-white text-purple-900"
  }`}
>
  {decision.question}
</p>
  </div>
))}
 <div onClick={()=>setFormOpen(true)} className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-purple-300 bg-white px-4 py-3 text-purple-900 transition hover:border-purple-500 hover:bg-purple-50 hover:shadow-sm">
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-xl font-semibold text-purple-700">
    +
  </span>
  <h3 className="font-semibold">New Decision</h3>
</div>
        </aside>
        </>
    )
}
export default Sidebar;