import AlmondEyes from '../Eyes/AlmondEyes';
import DroppyEyes from '../Eyes/DroppyEyes';
import SleepyEyes from '../Eyes/SleepyEyes';
import ThinEyes from '../Eyes/ThinEyes';

interface Prop {
    color?: string;
    id: string;
}

const Eyes = ({ color, id = 'eyebrows-shape2' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'eyes-shape1' ? (
            <AlmondEyes color={color} />
        ) : id === 'eyes-shape2' ? (
            <DroppyEyes color={color} />
        ) : id === 'eyes-shape3' ? (
            <SleepyEyes color={color} />
        ) : id === 'eyes-shape4' ? (
            <ThinEyes color={color} />
        ) : undefined}
    </svg>
);

export default Eyes;
