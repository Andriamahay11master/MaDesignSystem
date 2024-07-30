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
                </div>
            </div>
        </div>    
    )
}