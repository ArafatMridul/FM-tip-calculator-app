import React from "react";
import LabelItem from "./LabelItem";
import { useTip } from "../../Context/TipContex";

const BillInput = ({ label, icon }) => {
    const { billAmount, dispatch } = useTip();
    return (
        <div>
            <LabelItem label={label} />
            <div className="relative mt-2 flex items-center bg-n-g-1">
                <div className="absolute left-5">
                    <img src={icon} alt="input icon" />
                </div>

                <input
                    type="number"
                    step="any"
                    placeholder="0"
                    value={
                        billAmount === 0 || billAmount === null
                            ? ""
                            : billAmount
                    }
                    onChange={(e) =>
                        dispatch({
                            type: "setBill",
                            payload: Number(e.target.value),
                        })
                    }
                    className="w-full text-2xl text-end text-n-g px-5 lg:px-5 py-2 focus:outline-none focus:ring-2 focus:ring-p-g rounded-sm cursor-pointer no-spinner caret-n-g"
                />
            </div>
        </div>
    );
};

export default BillInput;
