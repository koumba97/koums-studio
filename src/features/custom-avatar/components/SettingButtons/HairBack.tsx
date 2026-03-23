import Afro from '../SettingShapes/Hair/Style/Afro';
import AfroPuffs from '../SettingShapes/Hair/Style/AfroPuffs';
import Bob from '../SettingShapes/Hair/Style/Bob';
import Braids from '../SettingShapes/Hair/Style/Braids';
import Straight from '../SettingShapes/Hair/Style/Straight';
import Wavy from '../SettingShapes/Hair/Style/Wavy';

interface Prop {
    color?: string;
    id: string;
}

const HairBack = ({ color, id = 'hair-1' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'hair-1' ? (
            <></>
        ) : id === 'hair-2' ? (
            <Wavy color={color} />
        ) : id === 'hair-3' ? (
            <Straight color={color} />
        ) : id === 'hair-4' ? (
            <Bob color={color} />
        ) : id === 'hair-5' ? (
            <Braids color={color} />
        ) : id === 'hair-6' ? (
            <Afro color={color} />
        ) : id === 'hair-7' ? (
            <AfroPuffs color={color} />
        ) : undefined}
    </svg>
);

export default HairBack;
