import './Table.scss'
import MUITable from '@mui/material/Table'; // Rename the imported Table component
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = () => { // Rename the Table component to CustomTable
  const cryptoTransactions = [
    { id: 1, date: '2022-04-01', type: 'Buy', currency: 'Bitcoin', amount: 0.1, price: 60000, total: 6000 },
    { id: 2, date: '2022-04-02', type: 'Sell', currency: 'Ethereum', amount: 1, price: 3000, total: 3000 },
    { id: 3, date: '2022-04-03', type: 'Buy', currency: 'Bitcoin', amount: 0.05, price: 55000, total: 2750 },
    { id: 4, date: '2022-04-04', type: 'Buy', currency: 'Bitcoin', amount: 0.2, price: 58000, total: 11600 },
    { id: 5, date: '2022-04-05', type: 'Sell', currency: 'Bitcoin', amount: 0.15, price: 62000, total: 9300 },
  ];
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }} aria-label="crypto transactions table"> 
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptoTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
              <TableCell align="right">{transaction.amount}</TableCell>
              <TableCell align="right">{transaction.price}</TableCell>
              <TableCell align="right">{transaction.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  )
}

export default Table;
