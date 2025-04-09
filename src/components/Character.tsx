/// <reference types="vite-plugin-svgr/client" />

import Face from '../assets/face.svg?react';
import MySvgComponent from './test';

type CharacterProps = {
    color?: string;
};

export const Character = ({ color = 'black' }: CharacterProps) => {
    return <MySvgComponent skin="#774d3c" />;
};
