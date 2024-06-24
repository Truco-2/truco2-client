import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    styled,
    tableCellClasses,
} from '@mui/material';

import { IRoomList } from 'types/Room';

import Logo from 'assets/Logo';

interface IPlayerListTableProps {
    room: IRoomList;
}

export const StyledTableContainer = styled(TableContainer)({
    borderRadius: '2.625rem',
});

export const StyledTableRow = styled(TableRow)({
    backgroundColor: '#FE6B01',
    border: '1px solid #1C1C1C',
});

export const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        color: '#1C1C1C',
        fontWeight: 700,
        fontSize: 15,
        border: 'none',
    },
    [`&.${tableCellClasses.body}`]: {
        color: '#1C1C1C',
        fontWeight: 400,
        fontSize: 20,
        border: 'none',
    },
});

const PlayerListTable: React.FC<IPlayerListTableProps> = ({ room }) => {
    return (
        <StyledTableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">Foto</StyledTableCell>
                        <StyledTableCell>Jogador</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {room.usersRooms.map((user, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center">
                                <Logo height="20" width="20" />
                            </StyledTableCell>
                            <StyledTableCell>{user.user.name}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export default PlayerListTable;
