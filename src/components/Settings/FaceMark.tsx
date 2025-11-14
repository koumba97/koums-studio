import Freckles from './Freckles';

interface Prop {
    color?: string;
    id: string;
}

const FaceMark = ({ id = 'face-mark1' }: Prop) => (
    <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 909.82 1192.73"
    >
        {id === 'face-mark1' ? (
            <Freckles />
        ) : id === 'face-mark2' ? (
            <path d="M324.59,679.11c4.93-.71,5.24,6.86,1.4,7.45s-5.95-6.79-1.4-7.45Z" /> // upper left cheek
        ) : id === 'face-mark3' ? (
            <path d="M587.04,679.11c4.93-.71,5.24,6.86,1.4,7.45s-5.95-6.79-1.4-7.45Z" /> // upper right cheek
        ) : id === 'face-mark4' ? (
            <path d="M405.44,682.2c3.13-.45,3.32,4.35.89,4.72s-3.78-4.31-.89-4.72Z" /> // inner left eye
        ) : id === 'face-mark5' ? (
            <path d="M502.79,683.86c3.13-.45,3.32,4.35.89,4.72s-3.78-4.31-.89-4.72Z" /> // inner right eye
        ) : id === 'face-mark6' ? (
            <path d="M400.64,773.78c3.13-.45,3.32,4.35.89,4.72s-3.78-4.31-.89-4.72Z" /> // upper left lips
        ) : id === 'face-mark7' ? (
            <path d="M504.41,769.03c3.13-.45,3.32,4.35.89,4.72s-3.78-4.31-.89-4.72Z" /> // upper right lips
        ) : undefined}
    </svg>
);

export default FaceMark;
