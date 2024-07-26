import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main
      style={{
        color: "#000",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <SignIn />
    </main>
  );
};
export default SignInPage;
