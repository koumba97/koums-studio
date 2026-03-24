/// <reference types="vite-plugin-svgr/client" />

import './DownloadButton.scss';
import { Button } from 'koum-ui';
import { useDownloadAvatar } from '../../hooks/useDownloadAvatar';
import { AvatarDownloadWrapper } from '../AvatarDownloadWrapper/AvatarDownloadWrapper';
import { DownloadButtonProps } from '../../types';

export const DownloadButton = ({ avatarUserSettings }: DownloadButtonProps) => {
    const { downloadAvatar, divRef } = useDownloadAvatar();
    return (
        <>
            <AvatarDownloadWrapper
                avatarUserSettings={avatarUserSettings}
                divRef={divRef}
            />

            <Button
                additionalClass="download-button"
                color="secondary"
                label="Download"
                onClick={downloadAvatar}
                icon={<p>💾</p>}
            ></Button>
        </>
    );
};
