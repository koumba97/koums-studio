import TankTop from '../Tops/TankTop';
import Tshirt from '../Tops/Tshirt';

interface Prop {
    color?: string;
    id: string;
}

const Tops = ({ color, id = 'lips-shape1' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'top1' ? (
            <Tshirt color={color} />
        ) : id === 'top2' ? (
            <TankTop color={color} />
        ) : undefined}
    </svg>
);

export default Tops;
