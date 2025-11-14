/// <reference types="vite-plugin-svgr/client" />

import './Avatar/Avatar.scss';
import { Settings } from '../constants/CustomizationSettings';

import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { Avatar } from './Avatar/Avatar';

type AvatarProps = {
    avatarUserSettings: Record<Settings, { color?: string; id: string }>;
};

export const Export = ({ avatarUserSettings }: AvatarProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const handleExport = async () => {
        if (!divRef.current) return;

        const canvas = await html2canvas(divRef.current, {
            backgroundColor: 'pink',
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
            <button onClick={handleExport} style={{ zIndex: 5 }}>
                Exporter
            </button>
        </>
    );
};
