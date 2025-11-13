import BigEyebrows from '../Eyebrows/BigEyesbrows';
import CutEyebrows from '../Eyebrows/CutEyesbrows';
import MediumEyebrows from '../Eyebrows/MediumEyesbrows';
import ShavedEyebrows from '../Eyebrows/ShavedEyebrows';
import SmallEyebrows from '../Eyebrows/SmallEyesbrows copy';

interface Prop {
    color?: string;
    id: string;
}

const Eyebrows = ({ color, id = 'eyebrows-shape2' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'eyebrows-shape1' ? (
            <SmallEyebrows color={color} />
        ) : id === 'eyebrows-shape2' ? (
            <MediumEyebrows color={color} />
        ) : id === 'eyebrows-shape3' ? (
            <BigEyebrows color={color} />
        ) : id === 'eyebrows-shape4' ? (
            <CutEyebrows color={color} />
        ) : id === 'eyebrows-shape5' ? (
            <ShavedEyebrows color={color} />
        ) : id === 'eyebrows-shape6' ? null : undefined}
    </svg>
);

export default Eyebrows;
