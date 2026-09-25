import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const StudentForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    fatherName: "",
    motherName: "",
    collegeName: "",
    course: "",
    branch: "",
    year: "",
    rollNumber: "",
    enrollmentNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    github: "",
    linkedin: "",
    terms: false,
  });

  const schema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),

    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),

    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters"),

    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[6-9]\d{9}$/,
        "Enter a valid 10 digit phone number"
      ),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),

    dob: Yup.string()
      .required("Date of birth is required"),

    gender: Yup.string()
      .required("Gender is required"),

    fatherName: Yup.string()
      .required("Father name is required")
      .min(2, "Father name must be at least 2 characters"),

    motherName: Yup.string()
      .required("Mother name is required")
      .min(2, "Mother name must be at least 2 characters"),

    collegeName: Yup.string()
      .required("College name is required"),

    course: Yup.string()
      .required("Course is required"),

    branch: Yup.string()
      .required("Branch is required"),

    year: Yup.string()
      .required("Year is required"),

    rollNumber: Yup.string()
      .required("Roll number is required"),

    enrollmentNumber: Yup.string()
      .required("Enrollment number is required"),

    address: Yup.string()
      .required("Address is required")
      .min(10, "Address must be at least 10 characters"),

    city: Yup.string()
      .required("City is required"),

    state: Yup.string()
      .required("State is required"),

    pincode: Yup.string()
      .required("Pincode is required")
      .matches(/^\d{6}$/, "Pincode must be 6 digits"),

    country: Yup.string()
      .required("Country is required"),

    github: Yup.string()
      .required("Github URL is required")
      .url("Enter a valid Github URL"),

    linkedin: Yup.string()
      .required("LinkedIn URL is required")
      .url("Enter a valid LinkedIn URL"),

    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms"),
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
      title: "Registration Successful!",
      text: "Student registered successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    reset();
  };


  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Student Registration Form
        </h1>

        {/* FIRST NAME */}

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            First Name
          </label>

          <input
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Last Name
          </label>

          <input
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            {...register("username")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter 10 digit phone number"
            {...register("phone")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            {...register("password")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Date of Birth
          </label>

          <input
            type="date"
            {...register("dob")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dob.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Gender
          </label>

          <select
            {...register("gender")}
            className="w-full border border-slate-300 rounded-lg p-3"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gender.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Father's Name
          </label>

          <input
            type="text"
            placeholder="Enter father's name"
            {...register("fatherName")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.fatherName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fatherName.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Mother's Name
          </label>

          <input
            type="text"
            placeholder="Enter mother's name"
            {...register("motherName")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.motherName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.motherName.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            College Name
          </label>

          <input
            type="text"
            placeholder="Enter college name"
            {...register("collegeName")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.collegeName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.collegeName.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Course
          </label>

          <select
            {...register("course")}
            className="w-full border border-slate-300 rounded-lg p-3"
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
          </select>

          {errors.course && (
            <p className="text-red-500 text-sm mt-1">
              {errors.course.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Branch
          </label>

          <select
            {...register("branch")}
            className="w-full border border-slate-300 rounded-lg p-3"
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
          </select>

          {errors.branch && (
            <p className="text-red-500 text-sm mt-1">
              {errors.branch.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Year
          </label>

          <select
            {...register("year")}
            className="w-full border border-slate-300 rounded-lg p-3"
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>

          {errors.year && (
            <p className="text-red-500 text-sm mt-1">
              {errors.year.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Roll Number
          </label>

          <input
            type="text"
            placeholder="Enter roll number"
            {...register("rollNumber")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.rollNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.rollNumber.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Enrollment Number
          </label>

          <input
            type="text"
            placeholder="Enter enrollment number"
            {...register("enrollmentNumber")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.enrollmentNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.enrollmentNumber.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Address
          </label>

          <textarea
            placeholder="Enter address"
            {...register("address")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            City
          </label>

          <input
            type="text"
            placeholder="Enter city"
            {...register("city")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.city.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            State
          </label>

          <input
            type="text"
            placeholder="Enter state"
            {...register("state")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.state && (
            <p className="text-red-500 text-sm mt-1">
              {errors.state.message}
            </p>
          )}
        </div>

        {/* PINCODE */}

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Pincode
          </label>

          <input
            type="text"
            placeholder="Enter 6 digit pincode"
            {...register("pincode")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.pincode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pincode.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Country
          </label>

          <input
            type="text"
            placeholder="Enter country"
            {...register("country")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Github URL
          </label>

          <input
            type="text"
            placeholder="https://github.com/username"
            {...register("github")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.github && (
            <p className="text-red-500 text-sm mt-1">
              {errors.github.message}
            </p>
          )}
        </div>


        <div className="mb-5">
          <label className="block font-semibold mb-2">
            LinkedIn URL
          </label>

          <input
            type="text"
            placeholder="https://linkedin.com/in/username"
            {...register("linkedin")}
            className="w-full border border-slate-300 rounded-lg p-3"
          />

          {errors.linkedin && (
            <p className="text-red-500 text-sm mt-1">
              {errors.linkedin.message}
            </p>
          )}
        </div>


        <div className="mb-6">
          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              {...register("terms")}
            />

            <span>
              I accept the Terms & Conditions
            </span>

          </label>

          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.terms.message}
            </p>
          )}
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700"
        >
          Register Student
        </button>

      </form>
    </div>
  );
};

export default StudentForm;