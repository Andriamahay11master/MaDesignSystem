import './alert.scss'

interface Alert2Props{
    type: string
    title: string
    ctn: string
    cross?:boolean
}
export default function Alert2({type, title, ctn, cross} : Alert2Props){ 
    return (
        <div className={`alert alert-2 alert-${type}`} >
            <div className="alert-col">
                <div className="alert-icon">
                    <i className={`icon icon-${type}`}></i>
                </div>
                <h3 className="title-h3">{title}</h3>
            </div>
            <div className="alert-col">
                <div className="alert-bouton">
                    {ctn && <button className={`btn btn-${type}`}>{ctn}</button>}
                </div>  
            </div>
            {cross && <button className='btn btn-close'><i className='icon-close'></i></button>}
        </div>
    );
}
