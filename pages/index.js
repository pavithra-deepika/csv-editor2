import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { papa } from "papaparse";
import Papa from "papaparse";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Stack from '@mui/material/Stack';
import { Box, MenuItem } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const App = () => {
  // This state will store the parsed data
  const [headerInput, setHeaderInput] = useState([]);
  const [data, setData] = useState([]);
  const [columArray, setColumArray] = useState([]);
  const [values, setValues] = useState([]);

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      console.log("ddddd", csv);
      const parsedData = csv?.data;

      const columnsArray = [];
      const valuesArray = [];
      csv.data.map((d) => {
        columnsArray.push(Object.keys(d));
        // console.log('colum', columnsArray)
        setColumArray(columnsArray[0]);
        console.log("colum", columArray);

        valuesArray.push(Object.values(d));
        // console.log('row', valuesArray)
        setValues(valuesArray);
        console.log("row", values);
      });
    };
    reader.readAsText(file);
  };
  useEffect(() => {}, [columArray, values, headerInput]);

  const handleHeaderFNChange = (event) => {
    setHeaderInput({ ...headerInput, FName: event.target.value });
  };
  const handleHeaderLNChange = (event) => {
    setHeaderInput({ ...headerInput, LName: event.target.value });
  };
  const handleHeaderEmailChange = (event) => {
    setHeaderInput({ ...headerInput, Email: event.target.value });
  };
  const handleHeaderPhoneChange = (event) => {
    setHeaderInput({ ...headerInput, Phone: event.target.value });
  };

  const handleFiishChange =(event) => {
    console.log(values)
  }
  return (
    <div>
      <Box sx={{ textAlign: "center", mt: 4, mb: 2 }}>
        <label htmlFor="csvInput" style={{ display: "block" }}>
          <h3> Browse CSV File </h3>
        </label>
        <Button
          sx={{ maxWidth: 250, maxHeight: 350, mt: 2, ml: 8 }}
          variant="outLined"
          component="label"
        >
          <input onChange={handleFileChange} id="csvInput" type="File" />
        </Button>

        <div>
          <Button
            size="small"
            variant="contained"
            onClick={handleParse}
            sx={{ mt: 2, ml:2 }}
          >
            Parse
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={handleFiishChange}
            sx={{ mt: 2, ml:2, }}
          >
            Finish
          </Button>
        </div>
        {columArray.length > 0 ? (
          <div
            style={{ marginTop: "3rem", marginLeft: "3rem", maxWidth: 1200 }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="header"
                        onChange={handleHeaderFNChange}
                        value={headerInput.FName}
                        sx={{ minWidth: 150, maxHeight: 50 }}
                      >
                        <MenuItem key="1" value="FName">
                          FirstName{" "}
                        </MenuItem>
                        <MenuItem key="2" value="LName">
                          LastName{" "}
                        </MenuItem>
                        <MenuItem key="3" value="Email">
                          Email{" "}
                        </MenuItem>
                        <MenuItem key="4" value="Phone">
                          Phone Number{" "}
                        </MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="header"
                        onChange={handleHeaderLNChange}
                        value={headerInput.LName}
                        sx={{ minWidth: 150, maxHeight: 50 }}
                      >
                        <MenuItem key="1" value="FName">
                          FirstName{" "}
                        </MenuItem>
                        <MenuItem key="2" value="LName">
                          LastName{" "}
                        </MenuItem>
                        <MenuItem key="3" value="Email">
                          Email{" "}
                        </MenuItem>
                        <MenuItem key="4" value="Phone">
                          Phone Number{" "}
                        </MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="header"
                        onChange={handleHeaderEmailChange}
                        value={headerInput.Email}
                        sx={{ minWidth: 150, maxHeight: 50 }}
                      >
                        <MenuItem key="1" value="FName">
                          FirstName{" "}
                        </MenuItem>
                        <MenuItem key="2" value="LName">
                          LastName{" "}
                        </MenuItem>
                        <MenuItem key="3" value="Email">
                          Email{" "}
                        </MenuItem>
                        <MenuItem key="4" value="Phone">
                          Phone Number{" "}
                        </MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="header"
                        onChange={handleHeaderPhoneChange}
                        value={headerInput.Phone}
                        sx={{ minWidth: 150, maxHeight: 50 }}
                      >
                        <MenuItem key="1" value="FName">
                          FirstName{" "}
                        </MenuItem>
                        <MenuItem key="2" value="LName">
                          LastName{" "}
                        </MenuItem>
                        <MenuItem key="3" value="Email">
                          Email{" "}
                        </MenuItem>
                        <MenuItem key="4" value="Phone">
                          Phone Number{" "}
                        </MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ ml: 2 }}>
                  {values?.map((value, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {value.map((item, index) => (
                        <TableCell align="left">{item}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};

export default App;
