const url = 'http://localhost:5500/api'

//função que pega usuarios
function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.error(error))
}

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser){
  fetch(url, {
    method:"POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }

    })
    .then(response => response.json())
    .then(data => alert.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Olivia Zars",
  avatar:"http://lirempixel.com/400/200",
  city: "Ouro preto"
}

addUser(newUser)
getUser()
getUsers()
