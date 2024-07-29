import React, { useEffect, useState } from 'react'
import './color.scss'
import { DataPaletteType } from '../../models/DataPaletteType';
import { hexToRgb, rgbaToHex } from '../../function';

export default function Color() {
    const [dataPalette, setDataPalette] = useState([] as DataPaletteType[]);
    
     // Function to get the value of a CSS variable
     const getCssVariableValue = (variable: string) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable);
    };

    const alpha = 1;
    const hexColorGrayscale = getCssVariableValue('--color-grayscale');
    const hexColorPrimary = getCssVariableValue('--color-primary');
    const hexColorSecondary = getCssVariableValue('--color-secondary');
    const hexColorTertiary = getCssVariableValue('--color-tertiary');
    const hexColorAlcohol = getCssVariableValue('--color-alcohol');
    const hexColorSucess = getCssVariableValue('--color-sucess');
    const hexColorWarning = getCssVariableValue('--color-warning');
    const hexColorError = getCssVariableValue('--color-error');

    const getRgbaHex = (hex: string, alpha: number) => {
        const rgb = hexToRgb(hex);
        return rgb ? rgbaToHex(rgb.r, rgb.g, rgb.b, alpha) : '';
    };

    const rgbaHexGrayScale = getRgbaHex(hexColorGrayscale, alpha);
    const rgbaHexPrimary = getRgbaHex(hexColorPrimary, alpha);
    const rgbaHexSecondary = getRgbaHex(hexColorSecondary, alpha);
    const rgbaHexTertiary = getRgbaHex(hexColorTertiary, alpha);
    const rgbaHexAlcohol = getRgbaHex(hexColorAlcohol, alpha);
    const rgbaHexSucess = getRgbaHex(hexColorSucess, alpha);
    const rgbaHexWarning = getRgbaHex(hexColorWarning, alpha);
    const rgbaHexError = getRgbaHex(hexColorError, alpha);

    

     // Use useEffect to set the dataPalette state
     useEffect(() => {
        setDataPalette([
            {
                name: 'Gray 500',
                text: rgbaHexGrayScale 
            },
            {
                name: 'Primary 500',
                text: rgbaHexPrimary
            },
            {
                name: 'Secondary 500',
                text: rgbaHexSecondary
            },
            {
                name: 'Tertiary 500',
                text: rgbaHexTertiary
            },
            {
                name: 'Alcohol 500',
                text: rgbaHexAlcohol
            },
            {
                name: 'Sucess 500',
                text: rgbaHexSucess
            },
            {
                name: 'Warning 500',
                text: rgbaHexWarning
            },
            {
                name: 'Error 500',
                text: rgbaHexError
            },
        ]);
    }, []);

    return (
        <div className='page'>
            <div className="section section-color">
                <div className="container">
                    <div className="color-content-top">
                        <h1>Colors</h1>
                        <p>Color is used to define the main color of the design system. It is used in the header, footer and other areas of the site.</p>    
                    </div>
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