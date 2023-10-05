const botao = document.getElementById('button')

const final = document.getElementById('final')
const great = document.getElementById('great')
const percentage = document.getElementById('percentage')

const reaction = document.getElementById('reactionscore')
const memory = document.getElementById('memoryscore')
const verbal = document.getElementById('verbalscore')
const visual = document.getElementById('visualscore')

botao.addEventListener("click", () => {
    final.innerHTML = '76'
    great.innerHTML = 'Great'
    percentage.innerHTML = 'You scored higher than 65% of the people who have taken these tests.'
    reaction.innerHTML = '80'
    memory.innerHTML = '92'
    verbal.innerHTML = '61'
    visual.innerHTML = '72'
});