import { TiStar } from "react-icons/ti";
function Home(){
    return(
        <>
       <section className="relative min-h-200 bg-cover bg-center flex items-center justify-center px-6"
  style={{
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLchh6sYb29mM0oGM8yyV0YhREsNMwSdU8Mkt3XZjSw&s=10')",
  }}>
 
  <div className="absolute inset-0 bg-purple-950/60"></div>
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