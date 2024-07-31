import Header from "../../components/header/Header";
import Top from "../../components/top/Top";
import { dataNav } from "../../data/menu";

export default function Home() {
    return (
        <div className="page">
            <Header linkMenu={dataNav}/>
            <div className="section section-home">
                <div className="container">
                    <Top title='Welcome to the design system' content='This is the home page of the design system. You can use it to get an overview of the design system.'/>
                </div>
            </div>
        </div>
    )
}