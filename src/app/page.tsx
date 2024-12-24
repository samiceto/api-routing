import Link from "next/link";


export default async function Home() {
  let todos=await fetch("https://jsonplaceholder.typicode.com/posts")
  let todos2=await todos.json();
  const limitedTodos = todos2.slice(0, 10);
  return (
  <div>
    <div className="text-center text-lg text-green-800 font-bold my-20"><p className="text-red-600 text-2xl">Todos List from the API </p>{limitedTodos.map((brick:any,index:any)=>{
      return(
        
        <div className="flex justify-between gap-5 w-[50vw] mx-auto" key={brick.id}><h1>{index+1}</h1><span className="w-[40vw] text-start"><Link href={`${brick.id}`}>{brick.title}</Link></span></div>
      )
    })}</div>
  </div>
  );
}
