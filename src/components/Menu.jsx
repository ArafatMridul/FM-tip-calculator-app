import React from "react";
import Button from "./Button";
import { useTip } from "../../Context/TipContex";

const Menu = () => {
    const { billAmount, tipPercentage, customTip, numberOfPeople } = useTip();

    // Calculate the tip (using customTip if it's not null and not 0)
    const effectiveTip =
        customTip !== null && customTip !== 0 ? customTip : tipPercentage;
    const totalTip = (billAmount * (effectiveTip / 100)).toFixed(2);

    // Total bill including tip
    const billWithTip = (Number(billAmount) + Number(totalTip)).toFixed(2);

    // Tip and bill per person
    const tipPerPerson = numberOfPeople
        ? (Number(totalTip) / numberOfPeople).toFixed(2)
        : "0.00";

    const billPerPerson = numberOfPeople
        ? (Number(billWithTip) / numberOfPeople).toFixed(2)
        : "0.00";

    return (
        <div className="grid gap-5 bg-n-g px-6 lg:px-10 pt-9 lg:pt-11.5 pb-5.5 lg:pb-10 rounded-2xl h-full">
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-n-g-1">Tip Amount</div>
                        <div className="text-sm text-n-g-3 tracking-tighter">
                            / person
                        </div>
                    </div>
                    <div className="text-[2rem] lg:text-[3rem] tracking-tight text-p-g">
                        ${tipPerPerson}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-n-g-1">Total</div>
                        <div className="text-sm text-n-g-3 tracking-tighter">
                            / person
                        </div>
                    </div>
                    <div className="text-[2rem] lg:text-[3rem] tracking-tight text-p-g">
                        ${billPerPerson}
                    </div>
                </div>
            </div>
            <div className="lg:flex items-end justify-center">
                <Button className="w-full mt-3 lg:mt-0 py-2.5 rounded-sm">
                    reset
                </Button>
            </div>
        </div>
    );
};

export default Menu;
