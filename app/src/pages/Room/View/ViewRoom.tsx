import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const ViewRoom: React.FC = () => {
    const { code } = useParams();

    useEffect(() => {
        console.log('code: ', code);
    }, [code]);

    return <h1>View Room Page: {code}</h1>;
};

export default ViewRoom;
