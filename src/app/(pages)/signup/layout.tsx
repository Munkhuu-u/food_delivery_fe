import { PineconeIcon } from "./icons";
// import {style} from "../../global.css"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <PineconeIcon />
      <div className="flex flex-row bg-slate-500">
        <p className="">НҮҮР</p>
        <p className="">ХООЛНЫ ЦЭС</p>
        <p className="">ХҮРГЭЛТИЙН БҮС</p>
        <input placeholder="Хайх"></input>
        <p>Сагс</p>
        <p>Нэвтрэх</p>
      </div>
      {children}
    </section>
  );
}
