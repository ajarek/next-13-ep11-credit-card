'use client'

import { Share_Tech_Mono } from "next/font/google";
import Image from "next/image";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // odwrócić kierunek pochylenia
	max:            35,     // maksymalny obrót pochylenia (stopnie)
	perspective:    1000,   // Zmień perspektywę, im niższa, tym bardziej ekstremalne będzie pochylenie.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Szybkość przejścia wejście/wyjście.
	transition:     true,   // Ustaw przejście przy wejściu/wyjściu.
	axis:           null,   // Jaka oś powinna być wyłączona. Może być X lub Y.
	reset:          true,    // Jeśli efekt pochylenia musi zostać zresetowany przy wyjściu.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Zwolnienie przy wejściu/wyjściu.
}

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const CreditCard = () => {
  return (
    <Tilt options={defaultOptions}  className={`${shareTechMono.className} w-[425px] h-[270px] bg-gradient-to-tr rounded-2xl flex content-center items-center justify-center from-[#9C2CF3] to-[#3A49F9] `}>
    <div className="w-full h-full  p-8 relative ">
      <Image
       className="absolute"
       alt="mastercard"
       src="/visa.svg"
       width={70}
       height={24}
      />
       <Image
            className="absolute right-8  top-6 my-auto "
            alt="wifi"
            src="/wifi.svg"
            width={60}
            height={30}
          />
       <Image
            className="absolute right-8 bottom-0 top-0 my-auto bg-yellow-600 rounded-xl shadow-lg"
            alt="chip"
            src="/chip-1.svg"
            width={60}
            height={30}
          />
          <div className="flex flex-col w-full h-full justify-end gap-4" style={{textShadow:'-1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8)'}}>
            <p className="text-2xl">4242 4242 4242 4242</p>
            <div className="flex gap-28">
              <p className="text-lg uppercase">John Doe</p>
              <p className="text-lg uppercase">10/24</p>
            </div>
          </div>
    </div>
  </Tilt>
  )
}

export default CreditCard