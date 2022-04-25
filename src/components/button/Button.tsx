import React from "react";

type Buttonprops = {
    title: String
}

/**
 * @component LargeButton
 * @param title The button's text to be displayed on the button
 * @returns A customized large button component
 */
export const LargeButton: React.FC<Buttonprops> =({title}) =>{
    return(
        //chakra button codes
        <div>{title}</div>
    )
};
