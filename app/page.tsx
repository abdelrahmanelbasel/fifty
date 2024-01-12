import { Background } from "@/app/components/Background";
import {Noto_Sans} from 'next/font/google'
import { twMerge } from "tailwind-merge";

const NotoFont = Noto_Sans({
  weight: "variable",
  style: "normal",
  subsets: ['latin'],
  display: "swap",
})

const notoClassName = NotoFont.className


export default function Home() {
  return (
    <main className="flex flex-col justify-center gap-4 items-center h-screen w-screen overflow-hidden">
      <Background /> 
      {/* <img src="/dalia.png" alt="" className="z-10 border-4 border-white pointer-events-none rounded-full aspect-square w-16 h-16 overflow-hidden"/> */}
      <h1 className={twMerge("text-4xl md:text-6xl pointer-events-none z-10 font-extrabold text-blue-400 animate-in fade-in", notoClassName)} style={{
        animationDuration: "2000ms"
      }}>Fifty Shades Of Slaaay</h1>
      <h2 className="italic absolute bottom-0 pb-4 z-10 pointer-events-none text-red-500 animate-in fade-in zoom-in" style={{
        animationDuration: "2500ms"
      }}>Arsany&Robin: Where are the promoters?</h2>
      {/* <div className="absolute bottom-0 left-0 px-4 py-2 italic text-white font-mono"> */}
        {/* ASDA Wave 15  */}
      {/* </div> */}
      <ul className="absolute inset-0 py-2 px-4 text-white italic">
        <li>Abdelrahman Elbasel</li>
        <li>Mohamed Rafik</li>
        <li>Habiba Mohammed</li>
        <li>Banan Molhem</li>
        <li>Abdelrahman Mahmoud</li>
        <li>Mahmoud Tarek</li>
        <li>Yara EidYousef</li>
        <li>Mirna Mohamed</li>
        <li>Reem Sami</li>
        <li>Mohammed Yasser</li>
        <li>Marwa Sayed</li>
        <li>Nasr Magdy</li>
        <li>Nada Essam</li>
        <li>Nada Hazem</li>
      </ul>
    </main>
  );
}
