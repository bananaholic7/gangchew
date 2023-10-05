import React from "react"
import '../consumer/css/ConsumerDetail.css';
import TitleTextFields from '../component/inputs/TitleTextFields';
import CategorySelect from '../component/inputs/CategorySelect';
import ToastEditor from '../component/inputs/ToastEditor';
import OkButton from '../component/inputs/OkButton';
import CancelButton from '../component/inputs/CancelButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';


export default function ConsumerDetail(){

    const heartStyle = {
        color: 'red',
      };

    return (
        <div>
            <div className="c_HeaderBlank" /**헤더 */></div>
                <div className="c_Container">
                <div className="c_Left1" /**왼쪽빈공간 */></div>
                <div className="c_Center1">
                    <div>
                        <h2>수요자 게시판</h2>     
                        <hr className='c_hr'/>          
                    </div>
                    <div>
                        <div className="c_Writer"></div>
                        <div className="c_Date"></div>
                        <div className="c_Cate"></div>
                        <div className="c_BtnContainer">    
                            <div className="c_EditButton"><OkButton/></div>
                            <div className="c_DeleteButton"><CancelButton/></div>
                        </div>
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
                        <div className="c_BtnBox">
                            <div className="c_LikeBtn"><FavoriteIcon style={heartStyle} fontSize="large" /></div>
                            <div className="c_CommentBtn"><CommentIcon fontSize="large" /></div>
                        </div>
                        <div className="c_CommentBox"><TitleTextFields/></div>                        
                        <div className="c_CommentSaveBtn"><OkButton/></div>                        
                    </div>
                </div>
                <div className="c_Right1" /**오른쪽빈공간 */></div>
            </div>
        </div>
    )
}
    