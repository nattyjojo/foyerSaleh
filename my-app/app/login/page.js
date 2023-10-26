import Login from "../layouts/login";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};
export default LoginPage;

// function create(user, callback) {}

// exports.onExecutePostUserRegistration = async (event, api) => {
//   const MongoClient = require("mongodb").MongoClient;
//   const bcrypt = require("bcrypt");

//   const client = new MongoClient(
//     "mongodb+srv://nattyjojo9:DyCHnQmOa8ZHqPR8@cluster0.amdpeg8.mongodb.net/?retryWrites=true&w=majority"
//   );
//   const user = event.user;
//   client.connect(function (err) {
//     if (err) return err;

//     const db = client.db("db-name");
//     const users = db.collection("users");
//     bcrypt.hash(user.password, 10, function (err, hash) {
//       if (err) {
//         client.close();
//         return err;
//       }

//       user.password = hash;
//       users.insert(user);
//       client.close();
//     });
//   });
// };
