import React from "react";
import { useTip } from "../../Context/TipContex";

const TipItem = ({ value }) => {
    const { tipPercentage, customTip, dispatch } = useTip();
    return (
        <div
            onClick={() =>
                dispatch({ type: "setTipPercentage", payload: value })
            }
            className={`text-center text-2xl hover:text-n-g hover:bg-p-g/40 cursor-pointer rounded-md py-2 transition duration-300 ${
                (customTip === 0 || customTip === null) &&
                tipPercentage === value
                    ? "bg-p-g text-n-g"
                    : "bg-n-g text-n-g-1"
            }`}
        >
            {value}%
        </div>
    );
};

export default TipItem;
