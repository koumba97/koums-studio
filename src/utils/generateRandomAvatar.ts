import {
    AvatarObject,
    CustomizationSettings,
} from '../constants/CustomizationSettings';

export function generateRandomAvatar() {
    const avatar = {} as AvatarObject;

    CustomizationSettings.forEach((category) => {
        const { id: settingId, attributes, colorOptions } = category;

        const randomAttribute = attributes[0];
        const randomShape =
            randomAttribute.options[
                Math.floor(Math.random() * randomAttribute.options.length)
            ];

        const randomColor = colorOptions
            ? colorOptions[Math.floor(Math.random() * colorOptions.length)]
            : undefined;

        avatar[settingId] = {
            id: randomShape.id,
            ...(randomColor && { color: randomColor }),
        };
    });

    return avatar;
}
