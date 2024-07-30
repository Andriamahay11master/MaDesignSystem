import Alert from "../../components/alert/Alert";
import Header from "../../components/header/Header";
import Top from "../../components/top/Top";
import { dataNav } from "../../data/menu";
import './pageAlert.scss'

export default function PageAlert(){
    return (
        <div className='page'>
            <Header linkMenu={dataNav}/>
            <div className="section section-alert">
                <div className="container">
                    <Top title='Component/Alert' content='Alert is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info.'/>
                    <div className="list-alert">
                        <Alert type='info' title='This is a info alert' content='Info is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info.'/>
                        <Alert type='sucess' title="This is a success alert" content="Success is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info."/>
                        <Alert type="warning" title="This is a warning alert" content="Warning is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info."/>
                        <Alert type="error" title="This is a error alert" content="Error is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info."/>
                    </div>
                </div>
            </div>
        </div>    
    )
}