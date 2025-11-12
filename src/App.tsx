import { useState } from 'react';
import {
    eyebrowsColor,
    eyesColor,
    hairColor,
    lipsColor,
    skinColor,
} from './constants/ColorSettings';
import './App.scss';
import { Avatar } from './components/Avatar/Avatar';
import ColorGradient from './assets/gradient.jpeg';
import KoumsStudio from './assets/koums-studio-logo.png';
import {
    CustomizationSettings,
    settingList,
    Option,
    Settings,
} from './constants/CustomizationSettings';

function App() {
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
            id: 'nose-shape-1',
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
            <img src={KoumsStudio} className="koums-studio-logo" />
            <Avatar avatarUserSettings={avatarUserSettings} />

            <div className="control-container">
                <div className="scroll">
                    <div className="tabs-container">
                        {settingList.map((setting, i) => {
                            return (
                                <button
                                    className={`setting-tab ${currentSetting === setting.id ? 'active' : ''}`}
                                    key={setting.id}
                                    data-text={setting.name}
                                    onClick={() =>
                                        setCurrentSetting(setting.id)
                                    }
                                >
                                    {setting.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="setting-options">
                    {CustomizationSettings.map((setting, index) => {
                        if (setting.id === currentSetting) {
                            return (
                                <div key={index}>
                                    {setting.colorOptions ? (
                                        <div className="scroll">
                                            <div className="colors-container">
                                                <ColorOptionContainer
                                                    setting={setting.id}
                                                    currentColor={
                                                        avatarUserSettings[
                                                            setting.id
                                                        ].color
                                                    }
                                                    colorList={
                                                        setting.colorOptions
                                                    }
                                                    onColorChange={
                                                        handleColorChange
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ) : null}
                                    {
                                        setting.attributes.length === 1 ? (
                                            <div className="scroll">
                                                <div className="shapes-container">
                                                    {setting.attributes[0].options.map(
                                                        (option, i) => (
                                                            <ShapeOptionContainer
                                                                currentShape={
                                                                    avatarUserSettings[
                                                                        setting
                                                                            .id
                                                                    ].id
                                                                }
                                                                setting={
                                                                    setting.id
                                                                }
                                                                option={option}
                                                                onShapeChange={
                                                                    handleShapeChange
                                                                }
                                                                key={`setting-${i}`}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ) : null // handle multiple attributes here
                                    }
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}

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
                        key={`color-${color}`}
                    />
                );
            })}

            <label
                htmlFor="color-picker"
                className={`color-picker free-color-picker ${!colorList.includes(currentColor!) ? 'active' : null}`}
                style={{
                    backgroundColor: !colorList.includes(currentColor!)
                        ? currentColor
                        : undefined,
                    backgroundImage: !colorList.includes(currentColor!)
                        ? undefined
                        : `url(${ColorGradient})`,
                }}
            >
                <div className="icon"></div>
            </label>
            <input
                type="color"
                name="color-picker"
                id="color-picker"
                value={currentColor}
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
            style={{
                backgroundImage: `url(${option.preview})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></button>
    );
};

export default App;
