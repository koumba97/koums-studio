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
    preview: string;
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
                    { id: 'face-shape1', preview: '', svgRef: '' },
                    { id: 'face-shape2', preview: '', svgRef: '' },
                    { id: 'face-shape3', preview: '', svgRef: '' },
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
                    { id: 'hair-1', preview: '', svgRef: '' },
                    { id: 'hair-2', preview: '', svgRef: '' },
                    { id: 'hair-3', preview: '', svgRef: '' },
                    { id: 'hair-4', preview: '', svgRef: '' },
                    { id: 'hair-5', preview: '', svgRef: '' },
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
                    { id: 'eyebrows-shape1', preview: '', svgRef: '' },
                    { id: 'eyebrows-shape2', preview: '', svgRef: '' },
                    { id: 'eyebrows-shape3', preview: '', svgRef: '' },
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
                    { id: 'nose-shape-1', preview: '', svgRef: '' },
                    { id: 'nose-shape-2', preview: '', svgRef: '' },
                    { id: 'nose-shape-3', preview: '', svgRef: '' },
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
                ],
            },
        ],
    },
];
