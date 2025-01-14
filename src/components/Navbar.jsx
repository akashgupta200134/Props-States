

const Navbar = ({data}) => {
  return (
    <div className="flex justify-between items-center ">
     
     <h1 className=" p-10 text-orange-600  font-extrabold text-5xl ">
      MOZIK
     </h1>

    <div  className="mr-16 font-semibold bg-orange-500 px-6 py-2 rounded-full text-white">
      <h1 className="text-lg">Favourites <span className=" font-bold text-red-600 bg-white rounded-[100%] px-2 py-1 h-1 w-1">{data.filter(item => item.Added).length}</span></h1>
    </div>


    </div>
  )
}

export default Navbar;