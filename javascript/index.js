const postUrl = 'https://my-json-server.typicode.com/VajihuddinAhmed/Job_Board_API/postjobs';

document.querySelector("#login").addEventListener('click', () => {
    location.assign(`/html/login.html`)
})

const subscribe = document.querySelector('#subscribe')
subscribe.addEventListener('click', () => {
    const check = document.getElementById('subscribeInput').value 
    let data = {
        subscribeEmail: check
    }

    fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));

    document.getElementById('subscribeInput').value = ''

})