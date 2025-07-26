import React from "react";
import { useTip } from "../../Context/TipContex";

const CustomTipItem = () => {
    const { customTip, dispatch } = useTip();
    return (
        <div>
            <input
                type="text"
                inputMode="numeric"
                value={customTip === 0 ? "" : customTip === null ? "" : customTip}
                onChange={(e) =>
                    dispatch({
                        type: "setCustomTip",
                        payload: Number(e.target.value),
                    })
                }
                className="w-full text-2xl text-end bg-n-g-1 text-n-g px-5 lg:px-3 py-2 focus:outline-none focus:ring-2 focus:ring-p-g rounded-sm cursor-pointer placeholder:text-n-g-4"
                placeholder="Custom"
            />
        </div>
    );
};

export default CustomTipItem;
