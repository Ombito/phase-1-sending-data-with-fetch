
const submitData = () => {

    const userData = {
        name: "Steve",
        email: "steve@steve.com",
    }
    fetch("http://localhost:3000/users", {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        Accept: "application/json"
    },   
    body:JSON.stringify(userData)
})

.then(response => response.json())
.then(data => {
    let newData = document.createElement('p')
    newData.textContent = data.id
    body.appendChild(newData)


     console.log(data)
.catch(error => {
    let newParagraph = document.createElement('p')
    let errorMessage = 'Unauthorized Access'

    newParagraph.textContent = errorMessage
    body.appendChild(newParagraph)
    console.log(error)})
})
}
submitData()