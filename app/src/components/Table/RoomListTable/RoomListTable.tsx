import React from 'react';

import { Table, TableBody, TableHead, TableRow } from '@mui/material';

import { IRoomList } from 'types/Room';

import {
    StyledTableCell,
    StyledTableContainer,
    StyledTableRow,
} from 'components/ui/Table';

interface IRoomListTableProps {
    rooms: IRoomList[];
}

const RoomListTable: React.FC<IRoomListTableProps> = ({ rooms }) => {
    console.log(rooms);

    return (
        <StyledTableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">
                            Nome da Sala
                        </StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Vagas</StyledTableCell>
                        <StyledTableCell align="center">
                            Pessoas em Sala
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rooms.map((room, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell>{room.name}</StyledTableCell>
                            <StyledTableCell align="center">
                                {room.isPrivate ? 'Publico' : 'Privado'}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {room.maxPlayers - room.UsersRooms.length}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {room.UsersRooms.length}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export default RoomListTable;
