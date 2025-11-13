import hair1 from '../assets/thumbnails/hair/hair1.jpg';
import hair2 from '../assets/thumbnails/hair/hair2.jpg';
import hair3 from '../assets/thumbnails/hair/hair3.jpg';
import hair4 from '../assets/thumbnails/hair/hair4.jpg';
import hair5 from '../assets/thumbnails/hair/hair5.jpg';
import hair6 from '../assets/thumbnails/hair/hair6.jpg';
import hair7 from '../assets/thumbnails/hair/hair7.jpg';
import face1 from '../assets/thumbnails/face/face1.jpg';
import face2 from '../assets/thumbnails/face/face2.jpg';
import face3 from '../assets/thumbnails/face/face3.jpg';
import face4 from '../assets/thumbnails/face/face4.jpg';
import eyebrows1 from '../assets/thumbnails/eyebrows/eyebrows1.jpg';
import eyebrows2 from '../assets/thumbnails/eyebrows/eyebrows2.jpg';
import eyebrows3 from '../assets/thumbnails/eyebrows/eyebrows3.jpg';
import eyebrows4 from '../assets/thumbnails/eyebrows/eyebrows4.jpg';
import eyebrows5 from '../assets/thumbnails/eyebrows/eyebrows5.jpg';
import eyebrows6 from '../assets/thumbnails/eyebrows/eyebrows6.jpg';
import nose1 from '../assets/thumbnails/nose/nose1.jpg';
import nose2 from '../assets/thumbnails/nose/nose2.jpg';
import nose3 from '../assets/thumbnails/nose/nose3.jpg';
import nose4 from '../assets/thumbnails/nose/nose4.jpg';
import nose5 from '../assets/thumbnails/nose/nose5.jpg';
import nose6 from '../assets/thumbnails/nose/nose6.jpg';

import {
    eyebrowsColor,
    eyesColor,
    hairColor,
    lipsColor,
    skinColor,
} from './ColorSettings';
export type Settings = 'face' | 'hair' | 'eyebrows' | 'eyes' | 'nose' | 'lips';

type Category = {
    id: Settings;
    name: string;
    colorOptions?: string[];
    attributes: Attribute[];
};

type Attribute = {
    id: string;
    name: string;
    type: 'color' | 'shape' | 'size';
    options: Option[];
};

export type Option = {
    id: string;
    preview: any;
    svgRef?: string;
};

export const settingList: { name: string; id: Settings }[] = [
    { name: 'Face', id: 'face' },
    { name: 'Hair', id: 'hair' },
    { name: 'Eyebrows', id: 'eyebrows' },
    { name: 'Nose', id: 'nose' },
    { name: 'Lips', id: 'lips' },
    { name: 'Eyes', id: 'eyes' },
];

export const CustomizationSettings: Category[] = [
    {
        id: 'face',
        name: 'Face',
        colorOptions: skinColor,
        attributes: [
            {
                id: 'face-shape',
                name: 'Shape',
                type: 'shape',
                options: [
                    { id: 'face-shape1', preview: face1, svgRef: '' },
                    { id: 'face-shape2', preview: face2, svgRef: '' },
                    { id: 'face-shape3', preview: face3, svgRef: '' },
                    { id: 'face-shape4', preview: face4, svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'hair',
        name: 'Hair',
        colorOptions: hairColor,
        attributes: [
            {
                id: 'hairstyle',
                name: 'Hairstyle',
                type: 'shape',
                options: [
                    { id: 'hair-1', preview: hair1, svgRef: '' },
                    { id: 'hair-2', preview: hair2, svgRef: '' },
                    { id: 'hair-3', preview: hair3, svgRef: '' },
                    { id: 'hair-4', preview: hair4, svgRef: '' },
                    { id: 'hair-5', preview: hair5, svgRef: '' },
                    { id: 'hair-6', preview: hair6, svgRef: '' },
                    { id: 'hair-7', preview: hair7, svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'eyebrows',
        name: 'Eyebrows',
        colorOptions: eyebrowsColor,
        attributes: [
            {
                id: 'eyebrows-shape',
                name: 'Eyebrows shape',
                type: 'shape',
                options: [
                    { id: 'eyebrows-shape1', preview: eyebrows1, svgRef: '' },
                    { id: 'eyebrows-shape2', preview: eyebrows2, svgRef: '' },
                    { id: 'eyebrows-shape3', preview: eyebrows3, svgRef: '' },
                    { id: 'eyebrows-shape4', preview: eyebrows4, svgRef: '' },
                    { id: 'eyebrows-shape5', preview: eyebrows5, svgRef: '' },
                    { id: 'eyebrows-shape6', preview: eyebrows6, svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'eyes',
        name: 'Eyes',
        colorOptions: eyesColor,
        attributes: [
            {
                id: 'eye-shape',
                name: 'Eyes shape',
                type: 'shape',
                options: [
                    { id: 'eyes-shape1', preview: '', svgRef: '' },
                    { id: 'eyes-shape2', preview: '', svgRef: '' },
                    { id: 'eyes-shape3', preview: '', svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'nose',
        name: 'Nose',
        attributes: [
            {
                id: 'nose-shape',
                name: 'Nose shape',
                type: 'shape',
                options: [
                    { id: 'nose-shape1', preview: nose1, svgRef: '' },
                    { id: 'nose-shape2', preview: nose2, svgRef: '' },
                    { id: 'nose-shape3', preview: nose3, svgRef: '' },
                    { id: 'nose-shape4', preview: nose4, svgRef: '' },
                    { id: 'nose-shape5', preview: nose5, svgRef: '' },
                    { id: 'nose-shape6', preview: nose6, svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'lips',
        name: 'Lips',
        colorOptions: lipsColor,
        attributes: [
            {
                id: 'lips-shape',
                name: 'Lips shape',
                type: 'shape',
                options: [
                    { id: 'lips-shape1', preview: '', svgRef: '' },
                    { id: 'lips-shape2', preview: '', svgRef: '' },
                    { id: 'lips-shape3', preview: '', svgRef: '' },
                    { id: 'lips-shape4', preview: '', svgRef: '' },
                    { id: 'lips-shape5', preview: '', svgRef: '' },
                    { id: 'lips-shape6', preview: '', svgRef: '' },
                ],
            },
        ],
    },
];
