import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen bg-gradient-project " id="getintouch">
      <div className="items-center justify-center flex flex-col py-10">
        <h1 className="sm:text-[100px] text-center text-white">Contact</h1>
        <div className="max-w-[300px] h-[500px] bg-gradient-hero rounded-3xl shadow-2xl flex flex-col justify-center items-center ">
          <h1 className="font-bold text-[50px] text-white/85">Hire me</h1>
          <form
            onSubmit={handleSubmit((submit) => {
              console.log(submit);
            })}
            className="px-10 py-20 flex-col gap-5 flex"
          >
            <input
              {...register("name", { required: "please enter your name" })}
              type="name"
              placeholder="name"
              className="px-5 py-2 rounded-md"
            />
            <p className="text-black text-[15px] ">{errors.name?.message}</p>
            <input
              {...register("email", { required: "please enter email" })}
              type="email"
              placeholder=" email"
              className="px-5 py-2 rounded-md"
            />
            <p className="text-black text-[15px] ">{errors.email?.message}</p>

            <Button>Hire me</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
