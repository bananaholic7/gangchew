import '../consumer/css/consumer.css'

export default function Consumer_create() {
    return (
    <div>
        <div id="c_HeaderBlank" /*헤더 */><h2>헤더</h2></div>
        <div id="c_Container">
            <div id="c_Left" /*왼쪽빈공간 */></div>
            <div id="c_Center" >
                <div id="c_Board">
                    <div id="c_Title"></div>
                    <div id="c_Kategorie" /*드롭다운 */></div>
                    <div id="c_Writeform">aaaaaaaaaa</div>
                    <div id="c_Btn1">
                        <div id="c_Btnu" /*저장버튼 */></div>
                        <div id="c_Btnc" /*취소버튼 */></div>
                    </div>
                </div>
            </div>
            <div id="c_Right" /*오른쪽빈공간 */></div>
        </div>
    </div>
    )
}


