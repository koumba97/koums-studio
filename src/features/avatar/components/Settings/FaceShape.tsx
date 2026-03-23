import DiamondFace from '../Face/DiamondFace';
import RoundFace from '../Face/RoundFace';
import SquareFace from '../Face/SquareFace';
import ThinFace from '../Face/ThinFace';

interface Prop {
    color?: string;
    id: string;
}

const FaceShape = ({ color, id = 'face-shape2' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'face-shape1' ? (
            <ThinFace color={color} />
        ) : id === 'face-shape2' ? (
            <DiamondFace color={color} />
        ) : id === 'face-shape3' ? (
            <SquareFace color={color} />
        ) : id === 'face-shape4' ? (
            <RoundFace color={color} />
        ) : undefined}
    </svg>
);

export default FaceShape;
