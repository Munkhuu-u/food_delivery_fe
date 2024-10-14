import { JSXElementConstructor } from "react";
import { PineconeIcon, Basket, Person, Search } from "./icons";
// import {style} from "../../global.css"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const navBarLeftButtons: { name: string; icon: JSX.Element | null }[] = [
    { name: "", icon: <PineconeIcon /> },
    { name: "НҮҮР", icon: null },
    { name: "ХООЛНЫ ЦЭС", icon: null },
    { name: "ХҮРГЭЛТИЙН БҮС", icon: null },
  ];

  const navBarRightButtons: { name: string; icon: JSX.Element | null }[] = [
    { name: "Сагс", icon: <Basket /> },
    { name: "Нэвтрэх", icon: <Person /> },
  ];

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="max-w-[1258px] mx-auto px-[24px] py-[8px] flex flex-row justify-between items-center bg-green-300">
        <div className="flex flex-row bg-blue-400">
          <PineconeIcon />
          {navBarLeftButtons.map((e) => {
            return (
              <button className="flex py-[8px] px-[16px] items-center justify-center font-bold text-base leading-[16px]  bg-slate-500 border-[1px] border-purple-500">
                {e.name}
              </button>
            );
          })}
        </div>
        <div className="flex flex-row gap-2">
          <div className="relative py-[8px] pl-[48px] pr-[16px] border-[1px] border-black rounded-[8px] bg-white">
            <div className="absolute w-fit left-4 inset-y-0 flex items-center">
              <Search />
            </div>
            <input
              placeholder="Хайх"
              className="border-[1px] border-green-600 h-full"
            ></input>
          </div>
          {navBarRightButtons.map((e) => {
            return (
              <div className="flex flex-row justify-center items-center gap-2 px-[16px] py-[8px]">
                {e.icon}
                <button className="flex py-[8px] px-[16px] items-center justify-center font-bold text-base leading-[16px]">
                  {e.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {children}
    </section>
  );
}
