/// <reference types="vite-plugin-svgr/client" />

import './Avatar/Avatar.scss';
import { AvatarObject } from '../constants/CustomizationSettings';
import { Button } from 'koum-ui';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { Avatar } from './Avatar/Avatar';

type AvatarProps = {
    avatarUserSettings: AvatarObject;
    shuffleAvatar: () => void;
};

export const Export = ({ avatarUserSettings, shuffleAvatar }: AvatarProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const handleExport = async () => {
        if (!divRef.current) return;

        const canvas = await html2canvas(divRef.current, {
            //backgroundColor: 'pink',
            scale: 2,
            height: 500,
            width: 500,
        });

        const dataURL = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'koums-studio.png';
        link.click();
    };

    return (
        <>
            <div className="avatar-export-wrapper" ref={divRef}>
                <Avatar avatarUserSettings={avatarUserSettings} />
            </div>
            <div className="buttons-container">
                <Button
                    additionalClass="export-button"
                    color="secondary"
                    label="Download"
                    onClick={handleExport}
                    icon={<p>💾</p>}
                ></Button>

                <Button
                    additionalClass="export-button"
                    color="primary"
                    label="Shuffle"
                    icon={<p>🎲</p>}
                    onClick={shuffleAvatar}
                ></Button>
            </div>
        </>
    );
};
