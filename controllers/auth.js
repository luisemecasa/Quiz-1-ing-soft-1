const userModel = require("../models/user");
const { generateToken, refreshToken } = require("../utils/jwt");
const bcrypt = require ("bcrypt");

//crear la funcion para el registro -sign in
const signin = async (req, res) => {
  const {firstname, lastname, email, current_password} = req.body;
  try {
    if(!email) {
      res.status(400).json({ message : "El email es requerido"});
      throw new Error ("el email es requerido");
    }
    if(!current_password) {
      res.status(400).json({ message : "la contraseña es requerida"});
      throw new Error ("la contraseña es requerido");
    }

    const emailLowerCase = email.toLowerCase();
    const salt = await bcrypt.genSalt(10);
    const current_password_hash = await bcrypt.hash(current_password, salt);

    console.log(emailLowerCase, current_password_hash);

    const newUser = await userModel.create({
      firstname,
      lastname,
      email: emailLowerCase,
      current_password: current_password_hash,
    });

    const userStorage = await newUser.save();
    /* const userData = req.body;
    console.log(userData);
    const newUser = new userModel(userData);
    console.log(newUser);
    await newUser.save();*/
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, current_password } = req.body;
  console.log(req.body);
  try {
    if (!email || !current_password) {
      throw new Error("El email y la contraseña son obligatorios");
    }
    const emailLowerCase = email.toLowerCase();
    console.log(emailLowerCase);
    const userStore = await userModel.findOne({ email: emailLowerCase }).exec();

    if (!userStore) {
      throw new Error("El ususario no existe");
    }

    const check = await bcrypt.compare(
      current_password,
      userStore.current_password,
    );

    if(!check) {
      throw new Error("la contraseña no es correcta");
    }

    const token = await generateToken(userStore);
    const refresh = await refreshToken(userStore);
    console.log(token);

    res.status(200).json({ acess: token, refresh: refresh });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getMe = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await userModel.findById(id);


    res.status(200).json(response);
} catch (err) {
    res.status(400).json({ message: err.message });
}
};
module.exports = {
  signin,
  login,
  getMe,
};
