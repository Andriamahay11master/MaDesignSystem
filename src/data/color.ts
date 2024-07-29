
import { hexToRgb, rgbaToHex } from '../function';

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

const colors = [
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
    }
]

export {colors}