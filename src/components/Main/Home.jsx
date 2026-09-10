import { TiStar } from "react-icons/ti";
function Home(){
    return(
        <>
       <section className="relative min-h-125 bg-cover bg-center flex items-center justify-center px-6"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1532073145718-62df48eaa35e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWR5JTIwYWVzdGhldGljfGVufDB8fDB8fHww')",
  }}>
 
  <div className="absolute inset-0 bg-black/55"></div>
  <div className="relative z-10 max-w-4xl text-center text-white">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
      Hər qərar, daha yaxşi bir gələcəyə aparir.
    </h1>
    <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
      Burada öz qərarlarini qeyd edir, hansi mövzulari daha çox oxumaq
      istədiyini planlaşdirirsan.
    </p>
    <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-5 py-3">
      <TiStar className="text-2xl text-white" />

      <p className="text-sm sm:text-base text-gray-100">
        Böyük məqsədlər kiçik addimlarla başlayir.
      </p>
    </div>
  </div>
</section>
        </>
    )
}
export default Home;