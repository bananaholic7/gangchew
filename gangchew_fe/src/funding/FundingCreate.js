import fundingCreate from "../funding/css/fundingCreate.css";

export default function FundingCreate() {

    return (
        <div>
            <div id="p_headerarea"></div>{/**헤더에 가려지는 부분 */}
            <div id="projectContainer">
                <div id="left">왼쪽</div>{/**왼쪽 사이드 */}
                <div id="center">
                    <div id="p_empty350"></div>
                    <div>
                        <h1>Project 생성하기</h1>
                        <div id="projectNote">
                            <div id="pn_title">! 반드시 읽어주세요</div>
                            <div id="pn_content">
                                    작성자는 강사 본인 또는 대리인이며, 플랫폼은 강사의 선정과 자격증명에 관여하지 않습니다. <br/>
                                    허위사실 적발 시 고발을 당할 수 있으며 이는 작성자 본인의 책임입니다. <br/>
                                    또한 한번 펀딩이 시작되면 펀딩글을 수정할 수 없습니다. <br/>
                                    펀딩의 시작은 글을 작성한 후 상세페이지에서 진행할 수 있습니다.<br/>
                            </div>
                            <div id="pn_end"><br/></div>
                        </div>{/**프로젝트 생성하기 설명란 */}
                    </div>
                    <div id="p_empty150"></div>
                    <div>
                        <h2>Project 이름</h2>
                        <div id="p_nameInput">

                        </div>
                        <div id="p_note">

                        </div>{/**프로젝트 이름 설명란 */}
                    </div>
                    <div id="projectInfo">{/**프로젝트 세부사항 */}
                        <h2>세부 사항</h2>
                        <div id="p_infocontainer">
                            <div id="p_category">카테고리</div>
                            <select>
                                <option>카테고리 추가예정</option>
                            </select>
                            <div>마감날짜</div>
                            <div id="p_deadline">

                            </div>
                        </div>
                        <div id="p_amount">

                        </div>
                        <div id="p_infocontainer">
                            <div id="p_goal"></div>
                            <div id="p_min"></div>
                            <div id="p_max"></div>
                        </div>
                        <div id="p_note">

                        </div>
                    </div>
                    <div id="projectThumbnail">
                        <h2>썸네일</h2>
                        <div id="p_thumbInput">

                        </div>
                    </div>
                    <div id="projectContent">
                        <h2>내용 설명</h2>
                        <div id="p_note">

                        </div>
                        <div id="p_editor">
                            {/**toastUIEditor 들어갈 곳 */}
                        </div>

                    </div>
                    <div id="projectButton">

                    </div>
                </div>
                <div id="right">오른쪽</div>{/**오른쪽 사이드 */}
            </div>
        </div>
    )
}