import React from "react";
import { twMerge } from "tailwind-merge";
import { useTip } from "../../Context/TipContex";

const Button = ({ children, className }) => {
    const { dispatch } = useTip();
    return (
        <button
            onClick={() => dispatch({ type: "reset" })}
            className={twMerge(
                "uppercase text-xl text-n-g bg-p-g cursor-pointer hover:bg-n-g-2/80 transition duration-300",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
