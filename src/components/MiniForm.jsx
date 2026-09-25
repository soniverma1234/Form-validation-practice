import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const MiniForm = () => {

  const schema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),

    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),

    phone: Yup.string()
      .required("Phone is required")
      .matches(
        /^[6-9]\d{9}$/,
        "Enter a valid 10 digit phone number"
      ),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    Swal.fire({
      title: "Success!",
      text: "Form submitted successfully",
      icon: "success",
    });
reset();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[450px] bg-white p-8 rounded-2xl shadow-lg"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Mini Form
        </h1>


        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter name"
            {...register("name")}
            className="w-full border p-3 rounded-lg"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>


        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
            className="w-full border p-3 rounded-lg"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>


        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter phone"
            {...register("phone")}
            className="w-full border p-3 rounded-lg"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>


        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter password"
            {...register("password")}
            className="w-full border p-3 rounded-lg"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
            className="w-full border p-3 rounded-lg"
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default MiniForm;