

const Card = ({values , handleClick ,index}) => {

    return (
        <div className=" bg-zinc-100 w-60  p-4 rounded-lg  flex gap-4 pb-10  relative">
            <div className=" h-20 w-20  bg-orange-500 rounded-md">
            <img className=" h-full w-full object-fill shrink-0 rounded-md" src={values.image}/>

            </div>

            <div className=" ">
                <h1 className="text-xl font-semibold">{values.songName} </h1>
                <h2 className=" text-sm font-medium">{values.Artist}</h2>





            </div>

            <button  onClick={() => handleClick(index)} className= { ` ${ values.Added === true ? "bg-blue-500" : "bg-orange-500" } absolute bottom-0 whitespace-nowrap  left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-sm rounded-full px-4 py-3`}>{ values.Added === true ? "Added" :"Add To Favourites" }</button>





        </div>
    )
}

export default Card