import { useRef } from 'react';
import html2canvas from 'html2canvas';

export const useDownloadAvatar = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const downloadAvatar = async () => {
        if (!divRef.current) return;

        const canvas = await html2canvas(divRef.current, {
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

    return {
        divRef,
        downloadAvatar,
    };
};
