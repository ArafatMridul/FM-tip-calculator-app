import React from "react";
import dollar from "/images/icon-dollar.svg";
import person from "/images/icon-person.svg";
import logo from "/images/logo.svg";
import TipsContainer from "./components/TipsContainer";
import Menu from "./components/Menu";
import { TipProvider } from "../Context/TipContex";
import BillInput from "./components/BillInput";
import PeopleInput from "./components/PeopleInput";

const App = () => {
    return (
        <TipProvider>
            <div>
                <div className="flex items-center justify-center pt-12 pb-10 lg:pt-41 lg:pb-21">
                    <img src={logo} alt="splitter logo" />
                </div>
                <div className="h-full bg-n-w rounded-3xl py-8 lg:py-0 sm:w-[580px] sm:mx-auto lg:w-[920px] lg:grid lg:grid-cols-2 lg:shadow-xl">
                    <div className="px-8 lg:py-11.5 lg:pl-12 lg:pr-8">
                        <BillInput icon={dollar} label="Bill" />
                        <TipsContainer />
                        <PeopleInput icon={person} label="Number of People" />
                    </div>
                    <div className="px-6 lg:pl-4 lg:pr-8 lg:py-8 mt-8 lg:mt-0">
                        <Menu />
                    </div>
                </div>
            </div>
        </TipProvider>
    );
};

export default App;
