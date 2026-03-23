/// <reference types="vite-plugin-svgr/client" />

import FaceShape from '../SettingButtons/FaceShape';
import Lips from '../SettingButtons/Lips';
import Nose from '../SettingButtons/Nose';
import './Avatar.scss';
import { AvatarSettingId } from '../../types';
import HairBack from '../SettingButtons/HairBack';
import HairFront from '../SettingButtons/HairFront';
import Eyebrows from '../SettingButtons/Eyebrows';
import Eyes from '../SettingButtons/Eyes';
import FaceMark from '../SettingButtons/FaceMark';
import Earrings from '../SettingButtons/Earrings';
import Tops from '../SettingButtons/Tops';
import Signature from '../Signature';

type AvatarProps = {
    avatarUserSettings: Record<AvatarSettingId, { color?: string; id: string }>;
    download?: boolean;
};

export const Avatar = ({
    avatarUserSettings,
    download = false,
}: AvatarProps) => {
    return (
        <div className="avatar-container">
            <HairBack
                color={avatarUserSettings.hair.color}
                id={avatarUserSettings.hair.id}
            />

            <FaceShape
                color={avatarUserSettings.face.color}
                id={avatarUserSettings.face.id}
            />
            <Eyebrows
                id={avatarUserSettings.eyebrows.id}
                color={avatarUserSettings.eyebrows.color}
            />
            <Eyes
                id={avatarUserSettings.eyes.id}
                color={avatarUserSettings.eyes.color}
            />
            <Nose id={avatarUserSettings.nose.id} />
            <Lips
                id={avatarUserSettings.lips.id}
                color={avatarUserSettings.lips.color}
            />
            <FaceMark id={avatarUserSettings.faceMark.id} />
            <Tops
                id={avatarUserSettings.top.id}
                color={avatarUserSettings.top.color}
            />
            <Earrings
                id={avatarUserSettings.earrings.id}
                color={avatarUserSettings.earrings.color}
            />
            <HairFront
                color={avatarUserSettings.hair.color}
                id={avatarUserSettings.hair.id}
            />

            {download ? <Signature /> : null}
        </div>
    );
};
