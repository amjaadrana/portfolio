'use client';
import { useSwiper } from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";
import Swiper from "swiper";

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }: WorkSliderBtnsProps) => {
    const Swiper = useSwiper();
  return (
    <div className={containerStyles} >
        <button className={btnStyles} onClick= {() => Swiper.slidePrev()} >
            <PiCaretLeftBold />
        </button>
        <button className={btnStyles} onClick={() => Swiper.slideNext()}>
            <PiCaretRightBold />
        </button>
        
    </div>
  )
}

export default WorkSliderBtns