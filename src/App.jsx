import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import FormHandling from "./components/FormHandling";
import FormHandling2 from  "./components/FormHandling2";
import FormHandling3 from "./components/FormHandling3";

const data = [
  {
    songName: "Tu Yhi Hai",
    Artist: "Shehnaaz Gill",
    image:
      "https://plus.unsplash.com/premium_photo-1673188701836-3021f61e9b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3N8ZW58MHx8MHx8fDA%3D",
    Added: false,
  },
  {
    songName: "Senorita",
    Artist: "T-series",
    image:
      "https://images.unsplash.com/photo-1540829016269-e05670f88adb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3N8ZW58MHx8MHx8fDA%3D",
    Added: false,
  },

  {
    songName: "Waka Waka Africa",
    Artist: "Shakira, Freshlyground",
    image:
      "https://images.unsplash.com/photo-1516916759473-600c07bc12d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZ3N8ZW58MHx8MHx8fDA%3D",
    Added: false,
  },

  {
    songName: "Shankra - Trance",
    Artist: "Psychotrap",
    image:
      "https://images.unsplash.com/photo-1667523143908-b8ba833aaa55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbmdzfGVufDB8fDB8fHww",
    Added: false,
  },
];

function App() {
  const [newdata, setNewdata] = useState(data);

  const handleClick =(index) =>{

    setNewdata((prev) => {
      return prev.map(( item , newIndex) =>{
        if(newIndex === index) return {...item , Added : !item.Added};
          return item ;
       
        })


    } )

    



  }

  return (
    <>
      <div className=" w-full h-screen bg-zinc-300 ">
        
        <Navbar  data= {newdata} />

        <div className="mt-32 px-20 flex flex-wrap gap-10 ">
          {newdata.map((items, index) => (
            <Card key={index} values={items} index ={index} handleClick = {handleClick}  />
          ))}
        </div>
      </div>

      <FormHandling></FormHandling>
      <FormHandling2></FormHandling2>
      <FormHandling3></FormHandling3>
     
    </>
  );
}

export default App;
