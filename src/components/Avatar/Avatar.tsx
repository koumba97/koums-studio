/// <reference types="vite-plugin-svgr/client" />

import EyesAlmond from '../Settings/EyesAlmond';
import FaceShape from '../Settings/FaceShape';
import Lips from '../Settings/Lips';
import Nose from '../Settings/Nose';
import './Avatar.scss';
import { Settings } from '../../constants/CustomizationSettings';
import HairBack from '../Settings/HairBack';
import HairFront from '../Settings/HairFront';
import Eyebrows from '../Settings/Eyebrows';

type AvatarProps = {
    avatarUserSettings: Record<Settings, { color?: string; id: string }>;
};

export const Avatar = ({ avatarUserSettings }: AvatarProps) => {
    return (
        <div className="avatar-wrapper">
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
                <EyesAlmond color={avatarUserSettings.eyes.color} />
                <Nose id={avatarUserSettings.nose.id} />
                <Lips color={avatarUserSettings.lips.color} />
                <HairFront
                    color={avatarUserSettings.hair.color}
                    id={avatarUserSettings.hair.id}
                />
            </div>
        </div>
    );
};
