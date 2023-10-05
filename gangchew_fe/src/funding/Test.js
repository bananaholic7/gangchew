import { Height } from "@mui/icons-material";
import CancelButton from "../component/inputs/CancelButton";
import CategorySelect from "../component/inputs/CategorySelect";
import InputDate from "../component/inputs/InputDate";
import OkButton from "../component/inputs/OkButton";
import TitleTextFields from "../component/inputs/TitleTextFields";
import fundingList from "../funding/css/fundingList.css";


export default function Test(){

    return(
        <div>
            <div id="headerarea"></div>
            <CategorySelect/>
            <InputDate/>
            <OkButton/>
            <TitleTextFields/>
            <CancelButton/>
        </div>
    )
}