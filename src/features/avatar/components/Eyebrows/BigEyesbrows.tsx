interface Prop {
    color?: string;
}

const BigEyebrows = ({ color }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        <path
            d="M346.59,522.65c15.36-1.56,43.89,3.01,53,17,9.84,15.1-1.32,28.34-16.78,31.22-13.38,2.49-34.12-3.89-45.01-11.95-18.74-13.87-15.98-33.76,8.79-36.28Z"
            style={{ fill: color }}
        />
        <path
            d="M547.74,522.65c12.27-1.04,37.51.03,36.04,18.03-1.7,20.91-39.96,33.42-57.33,30.19-16.39-3.05-27.38-17.82-15.66-32.83,7.18-9.2,25.69-14.44,36.95-15.39Z"
            style={{ fill: color }}
        />
    </svg>
);

export default BigEyebrows;
