import { Box, Typography } from '@mui/material';
import { IPlayer } from 'types/Match';

interface IPlayerInformationsProps {
    player: IPlayer;
}

const PlayerInformations: React.FC<IPlayerInformationsProps> = ({ player }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',

                p: {
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    lineHeight: '36px',
                    textAlign: 'left',
                    color: 'white',
                },
            }}
        >
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
