import express from 'express'

const app = express();

app.use(express.json())

const otpStore: Record<string, string> = {}; 

app.post("/generate-otp", (req, res): any => {
    const email = req.body.email;

    if(!email){
        return res.status(400).json({
            msg: "email required"
        })
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;
    console.log(`otp for ${email} is: ${otp}`);
    res.status(500).json({
        msg: "Otp generated Successfully"
    })
})

app.post("/reset-password", (req, res): any =>{
    const {email, otp, newpassword} = req.body

    if(!email || !otp || !newpassword){
        return res.status(400).json({
            msg: "email Missing OR otp missing OR newpassword misssing"
        })
    }
    if(otpStore[email] === otp){
        console.log(`Password Successfully reset to ${newpassword}`)
        res.status(500).json({
            msg: "Password reset Successfully"
        })
    }
    else{
        res.status(400).json({
            msg: "Invalid OTP"
        })

    }

})

app.listen(3000, ()=>{
    console.log("app is listening at port 3000");
})