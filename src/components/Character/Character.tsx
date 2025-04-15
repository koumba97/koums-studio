/// <reference types="vite-plugin-svgr/client" />

import { useState } from 'react';
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

type Settings = 'face' | 'hair' | 'eyebrows' | 'eyes' | 'nose' | 'lips';
const SettingButtons = [
    {
        id: 'face',
        name: 'Face',
        settings: [
            {
                id: 'skin-color',
                name: 'Skin color',
                optionType: 'color',
                values: ['color1', 'color2', 'color3'],
            },
            {
                id: 'face-shape',
                name: 'Shape',
                optionType: 'shape',
                values: ['shape1', 'shape2', 'shape3'],
            },
        ],
    },
    {
        id: 'hair',
        name: 'Hair',
        settings: [
            {
                id: 'hair-color',
                name: 'Hair color',
                optionType: 'color',
                values: ['color1', 'color2', 'color3'],
            },
            {
                id: 'hairstyle',
                name: 'Hairstyle',
                optionType: 'shape',
                values: ['shape1', 'shape2', 'shape3'],
            },
        ],
    },
    {
        id: 'eyebrows',
        name: 'Eyebrows',
        settings: [
            {
                id: 'eyebrows-color',
                name: 'Eyebrows color',
                optionType: 'color',
                values: ['color1', 'color2', 'color3'],
            },
            {
                id: 'eyebrows-shape',
                name: 'Eyebrows shape',
                optionType: 'shape',
                values: ['shape1', 'shape2', 'shape3'],
            },

            {
                id: 'eyebrows-size',
                name: 'Eyebrows size',
                optionType: 'size',
                values: ['size1', 'size2', 'size3'],
            },
        ],
    },
    {
        id: 'eyebrows',
        name: 'Eyebrows',
        settings: [
            {
                id: 'eyes-color',
                name: 'Eyes color',
                optionType: 'color',
                values: ['color1', 'color2', 'color3'],
            },
            {
                id: 'eye-shape',
                name: 'Eyes shape',
                optionType: 'shape',
                values: ['shape1', 'shape2', 'shape3'],
            },

            {
                id: 'eyes-size',
                name: 'Eyes size',
                optionType: 'size',
                values: ['size1', 'size2', 'size3'],
            },
        ],
    },
    {
        id: 'nose',
        name: 'Nose',
        settings: [
            {
                id: 'nose-size',
                name: 'Nose size',
                optionType: 'size',
                values: ['size1', 'size2', 'size3'],
            },
            {
                id: 'nose-shape',
                name: 'Nose shape',
                optionType: 'shape',
                values: ['shape1', 'shape2', 'shape3'],
            },
        ],
    },
    {
        id: 'lips',
        name: 'Lips',
        settings: [
            {
                id: 'lips-color',
                name: 'Lips color',
                optionType: 'color',
                values: ['color1', 'color2', 'color3'],
            },
            {
                id: 'lips-shape',
                name: 'Lips shape',
                optionType: 'shape',
                values: ['shape1', 'shape2', 'shape3'],
            },
        ],
    },
];

export const Character = ({ color = 'black' }: CharacterProps) => {
    const [currentSetting, setCurrentSetting] = useState<Settings>('face');
    return (
        <>
            <div>
                <div className="character-container">
                    <Skin color="#794e3d" />
                    <FaceShape />
                    <EyeBrows color="#E5BC64" />
                    <EyesAlmond color="#2D4F00" />
                    <Nose />
                    <Lips />
                    <Hair color="pink" />
                </div>
            </div>
            <div className="settings-container">
                <button>Face</button>
                <button>Hair</button>
                <button>Eyebrows</button>
                <button>Eyes</button>
                <button>Nose</button>
                <button>Lips</button>
            </div>
        </>
    );
};
