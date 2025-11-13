interface Prop {
    color?: string;
}

const SmallEyebrows = ({ color }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        <path
            d="M355.3,536.27c9.72-1.17,31.58,4.77,30.06,17.51-.81,6.81-10,10.24-16.05,10.18-7.69-.08-26.72-7.02-27.02-16.12-.22-6.67,7.17-10.87,13.01-11.58Z"
            style={{ fill: color }}
        />
        <path
            d="M546.64,536.27c6.6-.74,14.19.21,18.34,5.89,8.75,11.97-14.91,21.3-23.95,21.75-7.68.38-18.54-3.9-17.03-13.22,1.35-8.36,15.28-13.6,22.64-14.43Z"
            style={{ fill: color }}
        />
    </svg>
);

export default SmallEyebrows;
