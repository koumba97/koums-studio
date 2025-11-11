/// <reference types="vite-plugin-svgr/client" />

import EyesAlmond from '../Face/EyesAlmond';
import EyeBrows from '../Face/EyesBrows';
import FaceShape from '../Face/FaceShape';
import Lips from '../Face/Lips';
import Nose from '../Face/Nose';
import Skin from '../Face/Skin';
import './Avatar.scss';
import { Settings } from '../../constants/CustomizationSettings';
import HairBack from '../Face/HairBack';
import HairFront from '../Face/HairFront';

type AvatarProps = {
    avatarUserSettings: Record<Settings, { color?: string; id: string }>;
};

export const Avatar = ({ avatarUserSettings }: AvatarProps) => {
    return (
        <div>
            <div className="avatar-container">
                <HairBack
                    color={avatarUserSettings.hair.color}
                    id={avatarUserSettings.hair.id}
                />
                <Skin color={avatarUserSettings.face.color} />
                <FaceShape />
                <EyeBrows color={avatarUserSettings.eyebrows.color} />
                <EyesAlmond color={avatarUserSettings.eyes.color} />
                <Nose id={avatarUserSettings.nose.id} />
                <Lips color={avatarUserSettings.lips.color} />
                <HairFront
                    color={avatarUserSettings.hair.color}
                    id={avatarUserSettings.hair.id}
                />
            </div>{' '}
        </div>
    );
};
