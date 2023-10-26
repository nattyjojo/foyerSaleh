import bcrypt from "bcrypt";

const hashPassword = (myPlaintextPassword) => {
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    // Store hash in your password DB.
  });
};
