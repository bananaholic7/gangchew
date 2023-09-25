import SimpleSlider from '../component/SimpleSlider'
import fundingCreate from '../funding/css/fundingCreate.css'

export default function FundingCreate(){

    return(
        <div>
            <div id='headerarea'></div>
            <div id='container100'>
                <div id='left'>왼쪽</div>
                <div id='center'>
                    <div id='carousel'>
                        <SimpleSlider/>
                    </div>
                    <div id='category'>
                        
                        <div id='category80'>

                            <div id='cate_item'>운동&Life</div>
                            <div id='cate_item'>경제&금융</div>
                            <div id='cate_item'>n잡&부업</div>
                            <div id='cate_item'>커리어</div>
                            <div id='cate_item'>언어</div>
                            <div id='cate_item'>프로그래밍</div>
                            <div id='cate_item'>비즈니스&마케팅</div>
                        </div>
                    </div>
                    <div id='options'>
                        <div id='title'>
                            <h2>펀딩List</h2>
                        </div>
                        <div id='switch'>
                            <button>내지역/전체</button>
                        </div>
                        <div id='drop'>
                            <select>
                                <option>-------</option>
                                <option>달성률순</option>
                                <option>최신순</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {/*--------------List뿌릴 위치!!!!------------*/}
                    </div>
                    <div>
                        {/*------------페이지네이션 위치!!!!-----------*/}
                    </div>
                </div>
                <div id='right'>오른쪽</div>
            </div>
        </div>
    )
}