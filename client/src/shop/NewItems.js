import React, { useState } from 'react';
import axios from 'axios';

const NewItems = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);

        axios.post('http://localhost:5000/users/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <table border="1">
            <tr>
            <td>Photo</td>
            <td>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
               onChange={handlePhoto}
            />
            </td>
            </tr>
            <tr>
            <td>name:</td>
            <td>
            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
               onChange={handleChange}
            />
            </td>
            </tr>
            <tr>
            <td>Birthday</td>
            <td>
            <input 
                type="date"
                name="birthdate"
                value={newUser.date}
                onChange={handleChange}
            />
            </td>
            </tr>
            <tr >

            <input 
                type="submit" value="submit"
            />
            </tr>
            </table>
        </form>
    );
}

export default NewItems;