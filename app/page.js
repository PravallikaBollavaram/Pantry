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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Home() {
  const [item, setItem] = useState(''); // State for the input field
  const [items, setItems] = useState([]); // State for the list of items
  const [editingIndex, setEditingIndex] = useState(null); // State for the editing index, initial value of editingIndex is null

  const handleAddItem = () => { //handleAddItem adds a new item to the list or updates existing item
    if (item.trim() !== '') { //trim() is used to remove leading and trailing spaces from a string
      const lowerCasedItem = item.trim().toLowerCase(); // trims and converts the string to lower case
      // Check if the item already exists in a case-insensitive manner
      //findIndex() is used to return the first index of first matching item else return -1.
      //i => i.name.toLowerCase() is a callback function. i->paramter representing indi item from array of items, i.name ->access name property of item i
      const existingItemIndex = items.findIndex(i => i.name.toLowerCase() === lowerCasedItem);
      if (existingItemIndex !== -1) {
        // Item exists, update the quantity and stores in updatedItems
        // map - takes each item and return a new array
        //cuurentitem - item in the array, index- index of current item
        //index(index of current item)===exisitngindex(index of item that needs to be updated)
        //conditional operator : condition ? Returns if true : return if False
        //if condition is false, it return the currentitem that is being iterated.
        //if condition is true, ...curentITem(item that u need to update) , increment the quantity by 1
        const updatedItems = items.map((currentItem, index) =>
          index === existingItemIndex ? { ...currentItem, quantity: currentItem.quantity + 1 } : currentItem
        );
        setItems(updatedItems); //updating the function with new list of items and quantity
      } else {
        // Item does not exist, add a new item
        const newItem = { name: item.trim(), quantity: 1 }; // Store item name as entered
        if (editingIndex !== null) {
          // Update the existing item
          const updatedItems = items.map((currentItem, index) =>
            index === editingIndex ? newItem : currentItem
          );
          setItems(updatedItems);
          setEditingIndex(null); // Reset editing index
        } else {
          // Add a new item
          setItems([...items, newItem]);
        }
      }
      setItem(''); // Clear the input field
    }
  };

  const handleEditItem = (index) => {
    setItem(items[index].name); // Set the input field value to the item name being edited
    setEditingIndex(index); // Set the index of the item being edited
  };

  const handleDeleteItem = (index) => {
    // Remove item by index
    const updatedItems = items.filter((_, i) => i !== index); //filters out all the indexes nd stores in a new array expect the index of that item which we want to delete
    setItems(updatedItems);
    if (editingIndex === index) { //as we are storing indexes in editingIndex, we have to also to delete from that v ariable
      setEditingIndex(null); // Reset editing index if the edited item was deleted
      setItem(''); // Clear the input field
    }
  };

  const incrementQuantity = (index) => {
    const updatedItems = items.map((currentItem, i) =>
      i === index ? { ...currentItem, quantity: currentItem.quantity + 1 } : currentItem
    );
    setItems(updatedItems);
  };

  const decrementQuantity = (index) => {
    const updatedItems = items.map((currentItem, i) =>
      i === index && currentItem.quantity > 1 ? { ...currentItem, quantity: currentItem.quantity - 1 } : currentItem
    );
    setItems(updatedItems);
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
          Pantry Items:
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
              <ListItemText primary={item.name} />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  aria-label="remove"
                  onClick={() => decrementQuantity(index)}
                  disabled={item.quantity <= 1} // Disable if quantity is 1
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                <IconButton
                  aria-label="add"
                  onClick={() => incrementQuantity(index)}
                >
                  <AddIcon />
                </IconButton>
              </Box>
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


