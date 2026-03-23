import DuckLips from '../SettingShapes/Lips/DuckLips';
import FullLips from '../SettingShapes/Lips/FullLips';
import HeartLips from '../SettingShapes/Lips/HeartLips';
import SmallRoundLips from '../SettingShapes/Lips/SmallRoundLips';
import Smile from '../SettingShapes/Lips/Smile';
import ThinLips from '../SettingShapes/Lips/ThinLips';

interface Prop {
    color?: string;
    id: string;
}

const Lips = ({ color, id = 'lips-shape1' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'lips-shape1' ? (
            <ThinLips color={color} />
        ) : id === 'lips-shape2' ? (
            <FullLips color={color} />
        ) : id === 'lips-shape3' ? (
            <SmallRoundLips color={color} />
        ) : id === 'lips-shape4' ? (
            <HeartLips color={color} />
        ) : id === 'lips-shape5' ? (
            <DuckLips color={color} />
        ) : id === 'lips-shape6' ? (
            <Smile color={color} />
        ) : undefined}
    </svg>
);

export default Lips;
