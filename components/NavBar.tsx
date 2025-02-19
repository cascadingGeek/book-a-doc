"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Navigations } from "@/utils/mockData";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: `${
          pathname !== "/sign-in" && pathname !== "/sign-up" ? "flex" : "none"
        }`,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "auto",
      }}
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={150}
        style={{ cursor: "pointer" }}
      />

      <ul style={{ display: "flex", gap: 20 }}>
        {Navigations.map((data) => (
          <li key={data.key} style={{ listStyle: "none" }}>
            <Link
              href={data.href}
              prefetch={false}
              style={{
                textDecoration: "none",
                fontWeight: "normal",
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: "13px",
              }}
            >
              {data.name}
              {(data.name === "Services" && <IoChevronDown />) ||
                (data.name === "Doctors" && <IoChevronDown />)}
            </Link>
          </li>
        ))}
      </ul>
      <ButtonGroup gap="4">
        <SignedOut>
          <Button
            size="sm"
            variant="solid"
            style={{
              borderRadius: 50,
              backgroundColor: "#fff",
              color: "#000",
              fontSize: "13px",
              fontWeight: "normal",
              padding: "10px 20px",
            }}
          >
            <SignInButton>Sign In</SignInButton>
          </Button>
          <Button
            size="sm"
            variant="solid"
            style={{
              borderRadius: 50,
              backgroundColor: "#fff",
              color: "#000",
              fontSize: "13px",
              fontWeight: "normal",
            }}
          >
            <SignUpButton>Clinic Sign Up</SignUpButton>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <Link href="/sign-in">
          
            
          </Button>
        </Link>
        <Link href="/sign-up">
          {" "}
          
            
          </Button>{" "}
        </Link> */}
      </ButtonGroup>
    </nav>
  );
};
export default NavBar;
