import { useContext } from "react";

import { SocketContext } from "contexts/SocketContext";

const useSocket = () => {
    const data = useContext(SocketContext);

    return data;
};

export default useSocket;
