import { writeFileSync } from 'fs'; 
import { finished } from 'stream';

let student = {
    name : 'name',
    id: 12
}

const name = document.querySelector('#name')

name.addEventListener('change', (e) => {
    let res = e.target.value
    student.name = res
})

const id = document.querySelector('#identification')

id.addEventListener('change', (e) => {
    let id = e.target.value
    student.id = id
})

const sub = document.querySelector('#submit')

sub.addEventListener('submit', (e) => {
    let data = JSON.stringify(student);
    writeFileSync('file.json', data, finished);
    console.log('success')
})