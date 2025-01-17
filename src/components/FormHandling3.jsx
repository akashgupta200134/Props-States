import { useForm } from "react-hook-form";

const FormHandling3 = () => {


  const { register, handleSubmit } = useForm();





  return (
    <div className="mt-36 mb-36 ml-24">
      <h1 className=" text-5xl font-bold text-center mb-10">
        Form Handling Using React Hook Form</h1>

      <form
        className=" flex justify-center items-center gap-5 "
        onSubmit={handleSubmit((data) => console.log(data))}   action="" >

        <input
          {...register("name")}
          className="border-2  text-start  border-indigo-800 h-10 w-64 "
          type="text"
          placeholder="name"
        />

        <input
          {...register("age")}
          className="border-2   border-indigo-800 h-10 w-64 "
          type="text"
          placeholder="age"
        />

        <input className=" bg-slate-300 border h-10 w-64" type="submit" />
      </form>
    </div>
  );
};

export default FormHandling3;
