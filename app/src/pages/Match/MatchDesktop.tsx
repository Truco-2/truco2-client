import React from 'react';
import styles from './Match.module.scss';
import { Box, Typography } from '@mui/material';
import Table from './Table/Table';
import { IMatchScreen } from 'types/Match';
import Chat from './Chat/Chat';

const MatchDesktop: React.FC<IMatchScreen> = ({
    matchStatus,
    count,
    matchData,
    options,
    playerToPlay,
    handlePlay,
    handleBet,
    messages,
    sendMessageBySocket,
}) => {
    return (
        <Box className={styles.containerDesktop}>
            <Box className={styles.matchContainer}>
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
                    />
                </Box>
            </Box>

            <Box className={styles.chatContainer}>
                <Chat
                    messages={messages}
                    sendMessageBySocket={sendMessageBySocket}
                />
            </Box>
        </Box>
    );
};

export default MatchDesktop;
