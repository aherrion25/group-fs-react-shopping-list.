import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import Container from '@mui/material/Container';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';



function App() {
    const [shoppingList, setShoppingList] = useState([]);

    const [itemName, setItemName] = useState('');
    const [itemQuantity, SetItemQuantity] = useState('')


    // GET 
    const fetchList = () => {
        axios({
            method: 'GET',
            url: '/list'
        }).then(response => {
            setShoppingList(response.data)
        }).catch(error => {
            console.log(error);
            alert('Something is broken')
        })
    }

//POST
    const addItem = (event) =>{
        event.preventDefault();
        console.log('adding Item',itemName, itemQuantity);
        axios({
            method: 'POST',
            url: '/list',
            data:{
                name: itemName,
                quantity: itemQuantity,
            }
        }).then(response =>{
            setItemName();
            setItemQuantity();
            fetchList();
        }).catch(error =>{
            console.log(error);
            alert('Something went wrong in POST')
            return;
        });
    }

    


    //PUT


    //DELETE



    return (
        <div className="App">
            <Header />
            <Container maxWidth='md'>
                <form onSubmit={addItem}>
                    <lable htmlFor="name">Name:</lable>
                    <TextField fullWidth size="small" required id="name"
                                value={itemName} onChange={(event) => setItemName(event.target.value)} />
                <br />
                <br />
                    <lable htmlFor="quantity">Quantity:</lable>
                    <TextField fullWidth size="small" required id="quantity"
                                value={itemQuantity}  onChange={(event) => SetItemQuantity(event.target.value) } />
                <br />
                <br />
                    <Button variant="contained" color="secondary" type="submit">Add New Item</Button>
                </form>

            </Container>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;

