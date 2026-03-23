export type AvatarSettingId =
    | 'face'
    | 'hair'
    | 'eyebrows'
    | 'eyes'
    | 'nose'
    | 'lips'
    | 'faceMark'
    | 'earrings'
    | 'top';

export type Category = {
    id: AvatarSettingId;
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

export type ShapeOptionProp = {
    setting: AvatarSettingId;
    option: Option;
    currentShape?: string;
    onShapeChange: (setting: AvatarSettingId, shape: string) => void;
};

export type ColorOptionProp = {
    setting: AvatarSettingId;
    colorList: string[];
    currentColor?: string;
    onColorChange: (setting: AvatarSettingId, color: string) => void;
};
