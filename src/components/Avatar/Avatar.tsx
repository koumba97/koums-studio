/// <reference types="vite-plugin-svgr/client" />

import FaceShape from '../Settings/FaceShape';
import Lips from '../Settings/Lips';
import Nose from '../Settings/Nose';
import './Avatar.scss';
import { Settings } from '../../constants/CustomizationSettings';
import HairBack from '../Settings/HairBack';
import HairFront from '../Settings/HairFront';
import Eyebrows from '../Settings/Eyebrows';
import Eyes from '../Settings/Eyes';
import FaceMark from '../Settings/FaceMark';
import Earrings from '../Settings/Earrings';
import Tops from '../Settings/Tops';
import Signature from '../Signature';

type AvatarProps = {
    avatarUserSettings: Record<Settings, { color?: string; id: string }>;
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
        </div>
    );
};
