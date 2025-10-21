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

type CharacterProps = {
    color?: string;
};

export const Character = ({ color = 'black' }: CharacterProps) => {
    const [currentSetting, setCurrentSetting] = useState<Settings>('face');
    return (
        <>
            <div>
                <div className="character-container">
                    <Skin color="#794e3d" />
                    <FaceShape />
                    <EyeBrows color="blue" />
                    <EyesAlmond color="orange" />
                    <Nose />
                    <Lips />
                    <Hair color="pink" />
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
                                            colorList={setting.colorOptions}
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
    colorList: string[];
};
const ColorOptionContainer = ({ colorList }: ColorOptionProp) => {
    return (
        <div className="colors-container">
            {colorList.map((color, i) => {
                return (
                    <div
                        className="color-picker"
                        style={{
                            backgroundColor: color,
                        }}
                    />
                );
            })}
        </div>
    );
};
