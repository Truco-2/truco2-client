import { Box, Typography } from '@mui/material';
import { IPlayer } from 'types/Match';
import styles from './PlayerInformation.module.scss';

interface IPlayerInformationsProps {
    player: IPlayer;
    isMobile?: boolean;
}

const PlayerInformations: React.FC<IPlayerInformationsProps> = ({
    player,
    isMobile,
}) => {
    return (
        <Box
            className={
                isMobile
                    ? styles.playerInformationsContainerMobile
                    : styles.playerInformationsContainerDesktop
            }
        >
            {/* {!isMobile && <Typography>Status: {player.status}</Typography>} */}
            <Typography>{player.user.name}</Typography>
            {player.bet !== null && (
                <Typography>{player.bet} blefes</Typography>
            )}
            {player.wins ? (
                <Typography>{player.wins} vitórias</Typography>
            ) : null}
        </Box>
    );
};

export default PlayerInformations;
