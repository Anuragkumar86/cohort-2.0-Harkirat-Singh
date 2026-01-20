import { FormEvent, useState } from "react";
// import { React } from "react";
import { SigninInput} from '@anuragkumar86/medium-commons/dist/zod';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const LeftPartSignin = () => {
  const [formData, setFormData] = useState<SigninInput>({email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const  sendRequest = async (c: any) =>{
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, formData)

      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs")
    }catch(e){
      return c.json({
        msg: "error accured during connection "
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    setError("");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Create an account</h2>
      <p className="text-gray-600 mb-6">
        {/* Already have an account? <a href="signin" className="text-blue-500">Login</a> */}
        {"Don't have account? "}
        <Link to = {"/signup"} className="text-blue-500 underline">
        {"Signup"}
        </Link>
      </p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        
        <label className="font-semibold">Email</label>
        <input type="email" name="email" placeholder="m@example.com" className="w-full p-3 border rounded mb-4 mt-2" onChange={handleChange} />
        <label className="font-semibold mb-3">Password</label>
        <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded mb-4 mt-2" onChange={handleChange} />
        <button onClick={sendRequest} type="submit" className="w-full bg-black text-white p-3 rounded">{"Sign in"}</button>
      </form>
    </div>
  );
};

const RightPartSignin = () => {
    return (
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col justify-center">
        <blockquote className="text-lg italic mb-4">
          "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
        </blockquote>
        <p className="font-bold">Jules Winnfield</p>
        <p className="text-gray-600">CEO, Acme Inc.</p>
      </div>
    );
  };

  export { LeftPartSignin, RightPartSignin };

  