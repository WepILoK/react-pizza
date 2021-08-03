import React from "react";
import classNames from "classnames";

interface IButtonProps {
    onClick: () => void
    outline: boolean
    className: string
}

export const Button: React.FC<IButtonProps> = ({onClick, outline, children, className}) => {
    return (
        <button
            onClick={onClick}
            className={classNames("button", className, {
                "button--outline": outline
            })}>
            {children}
        </button>
    )
};