import {
    AvatarObject,
    CustomizationSettings,
    settingList,
} from '../../data/CustomizationSettings';
import './ControlContainer.scss';

import { AvatarSettingId } from '../../types';
import ColorOptionContainer from './components/ColorOptionContainer';
import ShapeOptionContainer from './components/ShapeOptionContainer';

interface ControlContainerProps {
    avatarUserSettings: AvatarObject;
    currentSetting: AvatarSettingId;
    handleColorChange: (setting: AvatarSettingId, color: string) => void;
    handleShapeChange: (setting: AvatarSettingId, color: string) => void;
    setCurrentSetting: (currentSetting: AvatarSettingId) => void;
}
const ControlContainer = ({
    avatarUserSettings,
    currentSetting,
    handleColorChange,
    handleShapeChange,
    setCurrentSetting,
}: ControlContainerProps) => {
    return (
        <div className="control-container">
            <div className="scroll">
                <div className="tabs-container">
                    {settingList.map((setting) => {
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
                                                colorList={setting.colorOptions}
                                                onColorChange={(
                                                    setting,
                                                    color
                                                ) =>
                                                    handleColorChange(
                                                        setting,
                                                        color
                                                    )
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
                                                                    setting.id
                                                                ].id
                                                            }
                                                            setting={setting.id}
                                                            option={option}
                                                            onShapeChange={(
                                                                setting,
                                                                shape
                                                            ) =>
                                                                handleShapeChange(
                                                                    setting,
                                                                    shape
                                                                )
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
            <p className="with-love">Made with 🩷 by Koum</p>
        </div>
    );
};
export default ControlContainer;
