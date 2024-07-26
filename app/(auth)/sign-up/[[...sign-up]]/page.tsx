import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
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
      <SignUp />
    </main>
  );
};
export default SignUpPage;
