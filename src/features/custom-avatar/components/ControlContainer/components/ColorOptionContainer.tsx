import { ColorOptionProp } from '../../../types';
import ColorGradient from '@/assets/gradient.jpeg';

export const ColorOptionContainer = ({
    setting,
    colorList,
    currentColor,
    onColorChange,
}: ColorOptionProp) => {
    return (
        <>
            {colorList.map((color) => {
                return (
                    <button
                        className={`color-picker ${color === currentColor ? 'active' : null}`}
                        onClick={() => onColorChange(setting, color)}
                        style={{
                            backgroundColor: color,
                        }}
                        key={`color-${color}`}
                    />
                );
            })}

            <label
                htmlFor="color-picker"
                className={`color-picker free-color-picker ${!colorList.includes(currentColor!) ? 'active' : null}`}
                style={{
                    backgroundColor: !colorList.includes(currentColor!) ? currentColor : undefined,
                    backgroundImage: !colorList.includes(currentColor!)
                        ? undefined
                        : `url(${ColorGradient})`,
                }}
            >
                <div className="icon"></div>
                <input
                    type="color"
                    name="color-picker"
                    id="color-picker"
                    value={currentColor}
                    onChange={(e) => onColorChange(setting, e.target.value)}
                />
            </label>
        </>
    );
};

export default ColorOptionContainer;
