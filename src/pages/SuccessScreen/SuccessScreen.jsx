import React from "react";
import Lottie from "lottie-react";
import Confetti from "../../assets/confetti.json";
import { FaArrowRightLong } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

const SuccessScreen = () => {
    const navigate = useNavigate()

  return (
    <div>
      <Lottie
        className="absolute top-0 left-0 w-full h-full"
        animationData={Confetti}
        loop={true}
      />
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <span className="text-2xl font-medium py-4">Tu compra ha sido exitoso 😊</span>
        <button 
        onClick={()=>{navigate("/status")}}
        class=" relative z-10 bg-black rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
          <FaArrowRightLong size={24} color="white" />
          <span>Ver tu pedido</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
