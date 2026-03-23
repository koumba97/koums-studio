import { ShapeOptionProp } from '../../types';

const ShapeOptionContainer = ({
    setting,
    option,
    currentShape,
    onShapeChange,
}: ShapeOptionProp) => {
    return (
        <button
            className={`shape-picker ${option.id === currentShape ? 'active' : null}`}
            onClick={() => onShapeChange(setting, option.id)}
            style={{
                backgroundImage: `url(${option.preview})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></button>
    );
};
export default ShapeOptionContainer;
