import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import util from 'util';
import {set} from "mobx";

const columns = [
    { id: 'TripID', label: 'TripID', minWidth: 170 },
    { id: 'ToalTime', label: 'TotalTime', minWidth: 100 },
    {
        id: 'StartTime',
        label: 'Start Time',
        minWidth: 70,
        align: 'right',
        format: value => value.toLocaleString(),
    },
    {
        id: 'EndTime',
        label: 'Arival Time',
        minWidth: 70,
        align: 'right',
        format: value => value.toLocaleString(),
    },
    {
        id: 'Transfers',
        label: 'Transfers',
        minWidth: 70,
        align: 'right',
        format: value => value.toFixed(2),
    },
    {
        id: 'TotalPrice',
        label: 'Price',
        minWidth: 70,
        align: 'right',
        format: value => value.toFixed(2),
    },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    let rows =[];
    let route={};
    let dict=[];

    const [contentJson, setContentJson] = React.useState({});
    if(typeof props.routes !== 'undefined' && props.routes !== contentJson && props.routes !== [] && props.routes !== {} && props.routes != null && props.routes.length != null && props.routes.length > 0){

        rows = [...props.routes]
        /*
        //console.log("INFO: "+" Status of RouteOverviewTable: "+ typeof contentJson);
        // convert multiple entrys to List of arrays with just values
        for (route in props.routes){

            rows.push(Object.values(props.routes[route]));

        }
        */

        console.log("INFO: "+" Status of RouteOverviewTable: "+ util.inspect(rows, false, null, true ));

    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
