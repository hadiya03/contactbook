import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>phone no</TableCell>
                        <TableCell>E-mail</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Button variant="contained" color='secondary'>DELETE</Button>
                            <br></br><br></br>
                            <Button variant="contained" color='secondary' >UPDATE</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View