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
                    <div className="list-button">
                        <div className="list-item">
                            <button className="btn btn-primary">Primary</button>
                            <button className="btn btn-primary btn-darken">Primary</button>
                            <button className="btn btn-primary btn-loading">Primary</button>
                            <button className="btn btn-primary btn-icon"><span>Primary</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-primary disabled">Primary</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-outline-primary">Primary</button>
                            <button className="btn btn-outline-primary btn-darken">Primary</button>
                            <button className="btn btn-outline-primary btn-loading">Primary</button>
                            <button className="btn btn-outline-primary btn-icon"><span>Primary</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-outline-primary disabled">Primary</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-secondary">Secondary</button>
                            <button className="btn btn-secondary btn-darken">Secondary</button>
                            <button className="btn btn-secondary btn-loading">Secondary</button>
                            <button className="btn btn-secondary btn-icon"><span>Secondary</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-secondary disabled">Secondary</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-outline-secondary">Secondary</button>
                            <button className="btn btn-outline-secondary btn-darken">Secondary</button>
                            <button className="btn btn-outline-secondary btn-loading">Secondary</button>
                            <button className="btn btn-outline-secondary btn-icon"><span>Secondary</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-outline-secondary disabled">Secondary</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-gray">Grayscale</button>
                            <button className="btn btn-gray btn-darken">Grayscale</button>
                            <button className="btn btn-gray btn-loading">Grayscale</button>
                            <button className="btn btn-gray btn-icon"><span>Grayscale</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-gray disabled">Grayscale</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-outline-gray">Grayscale</button>
                            <button className="btn btn-outline-gray btn-darken">Grayscale</button>
                            <button className="btn btn-outline-gray btn-loading">Grayscale</button>
                            <button className="btn btn-outline-gray btn-icon"><span>Grayscale</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-outline-gray disabled">Grayscale</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-sucess">Sucess</button>
                            <button className="btn btn-sucess btn-darken">Sucess</button>
                            <button className="btn btn-sucess btn-loading">Sucess</button>
                            <button className="btn btn-sucess btn-icon"><span>Sucess</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-sucess disabled">Sucess</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-outline-sucess">Sucess</button>
                            <button className="btn btn-outline-sucess btn-darken">Sucess</button>
                            <button className="btn btn-outline-sucess btn-loading">Sucess</button>
                            <button className="btn btn-outline-sucess btn-icon"><span>Sucess</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-outline-sucess disabled">Sucess</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-warning btn-darken">Warning</button>
                            <button className="btn btn-warning btn-loading">Warning</button>
                            <button className="btn btn-warning btn-icon"><span>Warning</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-warning disabled">Warning</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-outline-warning">Warning</button>
                            <button className="btn btn-outline-warning btn-darken">Warning</button>
                            <button className="btn btn-outline-warning btn-loading">Warning</button>
                            <button className="btn btn-outline-warning btn-icon"><span>Warning</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-outline-warning disabled">Warning</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-error btn-darken">Error</button>
                            <button className="btn btn-error btn-loading">Error</button>
                            <button className="btn btn-error btn-icon"><span>Error</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-error disabled">Error</button> 
                        </div>
                        <div className="list-item">
                            <button className="btn btn-outline-error">Error</button>
                            <button className="btn btn-outline-error btn-darken">Error</button>
                            <button className="btn btn-outline-error btn-loading">Error</button>
                            <button className="btn btn-outline-error btn-icon"><span>Error</span> <i className="icon-long-arrow"></i></button>
                            <button className="btn btn-outline-error disabled">Error</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}