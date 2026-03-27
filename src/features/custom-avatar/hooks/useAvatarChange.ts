import { useState } from 'react';
import { AvatarSettingId } from '../types';
import { avatarDefaultSettings } from '../data/DefaultAvatarSettings';

export const useAvatarSettings = () => {
    const [currentSetting, setCurrentSetting] = useState<AvatarSettingId>('face');
    const [avatarUserSettings, setAvatarUserSettings] = useState(avatarDefaultSettings);

    const handleShapeChange = (setting: AvatarSettingId, id: string) => {
        setAvatarUserSettings((prev) => ({
            ...prev,
            [setting]: {
                ...prev[setting],
                id,
            },
        }));
    };

    const handleColorChange = (setting: AvatarSettingId, color: string) => {
        setAvatarUserSettings((prev) => ({
            ...prev,
            [setting]: {
                ...prev[setting],
                color,
            },
        }));
    };

    return {
        avatarUserSettings,
        setAvatarUserSettings,
        currentSetting,
        setCurrentSetting,
        handleColorChange,
        handleShapeChange,
    };
};
