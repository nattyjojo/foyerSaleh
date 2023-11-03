import axios from "axios";

const getUser = async () => {
  const getCooKie = document.cookie;
  console.log({ getCooKiesss: getCooKie });

  const cookie = getCooKie.split("=")[1];
  if (cookie) {
    try {
      const postdata = await axios.post(
        "http://localhost:5000/get-user",
        { cookie: cookie },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return postdata;
    } catch (err) {
      console.log(err);
    }
  } else {
    return { data: null };
  }
};
export default getUser;
