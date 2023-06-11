import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Fuse from "fuse.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function VisitorData() {
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:8000");
      const data = await response.json();
      setItems(data);
      setSearchResults(data); // Initialize search results with all items
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSearch = () => {
    const fuse = new Fuse(items, {
      keys: [searchBy],
      threshold: 0.3,
      includeMatches: true,
    });

    const results = fuse.search(query);
    const filteredItems = results.map((result) => result.item);
    setSearchResults(filteredItems);
  };
  return (
    <>
      <Box height={100} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>Data fetched from DB</h1>
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ marginBottom: "16px" }}
          />
          <Select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            style={{ marginLeft: "8px", marginRight: "8px" }}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="age">Age</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            style={{ marginLeft: "8px", padding: "15px" }}
          >
            Search
          </Button>
          <Table style={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default VisitorData;
