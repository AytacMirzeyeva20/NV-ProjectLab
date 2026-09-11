function Sidebar({decisions}){
    return(
        <>
 <aside className="w-full rounded-2xl border border-purple-200 bg-purple-50 p-5 md:w-64">
     <h2 className="mb-5 rounded-xl bg-purple-100 px-4 py-3 font-semibold text-purple-900">
My Decisions
  </h2>
    {decisions.map((decision) => (
  <div key={decision.id}>
  <p className="mb-5 rounded-xl bg-white px-4 py-3 font-semibold text-purple-900">
 {decision.question}
  </p>
  </div>
))}
        </aside>
        </>
    )
}
export default Sidebar;