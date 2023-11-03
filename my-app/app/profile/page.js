"use client";
import UserProfileLayout from "../layouts/userProfile";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import getUser from "../lib/getUser";
import UpdateData from "../layouts/updateData";

const Profile = () => {
  const router = useRouter();
  const [showDashboard, setShowDashboard] = useState(false);
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUserData = await getUser();

        const userData = getUserData.data;
        if (userData === null) {
          router.push("/");
        } else {
          setProfileData(userData);
          setShowDashboard(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  // const name = user.name;
  // const email = user.email;
  // const email_verified = user.email_verified;
  // const given_name = user.given_name;
  // const locale = user.locale;

  // const nickname = user.nickname;
  // const picture = user.picture;
  // const sid = user.sid;
  // const sub = user.sub;

  // const updated_at = user.updated_at;

  if (showDashboard) {
    return (
      <>
        <Header />

        <UserProfileLayout
          email={profileData.email}
          name={profileData.name}
          // picture={picture}
          // nickname={nickname}
          // locale={locale}
        />
        <UpdateData userId={profileData._id} />

        <MainFooter />
      </>
    );
  }
};

export default Profile;
