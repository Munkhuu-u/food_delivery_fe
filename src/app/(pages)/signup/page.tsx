"use client";
//    Could not open page.tsx in the editor.
//    When running on Windows, file names are checked against an access list to protect against remote code execution attacks. File names may consist only of alphanumeric characters (all languages), periods, dashes, slashes, and underscores.
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useState } from "react";
import { CheckedBoxIcon, ClosedEyeIcon, OpenEyeIcon } from "./icons";
// import "../global.css";

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
    console.log("start working");
    console.log({ "showPassword1:": showPassword });
    setShowPassword(!showPassword);
    console.log({ "showPassword2:": showPassword });
  };
  // setShowPassword((showPassword) => !showPassword);
  return (
    <div className="bg-red-300 mt-[74px]">
      <div className="flex flex-col max-w-[440px] mx-auto p-[32px] bg-red-500">
        <h2 className="flex flex-col items-center">Бүртгүүлэх</h2>
        <div className="flex flex-col bg-blue-400 space-y-[16px] mt-[48px]">
          {inputs.map((e) => (
            // eslint-disable-next-line react/jsx-key
            <div className="">
              <p>{e.name}</p>
              <input className="" placeholder={e.placeholderName}></input>
              <div onClick={handleClickShowPassword}>
                {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
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
