/// <reference types="vite-plugin-svgr/client" />

import { useState } from 'react';
import EyesAlmond from '../Face/EyesAlmond';
import EyeBrows from '../Face/EyesBrows';
import FaceShape from '../Face/FaceShape';
import Lips from '../Face/Lips';
import Nose from '../Face/Nose';
import Skin from '../Face/Skin';
import './Avatar.scss';
import {
    CustomizationSettings,
    Option,
    settingList,
    Settings,
} from '../../constants/CustomizationSettings';
import {
    eyebrowsColor,
    eyesColor,
    hairColor,
    lipsColor,
    skinColor,
} from '../../constants/ColorSettings';
import HairBack from '../Face/HairBack';
import HairFront from '../Face/HairFront';

type CharacterProps = {
    color?: string;
};

export const Avatar = ({ color = 'black' }: CharacterProps) => {
    const avatarDefaultSettings: Record<
        Settings,
        { color?: string; id: string }
    > = {
        face: {
            color: skinColor[12],
            id: 'face-1',
        },
        hair: {
            color: hairColor[2],
            id: 'hair-2',
        },

        eyes: {
            color: eyesColor[2],
            id: 'eyes-1',
        },
        eyebrows: {
            color: eyebrowsColor[2],
            id: 'eyebrows-1',
        },
        nose: {
            id: 'nose-1',
        },
        lips: {
            color: lipsColor[2],
            id: 'lips-1',
        },
    };
    const [currentSetting, setCurrentSetting] = useState<Settings>('face');
    const [avatarUserSettings, setAvatarUserSettings] = useState(
        avatarDefaultSettings
    );

    const handleColorChange = (setting: Settings, color: string) => {
        const newAvatarSettings = { ...avatarUserSettings };
        newAvatarSettings[setting].color = color;

        setAvatarUserSettings(newAvatarSettings);
    };

    const handleShapeChange = (setting: Settings, shape: string) => {
        const newAvatarSettings = { ...avatarUserSettings };
        newAvatarSettings[setting].id = shape;

        setAvatarUserSettings(newAvatarSettings);
    };
    return (
        <>
            <div>
                <div className="avatar-container">
                    <HairBack
                        color={avatarUserSettings.hair.color}
                        id={avatarUserSettings.hair.id}
                    />
                    <Skin color={avatarUserSettings.face.color} />
                    <FaceShape />
                    <EyeBrows color={avatarUserSettings.eyebrows.color} />
                    <EyesAlmond color={avatarUserSettings.eyes.color} />
                    <Nose />
                    <Lips color={avatarUserSettings.lips.color} />
                    <HairFront
                        color={avatarUserSettings.hair.color}
                        id={avatarUserSettings.hair.id}
                    />
                </div>
            </div>
            <div className="settings-container">
                {settingList.map((setting, i) => {
                    return (
                        <button
                            className={`setting-tab ${currentSetting === setting.id ? 'active' : ''}`}
                            key={setting.id}
                            data-text={setting.name}
                            onClick={() => setCurrentSetting(setting.id)}
                        >
                            {setting.name}
                        </button>
                    );
                })}
                <div className="setting-options">
                    {avatarUserSettings.hair.id}
                    {CustomizationSettings.map((setting) => {
                        if (setting.id === currentSetting) {
                            return (
                                <>
                                    {setting.colorOptions ? (
                                        <div className="colors-container">
                                            <ColorOptionContainer
                                                setting={setting.id}
                                                currentColor={
                                                    avatarUserSettings[
                                                        setting.id
                                                    ].color
                                                }
                                                colorList={setting.colorOptions}
                                                onColorChange={
                                                    handleColorChange
                                                }
                                            />
                                        </div>
                                    ) : null}
                                    {
                                        setting.attributes.length === 1 ? (
                                            <div className="shapes-container">
                                                {setting.attributes[0].options.map(
                                                    (option, i) => (
                                                        <ShapeOptionContainer
                                                            currentShape={
                                                                avatarUserSettings[
                                                                    setting.id
                                                                ].id
                                                            }
                                                            setting={setting.id}
                                                            option={option}
                                                            onShapeChange={
                                                                handleShapeChange
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                        ) : null // handle multiple attributes here
                                    }
                                </>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
};

type ColorOptionProp = {
    setting: Settings;
    colorList: string[];
    currentColor?: string;
    onColorChange: (setting: Settings, color: string) => void;
};
const ColorOptionContainer = ({
    setting,
    colorList,
    currentColor,
    onColorChange,
}: ColorOptionProp) => {
    return (
        <>
            {colorList.map((color, i) => {
                return (
                    <button
                        className={`color-picker ${color === currentColor ? 'active' : null}`}
                        onClick={() => onColorChange(setting, color)}
                        style={{
                            backgroundColor: color,
                        }}
                    />
                );
            })}

            <input
                type="color"
                onChange={(e) => onColorChange(setting, e.target.value)}
            />
        </>
    );
};

type ShapeOptionProp = {
    setting: Settings;
    option: Option;
    currentShape?: string;
    onShapeChange: (setting: Settings, shape: string) => void;
};
const ShapeOptionContainer = ({
    setting,
    option,
    currentShape,
    onShapeChange,
}: ShapeOptionProp) => {
    return (
        <button
            className={`shape-picker ${option.id === currentShape ? 'active' : null}`}
            onClick={() => onShapeChange(setting, option.id)}
        >
            {option.id}
        </button>
    );
};
