import './App.scss';
import { Avatar } from './features/custom-avatar/components/Avatar/Avatar';
import KoumsStudio from './assets/koums-studio-logo.png';
import {
    CustomizationSettings,
    settingList,
} from './features/custom-avatar/data/CustomizationSettings';
import { useShuffleAvatar } from './features/shuffle-avatar/hooks/useShuffleAvatar';
import ColorOptionContainer from './features/custom-avatar/components/ColorOptionContainer/ColorOptionContainer';
import ShapeOptionContainer from './features/custom-avatar/components/ShapeOptionContainer/ShapeOptionContainer';
import { DownloadButton } from './features/download-avatar/components/DownloadButton/DownloadButton';
import { ShuffledButton } from './features/shuffle-avatar/components/ShuffleButton/ShuffleButton';
import { useAvatarSettings } from './features/custom-avatar/hooks/useAvatarChange';

function App() {
    const {
        avatarUserSettings,
        setAvatarUserSettings,
        currentSetting,
        setCurrentSetting,
        handleColorChange,
        handleShapeChange,
    } = useAvatarSettings();

    return (
        <div className="project-container">
            <img src={KoumsStudio} className="koums-studio-logo" />
            <div className="avatar-buttons-wrapper">
                <div className="avatar-wrapper">
                    <Avatar avatarUserSettings={avatarUserSettings} />
                </div>

                <div className="buttons-container">
                    <DownloadButton avatarUserSettings={avatarUserSettings} />
                    <ShuffledButton
                        shuffleAvatar={() =>
                            setAvatarUserSettings(useShuffleAvatar)
                        }
                    />
                </div>
            </div>
            <div className="control-container">
                <div className="scroll">
                    <div className="tabs-container">
                        {settingList.map((setting) => {
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
                <p className="with-love">Made with 🩷 by Koum</p>
            </div>
        </div>
    );
}

export default App;
