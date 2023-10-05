import React from "react";


export default function ConsumerList(){

    return (
        <div>
        <div className="c_HeaderBlank" /**헤더 */></div>
        <div className="c_Cuntaner">
            <div className="c_Left" /**왼쪽빈공간 */></div>

            <div className="c_Center">
                <div className="c_Lista" /*드롭다운(추천순,조회순,추천순)*/>리스트</div>
                <div className="c_Listb" /*for문 6개 리스트 */>
                    <div className="c_Listc" /*작성자, 작성일자, 카테고리명 */></div>
                    <div className="c_Listd" /*타이틀, 조회수,좋아요, 댓글수 */></div>
                </div>
                <ConsumerList />
                <div className="c_PaginationL" /*페이지네이션*/></div>
            </div>
        <div className="c_Right" /**오른쪽빈공간 */></div>
        </div>
        </div>
    )
}