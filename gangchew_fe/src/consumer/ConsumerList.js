import React from "react";

import ConsumerListBoard from "./ConsumerListBoard";

export default function ConsumerList(){

    return (
        <div>
        <div className="c_HeaderBlank" /**헤더 */></div>
        <div className="c_Cuntaner">
            <div className="c_Left" /**왼쪽빈공간 */></div>

            <div className="c_Center">                
                <ConsumerListBoard/>                
            </div>
        <div className="c_Right" /**오른쪽빈공간 */></div>
        </div>
        </div>
    )
}