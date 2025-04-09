/// <reference types="vite-plugin-svgr/client" />

import Face from '../assets/face.svg?react';
import EyesAlmond from '../Face/EyesAlmond';
import EyeBrows from '../Face/EyesBrows';
import FaceShape from '../Face/FaceShape';
import Hair from '../Face/Hair';
import Lips from '../Face/Lips';
import Nose from '../Face/Nose';
import Skin from '../Face/Skin';
import './Character.scss';

type CharacterProps = {
    color?: string;
};

export const Character = ({ color = 'black' }: CharacterProps) => {
    return (
        <div className="character-container">
            <Skin color="#794e3d" />
            <FaceShape />
            <EyeBrows color="yellow" />
            <EyesAlmond color="green" />
            <Nose />
            <Lips />
            <Hair color="pink" />
        </div>
    );
};
