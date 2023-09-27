
function ConsumerList(){
    return (
        <div>

        </div>
    )
}

export default function Consumer_list(){

    return (
        <div>
        <div id="c_HeaderBlank" /**헤더 */></div>
        <div id="c_Cuntaner">
            <div id="c_Left" /**왼쪽빈공간 */></div>

            <div id="c_Center">
                <div id="c_Lista" /*드롭다운(추천순,조회순,추천순)*/>리스트</div>
                <div id="c_Listb" /*for문 6개 리스트 */>
                    <div id="c_Listc" /*작성자, 작성일자, 카테고리명 */></div>
                    <div id="c_Listd" /*타이틀, 조회수,좋아요, 댓글수 */></div>
                </div>
                <ConsumerList />
                <div id="c_PaginationL" /*페이지네이션*/></div>
            </div>
        <div id="c_Right" /**오른쪽빈공간 */></div>
        </div>
        </div>
    )
}