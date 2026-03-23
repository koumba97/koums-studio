import { RefObject } from 'react';
import { AvatarObject } from '../custom-avatar/data/CustomizationSettings';

export type AvatarDownloadWrapperProps = {
    avatarUserSettings: AvatarObject;
    divRef: RefObject<HTMLDivElement | null>;
};

export type DownloadButtonProps = {
    avatarUserSettings: AvatarObject;
};
