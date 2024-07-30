import Alert from "../../components/alert/Alert";
import Alert2 from "../../components/alert/Alert-2";
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
                        <Alert type='info' title='This is a info alert' content='Info is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info.' cross={true}/>
                        <Alert type='sucess' title="This is a success alert" content="Success is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info." cross={true}/>
                        <Alert type="warning" title="This is a warning alert" content="Warning is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info."/>
                        <Alert type="error" title="This is a error alert" content="Error is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info."/>
                        <Alert type='info' title='This is a info alert' content='Info is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info.' ctn="Check Security" close="Close"/>
                        <Alert type='sucess' title="This is a success alert" content="Success is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info." ctn="View Profile" close="Close"/>
                        <Alert type="warning" title="This is a warning alert" content="Warning is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info." ctn="Forget Password" close="Close"/>
                        <Alert type="error" title="This is a error alert" content="Error is a UI component that provides immediate, visually distinct feedback or information to users, categorized by type such as success, error, warning, or info." ctn="Upgrade Plans" close="Close"/>
                        <Alert2 type='info' title='This is a info alert' ctn="Check Security" />
                        <Alert2 type='sucess' title="This is a success alert" ctn="View Profile" />
                        <Alert2 type="warning" title="This is a warning alert" ctn="Forget Password"/>
                        <Alert2 type="error" title="This is a error alert" ctn="Upgrade Plans" cross={true}/>
                    </div>
                </div>
            </div>
        </div>    
    )
}