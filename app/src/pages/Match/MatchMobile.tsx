import React from 'react';
import styles from './Match.module.scss';
import { IMatchScreen } from 'types/Match';
import { Box, Typography } from '@mui/material';
import Table from './Table/Table';

const MatchMobile: React.FC<IMatchScreen> = ({
    matchStatus,
    count,
    matchData,
    options,
    playerToPlay,
    handlePlay,
    handleBet,
}) => {
    return (
        <Box className={styles.containerMobile}>
            <Typography className={styles.text}>Sala Do Jogo</Typography>

            <Box>
                <Typography className={styles.subText}>
                    {matchStatus}
                </Typography>
                <Typography className={styles.subText}>
                    Timer: {count}
                </Typography>
            </Box>

            <Box className={styles.tableContainer}>
                <Table
                    playerCards={matchData?.cards ?? []}
                    players={matchData?.match.players ?? []}
                    tableCard={matchData?.match.tableCard ?? 0}
                    options={options}
                    playerToPlay={playerToPlay}
                    handlePlay={handlePlay}
                    handleBet={handleBet}
                    isMobile={true}
                />
            </Box>
        </Box>
    );
};

export default MatchMobile;
