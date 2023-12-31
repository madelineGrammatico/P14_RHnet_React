
import Box from '@mui/material/Box';
import { DataGrid, GridColDef,  GridLogicOperator, GridToolbarQuickFilter  } from '@mui/x-data-grid';

import styles from "./CurrentEmployees.module.css"
import { useAppSelector} from "../../app/hooks/hooks"
import { Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'

export function CurrentEmployees(){
    const employees = useAppSelector((state) => state.employees)
    const columns: GridColDef[] = [
        {
            field: 'firstName',
            headerName: 'First name',
            flex: 1,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            flex: 1,
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            flex: 1,
        },
        {
            field: 'department',
            headerName: 'Department',
            flex: 1,
        },
        {
            field: 'dateOfBirth',
            headerName: 'Date of Birth',
            flex: 1,
        },
        {
            field: 'street',
            headerName: 'Street',
            flex: 1,
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
        },
        {
            field: 'state',
            headerName: 'State',
            flex: 1,
        },
        {
            field: 'zipCode',
            headerName: 'Zip Code',
            flex: 1,
        },
      ];
      
    return(
        <main className={styles['main']}>
            <header className={styles.header}>
                <Typography 
                    variant="h1" 
                    gutterBottom
                    
                >Current Employees</Typography>
                <Link 
                    to="/" 
                    underline="none" 
                    component={RouterLink} 
                    className="styles.link"
                >Home</Link>
            </header>
                
            
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        autoHeight
                        rows={employees.employees}
                        columns={columns}
                        slots={
                            { toolbar: GridToolbarQuickFilter}
                        }
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
                        disableRowSelectionOnClick
                    />
                </Box>

                
            </main>
    )

}