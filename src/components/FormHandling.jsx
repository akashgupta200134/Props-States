// this is the  first way to handling form usinf UseRef function 

import { useRef } from "react";


const FormHandling = () => {

    const name = useRef(null);
    const age = useRef(null);
    const email = useRef(null);


 const submitHandler = (event) =>{
     
    event.preventDefault();
    console.log(name.current.value , age.current.value , email.current.value);
    

 }







    return (
        <div className="mt-36 mb-36 ml-24">
            <form className=" flex justify-center items-center gap-5 " onSubmit={submitHandler} action="">


                <input ref={name}
                    className="border-2  text-start  border-indigo-800 h-10 w-64 "
                    type="text"
                    placeholder="name"
                />

                <input ref={age}
                    className="border-2   border-indigo-800 h-10 w-64 "
                    type="text"
                    placeholder="age"
                />

                <input ref={email}
                    className="border-2   border-indigo-800 h-10 w-64 "
                    type="text"
                    placeholder="email"
                />

                <input className=" bg-slate-300 border h-10 w-64" type="submit" />

            </form>




        </div>
    );
};

export default FormHandling;
