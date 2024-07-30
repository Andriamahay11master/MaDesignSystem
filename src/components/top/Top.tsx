import './top.scss';

interface TopProps{
    title: string
    content: string
}

export default function Top({title, content} : TopProps){
    return (
        <div className="content-top">
            <h1 className='title-h1'>{title}</h1>
            <p>{content}</p>    
        </div>
    )
}