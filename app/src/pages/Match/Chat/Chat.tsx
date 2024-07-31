import { TextField } from 'components/ui/TextField';
import styles from './Chat.module.scss';

import { Box, Typography } from '@mui/material';
import { Button } from 'components/ui/Button';
import { useState } from 'react';
import { IMessage } from 'types/Match';
import { userInformations } from 'helpers/session';

interface IChatProps {
    messages: IMessage[];
    sendMessageBySocket: (message: string) => void;
}

const Chat: React.FC<IChatProps> = ({ messages, sendMessageBySocket }) => {
    const [chat, setChat] = useState<string>('');

    const userName = userInformations().username;

    const handleChat = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = e.target.value;

        setChat(value);
    };

    const handleSendMessage = () => {
        if (chat) {
            sendMessageBySocket(chat);
            setChat('');
        }
    };

    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>Chat Do Jogo</Typography>

            <Box className={styles.messageContainer}>
                {messages?.map((message, index) =>
                    message.name === userName ? (
                        <Box className={styles.myMessageBox} key={index}>
                            <Typography>{message.name}</Typography>
                            <Box>
                                <Typography>{message.message}</Typography>
                            </Box>
                        </Box>
                    ) : (
                        <Box className={styles.messageBox} key={index}>
                            <Typography>{message.name}</Typography>
                            <Box>
                                <Typography>{message.message}</Typography>
                            </Box>
                        </Box>
                    )
                )}
            </Box>

            <Box className={styles.inputContainer}>
                <TextField
                    value={chat}
                    onChange={(e) => handleChat(e)}
                    fullWidth
                />

                <Button primary="true" onClick={handleSendMessage}>
                    Enviar
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;
