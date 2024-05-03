const { response } = require("express");
const Users = require("../Database/user");

exports.getUsers = (req, res) => {
  Users.find()
    .then((response) => {
      res
        .status(200)
        .json({ message: "Users fetched successfully", users: response });
    })
    .catch((err) => console.log(err));
};

exports.getUserById = (req, res) => {
    const { askedId } = req.params;
    const updatedUser = req.body;
    Users.findByIdAndUpdate(askedId, updatedUser)
    .then((updatedUserData) => {
        if (!updatedUserData) {
            return res.status(404).json({ message: "User not found" });
        }
        res
          .status(200)
          .json({ message: "Users fetched successfully", users: updatedUserData });
      })
      .catch(error => {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal server error" });
    });
}

exports.deleteUser = (req,res) => {
    const { askedId } = req.params;
    Users.findByIdAndDelete(askedId)
    .then(response => {
        res
        .status(200)
        .json({ message: "User deleted successfully", users: response });
    })
    .catch(error => {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Internal server error" });
    });
}

exports.postUser = (req, res) => {
  const {
    address: {
      geolocation: { lat, long },
      city,
      street,
      building,
      zipcode,
    },
    email,
    username,
    name: { firstname, lastname },
    phone,
    photo,
    title,
    description,
  } = req.body;
  const newUser = new Users({
    address: {
        geolocation: { lat, long },
        city,
        street,
        building,
        zipcode,
      },
      email,
      username,
      name: { firstname, lastname },
      phone,
      photo,
      title,
      description,
  });
  newUser
    .save()
    .then((response) => {
      res.status(200).json({
        message: "User Details saved Successfully",
        details: response,
      });
    })
    .catch((err) => res.status(500).json({ Error: err }));
};
