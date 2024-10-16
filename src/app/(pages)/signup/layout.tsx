import { JSXElementConstructor } from "react";
import {
  PineconeIcon,
  Basket,
  Person,
  Search,
  Facebook,
  Instagram,
  Twitter,
} from "./icons";
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

  const footerOptions: { name: string }[] = [
    { name: "Нүүр" },
    { name: "Холбоо барих" },
    { name: "Хоолны цэс" },
    { name: "Үйлчилгээний нөхцөл" },
    { name: "Хүргэлтийн бүс" },
    { name: "Нууцлалын бодлого" },
  ];
  const footerLinks: { icon: JSX.Element }[] = [
    { icon: <Facebook /> },
    { icon: <Instagram /> },
    { icon: <Twitter /> },
  ];

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="max-w-[1258px] mx-auto px-[24px] py-[8px] flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <PineconeIcon />
          {navBarLeftButtons.map((e) => {
            return (
              <button className="flex py-[8px] px-[16px] items-center justify-center font-bold text-base leading-[16px]">
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
              className="border-[1px] h-full border-none"
            ></input>
          </div>
          {navBarRightButtons.map((e) => {
            return (
              <div className="flex flex-row justify-center items-center px-[16px] py-[8px]">
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
      <div className="flex flex-col justify-center items-center bg-enabledGreenFill">
        <div className="max-w-[1200px] flex flex-row justify-between gap-[95px]">
          {footerOptions.map((e) => {
            return <p>{e.name}</p>;
          })}
        </div>
        <div className="flex flex-row gap-[18px]">
          {footerLinks.map((e) => {
            return <div>{e.icon}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
