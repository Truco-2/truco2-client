import { useContext } from "react";

import { SocketContext } from "contexts/SocketContext";
import { MatchSocketContext } from "contexts/MatchSocketContext";

const useSocket = (type: 'match' | 'room' = 'room') => {
    const data = useContext(type === 'room' ? SocketContext : MatchSocketContext);

    return data;
};

export default useSocket;
