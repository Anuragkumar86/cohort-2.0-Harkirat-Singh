import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">


                <Heading label={"Sign up"}></Heading>
                <SubHeading label={"Enter Your Information to Create an Account"}></SubHeading>
                <InputBox onChange={(e) => {
                    setFirstName(e.target.value);
                }} label={"First Name"} placeholder={"Enter your first name"}></InputBox>
                <InputBox onChange={(e) => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Enter your last name"}></InputBox>
                <InputBox onChange={(e) => {
                    setUserName(e.target.value);
                }} label={"Email"} placeholder={"Enter your usename/email"}></InputBox>
                <InputBox onChange={(e) => {
                    setPassword(e.target.value);
                }} label={"Password"} placeholder={"Enter your password"}></InputBox>


                <Button onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        firstName,
                        lastName,
                        username,
                        password
                    })
                    localStorage.setItem("token", response.data.token);
                }} label={"Sign up"}></Button>

                <BottomWarning label={"Already have an Account"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>

            </div>
        </div>
    </div>
}