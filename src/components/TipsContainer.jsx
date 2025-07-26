import React from "react";
import TipItem from "./TipItem";
import LabelItem from "./LabelItem";
import CustomTipItem from "./CustomTipItem";
import { useTip } from "../../Context/TipContex";

const tipAmounts = [
    { index: 0, value: 5 },
    { index: 1, value: 10 },
    { index: 2, value: 15 },
    { index: 3, value: 25 },
    { index: 4, value: 50 },
];

const TipsContainer = () => {
    const { tipPercentage, customTip, dispatch } = useTip();
    return (
        <div className="mt-8 lg:mt-10">
            <LabelItem label="Select Tip %" />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {tipAmounts.map((tipAmount) => (
                    <TipItem key={tipAmount.index} value={tipAmount.value} />
                ))}
                <CustomTipItem />
            </div>
        </div>
    );
};

export default TipsContainer;
