// let userdata = (key, value) => {
//     localStorage.setItem(key, value)
// }
const formSubmit = document.querySelector("#submit")

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = e.target.elements.name.value.trim()
    const Id = e.target.elements.Id.value.trim()
    const email = e.target.elements.email.value.trim()
    const code = e.target.elements.code.value.trim()

    // userdata('Name:', userName)

    localStorage.setItem('Name:', JSON.stringify(userName))
    localStorage.setItem('ID:', JSON.stringify(Id))
    localStorage.setItem('Email:', JSON.stringify(email))
    localStorage.setItem('Code:', JSON.stringify(code)) 

    location.assign(`/html/tests.html`)
})