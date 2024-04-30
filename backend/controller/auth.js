import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; /*a way to send the user a web token they can use for authorization */
import User from "../models/User.js";

/*RegisterUser*/
export const register = async (req, res) => {
  /*This has to be asynchronous cause we are going to be calling mongo data base.so when we call to the mongo db that is going to be async.It is like an api call we would do from frontend to backend then backend to database 


req=request body we get from the front end 
res=respond we are going to send to the front end 
*/
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    /*Destructuring this from req.body.On the front end we have to send an object that contains this parameters */
    const salt = await bcrypt.genSalt();
    /*it is going to generate random salt providing by bcrypt.We rae going to use this salt to encrypt our password  */
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      /*The way this register function will work is we are going to encrypt our password ,we are going to save it.After we save when the user tries login we are going to provide the password or they are going to provide their password and we are going to salt that again and we are going to make sure that is the correct one  and we are going to give them a json web token   */

      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
/*Logging in*/
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    /*We are grabbing the pass and email when the user tries to login  */
    const user = await User.findOne({ email: email });
    /* We are going to use mongoose to try to find the one that has this specified email and brings back all the user info here  */
    if (!user) return res.status(400)({ msg: "User does not exist." });
    /*when the user can not be found or put a wrong email address */
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400)({ msg: "Invalid credentials" });

    const token = jwt.sign({ is: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
