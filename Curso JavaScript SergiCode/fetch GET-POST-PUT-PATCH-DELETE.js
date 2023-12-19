// https://jsonplaceholder.typicode.com/
/*
/posts	100 posts
/comments	500 comments
/albums	100 albums
/photos	5000 photos
/todos	200 todos
/users	10 users
*/

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))


// Para no dejar la url en duro

// GET : Pedir Información

let url = 'https://jsonplaceholder.typicode.com'
let query = 'comments?postId=1'

fetch(`${url}/${query}`)
      .then(response => response.json())
      .then(json => console.log(json))

// POST : Enviar Información

let requestBody = {
    title: 'Curso Java Script',
    body: 'Curso dictado por Sergie Code',
    userId: 1,
  }

fetch(`${url}/posts`, {
    method : 'POST',
    headers : {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body : JSON.stringify(requestBody) // usamos stringify para parsear de JSON a String
})
      .then(response => response.json())
      .then(json => console.log(json))

// PUT : modificar

let posteo = 5
let requestBody2 = {
    id: 3,
    title: 'Curso Java Script',
    body: 'Curso dictado por Sergie Code',
    userId: 1,
  }

fetch(`${url}/posts/${posteo}`, {
    method : 'PUT',
    headers : {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body : JSON.stringify(requestBody2) // usamos stringify para parsear de JSON a String
})
      .then(response => response.json())
      .then(json => console.log(json))

// PATCH : cambiar solo una parte 

let posteo3 = 10
let requestBody3 = {
    title: 'Curso Java Script x Sergie Code'
  }

fetch(`${url}/posts/${posteo3}`, {
    method : 'PATCH',
    headers : {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body : JSON.stringify(requestBody3) // usamos stringify para parsear de JSON a String
})
      .then(response => response.json())
      .then(json => console.log(json))

// DELETE : Borrar

let posteo4 = 50
fetch(`${url}/posts/${posteo4}`, {
    method : 'DELETE',
})