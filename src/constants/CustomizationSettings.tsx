type Category = {
    id: string;
    name: string;
    attributes: Attribute[];
};

type Attribute = {
    id: string;
    name: string;
    type: 'color' | 'shape' | 'size';
    options: Option[];
};

type Option = {
    id: string;
    preview: string;
    svgRef?: string;
};

export const CustomizationSettings: Category[] = [
    {
        id: 'face',
        name: 'Face',
        attributes: [
            {
                id: 'skin-color',
                name: 'Skin color',
                type: 'color',
                options: [
                    { id: 'skin-color1', preview: '' },
                    { id: 'skin-color2', preview: '' },
                    { id: 'skin-color3', preview: '' },
                ],
            },
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
        attributes: [
            {
                id: 'hair-color',
                name: 'Hair color',
                type: 'color',
                options: [
                    { id: 'hair-color1', preview: '' },
                    { id: 'hair-color2', preview: '' },
                    { id: 'hair-color3', preview: '' },
                ],
            },
            {
                id: 'hairstyle',
                name: 'Hairstyle',
                type: 'shape',
                options: [
                    { id: 'hairstyle1', preview: '', svgRef: '' },
                    { id: 'hairstyle2', preview: '', svgRef: '' },
                    { id: 'hairstyle3', preview: '', svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'eyebrows',
        name: 'Eyebrows',
        attributes: [
            {
                id: 'eyebrows-color',
                name: 'Eyebrows color',
                type: 'color',
                options: [
                    { id: 'eyebrows-color1', preview: '' },
                    { id: 'eyebrows-color2', preview: '' },
                    { id: 'eyebrows-color3', preview: '' },
                ],
            },
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

            {
                id: 'eyebrows-size',
                name: 'Eyebrows size',
                type: 'size',
                options: [
                    { id: 'eyebrows-size1', preview: '', svgRef: '' },
                    { id: 'eyebrows-size2', preview: '', svgRef: '' },
                    { id: 'eyebrows-size3', preview: '', svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'eyebrows',
        name: 'Eyebrows',
        attributes: [
            {
                id: 'eyes-color',
                name: 'Eyes color',
                type: 'color',
                options: [
                    { id: 'eyes-color1', preview: '' },
                    { id: 'eyes-color2', preview: '' },
                    { id: 'eyes-color3', preview: '' },
                ],
            },
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

            {
                id: 'eyes-size',
                name: 'Eyes size',
                type: 'size',
                options: [
                    { id: 'eyes-size1', preview: '', svgRef: '' },
                    { id: 'eyes-size2', preview: '', svgRef: '' },
                    { id: 'eyes-size3', preview: '', svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'nose',
        name: 'Nose',
        attributes: [
            {
                id: 'nose-size',
                name: 'Nose size',
                type: 'size',
                options: [
                    { id: 'nose-size1', preview: '', svgRef: '' },
                    { id: 'nose-size2', preview: '', svgRef: '' },
                    { id: 'nose-size3', preview: '', svgRef: '' },
                ],
            },
            {
                id: 'nose-shape',
                name: 'Nose shape',
                type: 'shape',
                options: [
                    { id: 'nose-shape1', preview: '', svgRef: '' },
                    { id: 'nose-shape2', preview: '', svgRef: '' },
                    { id: 'nose-shape3', preview: '', svgRef: '' },
                ],
            },
        ],
    },
    {
        id: 'lips',
        name: 'Lips',
        attributes: [
            {
                id: 'lips-color',
                name: 'Lips color',
                type: 'color',
                options: [
                    { id: 'lips-color1', preview: '' },
                    { id: 'lips-color2', preview: '' },
                    { id: 'lips-color3', preview: '' },
                ],
            },
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
