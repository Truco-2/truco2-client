import React from 'react';

import { Table, TableBody, TableHead, TableRow } from '@mui/material';

import { IRoomList } from 'types/Room';

import {
    StyledTableCell,
    StyledTableContainer,
    StyledTableRow,
} from 'components/ui/Table';

import { useNavigate } from 'react-router-dom';

interface IRoomListTableProps {
    rooms: IRoomList[];
}

const RoomListTable: React.FC<IRoomListTableProps> = ({ rooms }) => {
    const navigate = useNavigate();

    const handleTableRowClick = (code: string) => {
        navigate(`/room/view/${code}`);
    };

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
                        <StyledTableRow
                            onClick={() => handleTableRowClick(room.code)}
                            key={index}
                        >
                            <StyledTableCell>{room.name}</StyledTableCell>
                            <StyledTableCell align="center">
                                {room.isPrivate ? 'Privado' : 'Publico'}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {room.maxPlayers - room.usersRooms.length}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {room.usersRooms.length}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export default RoomListTable;
