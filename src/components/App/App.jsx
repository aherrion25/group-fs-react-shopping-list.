import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    

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


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
