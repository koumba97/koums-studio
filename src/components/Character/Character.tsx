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
import {
    CustomizationSettings,
    settingList,
    Settings,
} from '../../constants/CustomizationSettings';
import {
    eyebrowsColor,
    hairColor,
    skinColor,
} from '../../constants/ColorSettings';

type CharacterProps = {
    color?: string;
};

export const Character = ({ color = 'black' }: CharacterProps) => {
    const avatarDefaultColors: Record<Settings, string> = {
        face: skinColor[12],
        hair: hairColor[2],
        eyes: eyebrowsColor[2],
        eyebrows: '',
        nose: '',
        lips: '',
    };
    const [currentSetting, setCurrentSetting] = useState<Settings>('face');
    const [avatarColors, setAvatarColors] = useState(avatarDefaultColors);

    const handleColorChange = (setting: Settings, color: string) => {
        const newAvatarColors = { ...avatarColors };
        newAvatarColors[setting] = color;

        setAvatarColors(newAvatarColors);
    };
    return (
        <>
            <div>
                <div className="character-container">
                    <Skin color={avatarColors.face} />
                    <FaceShape />
                    <EyeBrows color={avatarColors.eyebrows} />
                    <EyesAlmond color={avatarColors.eyes} />
                    <Nose />
                    <Lips color={avatarColors.lips} />
                    <Hair color={avatarColors.hair} />
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
                    {CustomizationSettings.map((setting) => {
                        if (setting.id === currentSetting) {
                            return (
                                <>
                                    {setting.colorOptions ? (
                                        <ColorOptionContainer
                                            setting={setting.id}
                                            currentColor={
                                                avatarColors[setting.id]
                                            }
                                            colorList={setting.colorOptions}
                                            onColorChange={handleColorChange}
                                        />
                                    ) : null}
                                    {
                                        setting.attributes.length === 1 ? (
                                            <div className="shapes-container">
                                                {setting.attributes[0].options.map(
                                                    (option) => (
                                                        <div
                                                            key={option.id}
                                                            className="shape-picker"
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
    currentColor: string;
    onColorChange: (setting: Settings, color: string) => void;
};
const ColorOptionContainer = ({
    setting,
    colorList,
    currentColor,
    onColorChange,
}: ColorOptionProp) => {
    return (
        <div className="colors-container">
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
        </div>
    );
};
