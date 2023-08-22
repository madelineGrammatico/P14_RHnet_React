import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import { DataGrid, GridColDef,  GridLogicOperator,  GridToolbar  } from '@mui/x-data-grid';

import styles from "./CurrentEmployees.module.css"
import { useSelector } from "react-redux";

export function CurrentEmployees(){
    const employees = useSelector((state) => state.employees)
    console.log(employees)
    const columns: GridColDef[] = [
        {
            field: 'firstName',
            headerName: 'First name',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'department',
            headerName: 'Department',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'dateOfBirth',
            headerName: 'Date of Birth',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'street',
            headerName: 'Street',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'state',
            headerName: 'State',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
        {
            field: 'zipCode',
            headerName: 'Zip Code',
            flex: 1,
            //   width: 150,
            // editable: true,
        },
      ];
      
    return(
        <>
            <nav className={styles['nav']}>
                <h1>Current Employees</h1>
                <Link to="/Home" >Home</Link>
            </nav>
            <main className={styles['main']}>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        autoHeight
                        rows={employees.employees}
                        columns={columns}
                        disableColumnFilter
                        disableColumnSelector
                        disableDensitySelector
                        disableColumnMenu
                        slots={
                            { toolbar: GridToolbar }
                        }
                        slotProps={{
                            toolbar: {
                                showQuickFilter: true,
                            },
                        }}
                        initialState={{
                            filter: {
                                filterModel: {
                                items: [],
                                quickFilterLogicOperator: GridLogicOperator.Or,
                                },
                            },
                            pagination: { paginationModel: { pageSize: 10 } },
                            }}
                        
                        
                        pageSizeOptions={[10, 25, 50, 100]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </main>
        </>
        
        
    )

}