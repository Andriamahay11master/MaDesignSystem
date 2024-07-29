export function componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbaToHex(r: number, g: number, b: number, a: number): string {
    const redHex = componentToHex(r);
    const greenHex = componentToHex(g);
    const blueHex = componentToHex(b);
    const alphaHex = componentToHex(Math.round(a * 255));
    return `#${redHex}${greenHex}${blueHex}${alphaHex}`;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null{
    if (!hex) return null;
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}