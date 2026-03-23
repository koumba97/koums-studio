import { Button } from 'koum-ui';

type AvatarProps = {
    shuffleAvatar: () => void;
};

export const ShuffledButton = ({ shuffleAvatar }: AvatarProps) => {
    return (
        <Button
            color="primary"
            label="Shuffle"
            icon={<p>🎲</p>}
            onClick={shuffleAvatar}
        ></Button>
    );
};
