let count = 0;

fetch('https://my-json-server.typicode.com/viquaruddinahmed/CompetitiveExamAPI/GRE')
    .then(response => response.json())
    .then(data => {
       generateTest(data)
    });


const generateTest = (data) => {
    console.log(data)
    const quest = document.querySelector('#question')
    createQuestions(data, 0)
    createAnswers(data, 0)
    console.log(data.length)  
    document.querySelector('#next').addEventListener('click', () => {
        let g1 = document.querySelector('input[name=answers]:checked').value;
        localStorage.setItem('firstAnswer', g1)
        count++

        if(count === 1) {
            document.querySelector('#question-number').textContent = "Q2)"
            quest.textContent = ''
            createQuestions(data, 1)
            createAnswers(data, 1)
            let g2 = document.querySelector('#hide').value;
            localStorage.setItem('secondAnswer', g2)
        }
        if(count === 2) {
            document.querySelector('#question-number').textContent = "Q3)"
            quest.textContent = ''
            createQuestions(data, 2)
            createAnswers(data, 2)
            let g3 = document.querySelector('#hide').value;
            localStorage.setItem('thirdAnswer', g3)
        }

        if(count === 3) {
            document.querySelector('#question-number').textContent = "Q4)"
            quest.textContent = ''
            createQuestions(data, 3)
            createAnswers(data, 3) 
        }

        if(count === 4) {
            document.querySelector('#question-number').textContent = "Q5)"
            quest.textContent = ''
            createQuestions(data, 4)
            createAnswers(data, 4)
        }

        if(count > data.length - 1) {
            document.querySelector('#next').textContent = "Finish"

        }

    })
}

let createQuestions = (data, i) => {
    const quest = document.querySelector('#question')
    const question = document.createElement('p')
    question.textContent = data[i].Question
    quest.appendChild(question)
}

let createAnswers = (data, i) => {
    if (data[i].hasOwnProperty('Option1')) {
        document.querySelector('#hide').style.display = "none";

        const answer = document.querySelector('#options')
        const answerOptions = document.querySelector('#option-answer')

        const options = document.createElement('INPUT')
        options.setAttribute('type', "radio")
        options.setAttribute('id', "opt1")
        options.setAttribute('name', "answers")
        options.setAttribute('value', data[i].Option1)
        answer.appendChild(options)
        const answerOpt1 = document.createElement('p')
        answerOpt1.setAttribute('id', "ans-opt1")
        answerOpt1.textContent = data[i].Option1
        answerOptions.appendChild(answerOpt1)

        const options2 = document.createElement('INPUT')
        options2.setAttribute('type', "radio")
        options2.setAttribute('id', "opt2")
        options2.setAttribute('name', "answers")
        options2.setAttribute('value', data[i].Option2)
        answer.appendChild(options2)
        const answerOpt2 = document.createElement('p')
        answerOpt2.setAttribute('id', "ans-opt2")
        answerOpt2.textContent = data[i].Option2
        answerOptions.appendChild(answerOpt2)

        const options3 = document.createElement('INPUT')
        options3.setAttribute('type', "radio")
        options3.setAttribute('id', "opt3")
        options3.setAttribute('name', "answers")
        options3.setAttribute('value', data[i].Option3)
        answer.appendChild(options3)
        const answerOpt3 = document.createElement('p')
        answerOpt3.setAttribute('id', "ans-opt3")
        answerOpt3.textContent = data[i].Option3
        answerOptions.appendChild(answerOpt3)

        const options4 = document.createElement('INPUT')
        options4.setAttribute('type', "radio")
        options4.setAttribute('id', "opt4")
        options4.setAttribute('name', "answers")
        options4.setAttribute('value', data[i].Option4)
        answer.appendChild(options4)
        const answerOpt4 = document.createElement('p')
        answerOpt4.setAttribute('id', "ans-opt4")
        answerOpt4.textContent = data[i].Option4
        answerOptions.appendChild(answerOpt4)
    } else {
        document.querySelector('#options').style.display = "none";
        document.querySelector('#option-answer').style.display = "none";
        document.querySelector('#hide').style.display = "block";
    }
}