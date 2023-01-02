# Assignment 2 - Web API.
​
Name: [Anthony O'Keeffe]
​
## Features.
​
 + Feature 1 - Attempted Sign Up and Log In
​
## Installation Requirements
​
N/A
​
## API Configuration
​
```bat
NODE_ENV=development
PORT=8080
HOST=
secret=YourJWTSecret
```
​
​
## API Design
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 

| /api/movies |Gets a list of movies 
| /api/movies/{movieid} | Get a Movie 
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie 

| /api/users | Gets a list of users | Create a new user or Authenticate a user
| /api/movies/{userid} | Get a User 
| /api/movies/{username}/favourites | Add a favourite movie for a user | Get favorite movies

| /api/genres | Gets a list of genres
​
## Security and Authentication

N/A
​
## Integrating with React App
​
~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
​
~~~
​
## Extra features
​
N/A
​
## Independent learning.
​
N/A