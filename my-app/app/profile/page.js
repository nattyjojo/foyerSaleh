"use client";
import UserProfileLayout from "../layouts/userProfile";
import Header from "../components/header";
import MainFooter from "../components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <>
        <Header />
        <p className="mt-[6rem]">is loading....</p>
        <MainFooter />
      </>
    );
  }
  if (error) {
    console.log(error);
    return (
      <>
        <Header />
        <p className="mt-[6rem]">{error.message}</p>
        <MainFooter />
      </>
    );
  }

  const email = user.email;
  const email_verified = user.email_verified;
  const given_name = user.given_name;
  const locale = user.locale;
  const name = user.name;

  const nickname = user.nickname;
  const picture = user.picture;
  const sid = user.sid;
  const sub = user.sub;

  const updated_at = user.updated_at;

  return (
    <>
      <Header />
      <UserProfileLayout
        email={email}
        name={name}
        picture={picture}
        nickname={nickname}
        locale={locale}
      />

      <MainFooter />
    </>
  );
};

export default Profile;
// export default handleAuth(Profile, {
//   returnTo: "/profile", // Specify the URL to redirect to upon successful authentication
// });
