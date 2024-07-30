// import { Box, Stack } from '@mui/material';


// const item = ['Tomato','Potato','Garlic','Ginger','Onion','Carrot',]
// export default function Home() {
//   return <Box
//     width="100vw"
//     height="100vh"
//     display={'flex'}
//     justifyContent={'center'}
//     alignItems={'center'}
//   >
//     <Stack width= "800px"  height= "600px">
      
//     </Stack>
//   </Box>

// }


"use client";//The "use client" directive is used in React to explicitly mark a component as a client component in environments where both server and client components are supported, such as in React 18 and beyond. This directive is necessary to differentiate between server-side rendering and client-side rendering.
import React, { useState } from 'react';
import { Box, TextField, Container, Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [item, setItem] = useState(''); // State for the input field
  const [items, setItems] = useState([]); // State for the list of items
  const [editingIndex, setEditingIndex] = useState(null); // State for the editing index

  const handleAddItem = () => {
    if (item.trim() !== '') {
      if (editingIndex !== null) {
        // Update the existing item
        const updatedItems = items.map((currentItem, index) =>
          index === editingIndex ? item : currentItem
        );
        setItems(updatedItems);
        setEditingIndex(null); // Reset editing index
      } else {
        // Add a new item
        setItems([...items, item]);
      }
      setItem(''); // Clear the input field after adding or updating the item
    }
  };

  const handleEditItem = (index) => {
    setItem(items[index]); // Set the input field value to the item being edited
    setEditingIndex(index); // Set the index of the item being edited
  };

  const handleDeleteItem = (index) => {
    // Remove item by index
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (editingIndex === index) {
      setEditingIndex(null); // Reset editing index if the edited item was deleted
      setItem(''); // Clear the input field
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Pantry Item Input
        </Typography>
        <TextField
          label="Enter pantry item"
          variant="outlined"
          fullWidth
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleAddItem}
        >
          {editingIndex !== null ? 'Update Item' : 'Add Item'}
        </Button>
        <List sx={{ marginTop: 2, width: '100%' }}>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemText primary={item} />
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditItem(index)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default App;
