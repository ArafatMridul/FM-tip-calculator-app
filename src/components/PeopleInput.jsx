import React, { useState } from "react";
import LabelItem from "./LabelItem";
import { useTip } from "../../Context/TipContex";

const PeopleInput = ({ label, icon }) => {
    const [hasFocused, setHasFocused] = useState(false);
    const { numberOfPeople, dispatch } = useTip();

    const handleFocus = () => {
        setHasFocused(true);
    };

    const showError = hasFocused && numberOfPeople === 0;

    return (
        <div className="mt-8 lg:mt-10">
            <LabelItem label={label} />
            <div className="relative mt-2 flex items-center bg-n-g-1">
                <div className="absolute left-5">
                    <img src={icon} alt="input icon" />
                </div>

                <input
                    type="number"
                    step="any"
                    placeholder="0"
                    value={numberOfPeople === null ? "" : numberOfPeople}
                    onChange={(e) => {
                        dispatch({
                            type: "setPeople",
                            payload: Number(e.target.value),
                        });
                    }}
                    onFocus={handleFocus}
                    className={`w-full text-2xl text-end text-n-g px-5 lg:px-5 py-2 focus:outline-none focus:ring-2 ${
                        showError
                            ? "ring-2 ring-red-400 focus:ring-red-400"
                            : "focus:ring-p-g"
                    } rounded-sm cursor-pointer no-spinner caret-n-g`}
                />
                <p
                    className={`absolute -top-2/3 right-0 text-md text-red-400 transition-opacity duration-300 ${
                        showError ? "opacity-100" : "opacity-0"
                    }`}
                >
                    Cant't be zero
                </p>
            </div>
        </div>
    );
};

export default PeopleInput;
