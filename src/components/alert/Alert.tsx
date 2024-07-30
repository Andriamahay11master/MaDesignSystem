import './alert.scss'

interface AlertProps{
    type: string
    title: string
    content: string
    ctn?: string
    close?:string
}
export default function Alert({type, title, content, ctn, close} : AlertProps){
    return (
        <div className={`alert alert-${type}`} >
            <div className="alert-col">
                <div className="alert-icon">
                    <i className={`icon icon-${type}`}></i>
                </div>
            </div>
            <div className="alert-col">
                <h3 className="title-h3">{title}</h3>
                <p>{content}</p>
                
                {(ctn || close) && (
                    <div className="alert-bouton">
                        {ctn && <button className="btn btn-primary">{ctn}</button>}
                        {close && <button className="btn btn-gray">{close}</button>}
                    </div>
                )}            
            </div>
        </div>
    );
}