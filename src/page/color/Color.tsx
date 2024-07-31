import { useEffect, useState } from 'react'
import './color.scss'
import { DataPaletteType } from '../../models/DataPaletteType';
import { colors } from '../../data/color';
import Header from '../../components/header/Header';
import { dataNav } from '../../data/menu';
import Top from '../../components/top/Top';
export default function Color() {
    const [dataPalette, setDataPalette] = useState([] as DataPaletteType[]);
    
     // Use useEffect to set the dataPalette state
     useEffect(() => {
        setDataPalette(colors);
    }, []);

    return (
        <div className='page'>
            <Header linkMenu={dataNav}/>
            <div className="section section-color">
                <div className="container">
                    <Top title='Colors' content='Color is used to define the main color of the design system. It is used in the header, footer and other areas of the site.'/>
                    <div className="color-content-bottom">
                        <h2>Color Palette</h2>
                        <div className="color-palette">
                            {dataPalette.map((item, index) => (
                                <div key={index} className="color-box">
                                    <div className="color-box__bg" style={{backgroundColor: item.text}}></div>
                                    <span className="color-box__name">{item.name}</span>
                                    <span className="color-box__text">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}