interface Prop {
    color?: string;
}

const EyeBrows = ({ color }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        <path
            d="M546.11,528.65c11.39-1.14,32.77,4.78,26.14,20.15-5.11,11.84-34.38,18.64-45.77,16.07-12.2-2.75-16.79-14.31-7.8-23.85,4.96-5.26,20.25-11.65,27.43-12.37Z"
            style={{ fill: color }}
        />
        <path
            d="M358.04,529.74c9.84-1,20.02,2.97,28.47,7.74,18.36,10.35,12.32,29.65-8.45,29.17-11.61-.27-41.6-7.32-39.95-23.01.96-9.13,12.02-13.09,19.93-13.9Z"
            style={{ fill: color }}
        />
    </svg>
);

export default EyeBrows;
