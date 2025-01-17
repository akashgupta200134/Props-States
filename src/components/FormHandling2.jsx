import { useState } from "react";



const formHandling2 = () => {
   
const [val, setVal] = useState({ name : "",  age : ""});



    const submitHandler =(event) =>{
        event.preventDefault();
       
        
    }


    const namechangeHandler =(event) =>{
        setVal({...val , name : event.target.value });
        console.log(event.target.value);
        

    }

    const agechangeHandler =( event) =>{
        setVal({...val , age : event.target.value});
    } 







  return (
    <div className="mt-36 mb-36 ml-24">
    <h1 className=" text-5xl font-bold text-center mb-10"> Form Handling Using controlled Components i.e UseState </h1>
    <form className=" flex justify-center items-center gap-5 " onSubmit={submitHandler} action="">


        <input  onChange={namechangeHandler}
            className="border-2  text-start  border-indigo-800 h-10 w-64 "
            type="text"
            placeholder="name"
        />

        <input onChange={agechangeHandler}
            className="border-2   border-indigo-800 h-10 w-64 "
            type="text"
            placeholder="age"
        />

        {/* <input 
            className="border-2   border-indigo-800 h-10 w-64 "
            type="text"
            placeholder="email"
        /> */}

        <input className=" bg-slate-300 border h-10 w-64" type="submit" />

    </form>




</div>
  )
}

export default formHandling2