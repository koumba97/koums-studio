import {
    earringsColor,
    eyebrowsColor,
    eyesColor,
    hairColor,
    lipsColor,
    skinColor,
    topColor,
} from '../../../constants/avatar';
import { AvatarObject } from './CustomizationSettings';

export const avatarDefaultSettings: AvatarObject = {
    face: {
        color: skinColor[12],
        id: 'face-shape2',
    },
    hair: {
        color: hairColor[2],
        id: 'hair-6',
    },

    eyes: {
        color: eyesColor[6],
        id: 'eyes-shape1',
    },
    eyebrows: {
        color: eyebrowsColor[2],
        id: 'eyebrows-shape1',
    },
    nose: {
        id: 'nose-shape1',
    },
    lips: {
        color: lipsColor[6],
        id: 'lips-shape2',
    },
    faceMark: {
        id: 'face-mark1',
    },
    earrings: {
        id: 'earrings1',
        color: earringsColor[3],
    },
    top: {
        id: 'top2',
        color: topColor[0],
    },
};
