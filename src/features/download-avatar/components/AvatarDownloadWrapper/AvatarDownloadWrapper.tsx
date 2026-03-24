import { Avatar } from '../../../custom-avatar/components/Avatar/Avatar';
import { AvatarDownloadWrapperProps } from '../../types';
import { useDownloadAvatar } from '../../hooks/useDownloadAvatar';

export const AvatarDownloadWrapper = ({
    avatarUserSettings,
    divRef,
}: AvatarDownloadWrapperProps) => {
    return (
        <div className="avatar-download-wrapper" ref={divRef}>
            <Avatar avatarUserSettings={avatarUserSettings} download={true} />
            <p className="with-love">koumbakeita.com</p>
        </div>
    );
};
