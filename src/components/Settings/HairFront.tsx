import AfroFront from '../Hair/Scalp/AfroFront';
import BraidedScalp from '../Hair/Scalp/BraidedScalp';
import DefaultScalp from '../Hair/Scalp/DefaultScalp';
import MiddlePart from '../Hair/Scalp/MiddlePart';

interface Prop {
    color?: string;
    id: string;
}

const HairFront = ({ color, id = 'hair-1' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'hair-1' ? (
            <DefaultScalp color={color} />
        ) : id === 'hair-2' ||
          id === 'hair-3' ||
          id === 'hair-4' ||
          id === 'hair-7' ? (
            <MiddlePart color={color} />
        ) : id === 'hair-5' ? (
            <BraidedScalp color={color} />
        ) : id === 'hair-6' ? (
            <AfroFront color={color} />
        ) : undefined}
    </svg>
);

export default HairFront;
