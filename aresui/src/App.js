import logo from './logo.svg';
import './App.css';
import ImageUpload from './Components/Fileupload';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


function App() {
  
  return (
    <div>
    <div class="grid">
  <div class="g-col-6">  
    <div className="App">
      <ImageUpload/>
    </div>
  </div>
</div>

  </div>
  );
}

export default App;


// function createData(name, element) {
//   return { name, element};
// }

// const rows = [
//   createData('goethite', 'FeOOH'),
//   createData('Quartz', 'SiO2'),
//   createData('K-feldspar', 'KAlSi3O8'),
//   createData('Albite', 'NaAlSi3O8'),
//   createData('Calcium Aluminosilicate', 'CaAl2Si2O8'),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name of Mineral</TableCell>
//             <TableCell align="right">Elements/Compunds</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.element}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
