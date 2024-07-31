import Header from "../../components/header/Header";
import Top from "../../components/top/Top";
import { dataNav } from "../../data/menu";
import './pageButton.scss';

export default function PageButton(){

    return (
        <div className="page">
            <Header linkMenu={dataNav}/>
            <div className="section section-alert">
                <div className="container">
                    <Top title='Component/Button' content='A button is a clickable element used to trigger an action or event. It can be used to submit forms, navigate to different sections, or perform various tasks within an application. Buttons should be clearly labeled to indicate their function and should provide immediate visual feedback upon interaction.'/>
                </div>
            </div>
        </div>
    )
}