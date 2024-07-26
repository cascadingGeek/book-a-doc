"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { DoctorServices, PatientServices } from "@/utils/mockData";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      style={{
        display: `${
          pathname !== "/sign-in" && pathname !== "/sign-up" ? "flex" : "none"
        }`,
        gap: 10,
        backgroundColor: "#000",
        width: "100%",
        padding: "40px 70px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          gap: 30,
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Image src="/logo-dark.png" alt="logo" width={200} height={200} />
          <Text fontSize="md" style={{ color: "#fff", fontWeight: "normal" }}>
            BookADoc is a patient facing web / mobile application where patients
            can search and discover providers by illness, specialist or name of
            the provider
          </Text>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <Text
            fontSize="md"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Services for Patients
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PatientServices.map((data) => (
              <Link
                href={data.link}
                key={data.key}
                style={{ color: "#fff", fontWeight: "normal" }}
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <Text
            fontSize="md"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Services for Doctors
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {DoctorServices.map((data) => (
              <Link
                href={data.link}
                key={data.key}
                style={{ color: "#fff", fontWeight: "normal" }}
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <Text
            fontSize="md"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "normal" }}>
              1-888-123-4567
            </Text>
            <Text style={{ color: "#fff", fontWeight: "normal" }}>
              help@bookadoc.com
            </Text>
          </div>
        </div>
      </div>
      <span style={{ height: "1px", width: "100%", backgroundColor: "#777" }} />
      <div style={{ marginTop: "30px", width: "100%" }}>
        <Text fontSize="md" style={{ color: "#777", fontWeight: "normal" }}>
          <span style={{ fontWeight: "bold" }}>BookADoc</span> is a patient
          facing web / mobile application where patients can search and discover
          providers by illness, specialist or name of the provider
        </Text>
        <Text fontSize="md" style={{ color: "#777", fontWeight: "normal" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          debitis, dolor nostrum illum ad doloremque est beatae similique
          inventore ipsum aliquid sunt suscipit iste, quod nesciunt veritatis
          omnis vitae excepturi.
        </Text>
      </div>
    </div>
  );
};
export default Footer;
