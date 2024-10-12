"use client";
//    Could not open page.tsx in the editor.
//    When running on Windows, file names are checked against an access list to protect against remote code execution attacks. File names may consist only of alphanumeric characters (all languages), periods, dashes, slashes, and underscores.
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useState } from "react";
import {
  CheckedBoxIcon,
  ClosedEyeIconPass,
  OpenEyeIconPass,
  ClosedEyeIconPassAgain,
  OpenEyeIconPassAgain,
} from "./icons";
// import "../global.css";
import { Montserrat } from "next/font/google";
// import { Open_Sans } from "next/font/google";
// const openSans = Open_Sans({
const openSans = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
type Props = {};

const inputs: { name: string; placeholderName: string }[] = [
  { name: "Нэр", placeholderName: "Нэрээ оруулна уу" },
  { name: "И-Мэйл", placeholderName: "И-Мэйл хаягаа оруулна уу" },
  { name: "Хаяг", placeholderName: "Та хаягаа оруулна уу" },
  { name: "Нууц үг", placeholderName: "Нууц үгээ оруулна уу" },
  { name: "Нууц үг давтах", placeholderName: "Нууц үгээ оруулна уу" },
];

export default function Page({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    console.log("pressed handleClickShowPassword");
  };

  const [showPasswordAgain, setShowPasswordAgain] = useState(false);
  const handleClickShowPasswordAgain = () => {
    setShowPasswordAgain(!showPasswordAgain);
  };

  // setShowPassword((showPassword) => !showPassword);
  return (
    <div className="mt-[74px]">
      <div className="flex flex-col max-w-[440px] mx-auto p-[32px]">
        <h2
          className={`${openSans.className} flex flex-col items-center font-bold text-3xl`}
        >
          Бүртгүүлэх
        </h2>
        <div className="flex flex-col space-y-[16px] mt-[48px]">
          {inputs.map((e) => (
            // eslint-disable-next-line react/jsx-key
            <div className="relative w-full ">
              <p>{e.name}</p>
              <input
                className="w-full bg-gray border-[1px] border-darkgray rounded pl-[16px] py-[14.5px]"
                placeholder={e.placeholderName}
                type={
                  e.name == "Нууц үг"
                    ? showPassword
                      ? ""
                      : "password"
                    : e.name == "Нууц үг давтах"
                    ? showPasswordAgain
                      ? ""
                      : "password"
                    : ""
                }
              ></input>
              <div
                onClick={
                  e.name == "Нууц үг"
                    ? handleClickShowPassword
                    : handleClickShowPasswordAgain
                }
                className="absolute right-[17px] top-10 border-solid"
              >
                {e.name == "Нууц үг" ? (
                  showPassword ? (
                    <OpenEyeIconPass />
                  ) : (
                    <ClosedEyeIconPass />
                  )
                ) : (
                  ""
                )}
                {e.name == "Нууц үг давтах" ? (
                  showPasswordAgain ? (
                    <OpenEyeIconPassAgain />
                  ) : (
                    <ClosedEyeIconPassAgain />
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <CheckedBoxIcon width={24} height={24} fill="#1C1B1F" />
          {/* Property 'checkedBox' does not exist on type 'JSX.IntrinsicElements */}
        </div>
        <button className="bg-slate-500">Бүртгүүлэх</button>
      </div>
    </div>
  );
}
