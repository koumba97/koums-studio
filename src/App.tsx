import './App.scss';
import { Avatar } from './features/custom-avatar/components/Avatar/Avatar';
import KoumsStudio from './assets/koums-studio-logo.png';
import { useShuffleAvatar } from './features/shuffle-avatar/hooks/useShuffleAvatar';
import { DownloadButton } from './features/download-avatar/components/DownloadButton/DownloadButton';
import { ShuffledButton } from './features/shuffle-avatar/components/ShuffleButton/ShuffleButton';
import { useAvatarSettings } from './features/custom-avatar/hooks/useAvatarChange';
import ControlContainer from './features/custom-avatar/components/ControlContainer/ControlContainer';

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
                    <ShuffledButton shuffleAvatar={() => setAvatarUserSettings(useShuffleAvatar)} />
                </div>
            </div>
            <ControlContainer
                avatarUserSettings={avatarUserSettings}
                currentSetting={currentSetting}
                setCurrentSetting={(setting) => setCurrentSetting(setting)}
                handleColorChange={(setting, color) => handleColorChange(setting, color)}
                handleShapeChange={(setting, shape) => handleShapeChange(setting, shape)}
            />
        </div>
    );
}

export default App;
