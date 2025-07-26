import React from "react";
import { twMerge } from "tailwind-merge";
import { useTip } from "../../Context/TipContex";

const Button = ({ children, className }) => {
    const { dispatch, numberOfPeople } = useTip();
    return (
        <button
            type="button"
            onClick={() => numberOfPeople && dispatch({ type: "reset" })}
            className={twMerge(
                `${
                    !numberOfPeople
                        ? "opacity-30 cursor-default"
                        : "cursor-pointer hover:bg-n-g-2/80"
                } uppercase text-xl text-n-g bg-p-g transition duration-300`,
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
