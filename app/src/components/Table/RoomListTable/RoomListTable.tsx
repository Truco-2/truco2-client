import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { IRoomList } from 'types/Room';

interface IRoomListTableProps {
    rooms: IRoomList[];
}

const RoomListTable: React.FC<IRoomListTableProps> = ({ rooms }) => {
    console.log(rooms);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome da Sala</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Vagas</TableCell>
                        <TableCell>Pessoas em Sala</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rooms.map((room, index) => (
                        <TableRow key={index}>
                            <TableCell>{room.name}</TableCell>
                            <TableCell>
                                {room.isPrivate ? 'Publico' : 'Privado'}
                            </TableCell>
                            <TableCell>
                                {room.maxPlayers - room.UsersRooms.length}
                            </TableCell>
                            <TableCell>{room.UsersRooms.length}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RoomListTable;
