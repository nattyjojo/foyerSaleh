import axios from "axios";
const updataUserData = async (formData) => {
  console.log({ formDatassss: formData });

  const postUserData = axios.post(
    "http://localhost:5000/update-user-data",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    } // application/json
  );
};

export default updataUserData;
