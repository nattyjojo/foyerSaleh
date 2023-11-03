"useClient";
import { useState } from "react";
import updataUserData from "../lib/updataUserData";
import { useEffect } from "react";
import FormData from "form-data";

const UpdateData = (UserId) => {
  const [idCard, setIdCard] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [isData, setIsdada] = useState(false);

  const newFile = (event, cat) => {
    const fileName = event.target.files[0].name;
    const fileExtension = fileName.split(".")[1];
    const newfileName = UserId.userId + `-${cat}.` + fileExtension;
    const newFile = new File([event.target.files[0]], newfileName, {
      type: event.target.files[0].type,
    });
    return newFile;
  };
  useEffect(() => {
    const handleData = async () => {
      const formData = new FormData();
      formData.append("profilePhoto", profilePhoto);
      formData.append("idCard", idCard);
      formData.append("expiryDate", expiryDate);
      formData.append("UserId", UserId.userId);
      await updataUserData(formData);
    };
    handleData();
  }, [isData]);

  return (
    <section className="bg-[rgba(0,0,0,0.75)] flex justify-center py-[5rem]  w-[100vw]  fixed top-0">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsdada(!isData);
        }}
        className="border flex flex-col bg-[black] opacity-full text-center p-[10rem] justify-items-center"
      >
        <label className=" font-bold  text-smallest">Upload Photo</label>
        <input
          onChange={(event) => {
            const getNewFile = newFile(event, "profile-photo");
            setProfilePhoto(getNewFile);
          }}
          className=""
          type="file"
          name="profilePhoto"
        ></input>

        <label className="font-bold text-smallest">Upload ID Card</label>
        <input
          onChange={(event) => {
            const getNewFile = newFile(event, "id-card");
            setIdCard(getNewFile);
          }}
          type="file"
          name="idCard"
        ></input>
        <label className=" font-bold text-smallest">
          Enter ID Card Expirey Date
        </label>
        <input
          onChange={(event) => setExpiryDate(event.target.value)}
          type="date"
          name="date"
        ></input>
        <button
          className="py-3 border rounded-full hover:bg-[red] mt-10"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default UpdateData;
