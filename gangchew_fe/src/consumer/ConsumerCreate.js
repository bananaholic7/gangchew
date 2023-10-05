import React, { useState } from 'react';
import '../consumer/css/ConsumerCreate.css';
import TitleTextFields from '../component/inputs/TitleTextFields';
import CategorySelect from '../component/inputs/CategorySelect';
import ToastEditor from '../component/inputs/ToastEditor';
import OkButton from '../component/inputs/OkButton';
import CancelButton from '../component/inputs/CancelButton';




export default function ConsumerCreate2() {

    const [consumer, setConsumer] = useState({
        title: '',
        category_id: 0,
        writer: '',
        content: ''
    });

    // input 컴포넌트에서 호출할 함수
    const handleInputChange = (key,newValue) => {
        setConsumer((prevFunding) => ({
            ...prevFunding,
            [key]: newValue
        }));
        
    };

    return (
    <div>
        <div className="c_HeaderBlank" /*헤더 */><h2>헤더</h2></div>
        <div className="c_Container">
            <div className="c_Left" /*왼쪽빈공간 */></div>
            <div className="c_Center" >
                <div>
                    <h2>수요자 게시판</h2>     
                    <hr className='c_hr'/>          
                </div>
                <div>
                    <div className='c_Title'>
                        <TitleTextFields text={'제목'}/>
                    </div>
                    <div className='c_Category'>
                        <CategorySelect/>
                    </div>
                    <div className='c_Content'>
                        <ToastEditor/>
                    </div>
                </div>
                <div className='c_height150'>{/**에디터와 버튼사이 빈 공간 */}</div>
                <div className='c_buttonContainer'>
                    <div className='c_OkButton'><OkButton/></div>
                    <div className='c_CancelButton'><CancelButton/></div>
                </div>
                <div className='c_height150'>{/**에디터와 버튼사이 빈 공간 */}</div>
            </div>
            <div className="c_Right" /*오른쪽빈공간 */></div>
        </div>
    </div>
    )
}
