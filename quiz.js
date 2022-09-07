const correctAnswer = ['A' , 'A' , 'A' , 'A' ];
const form = document.querySelector('.quiz-form');
const allScore = document.querySelector('.result');

form.addEventListener('submit' , e =>{
    e.preventDefault();

    const userAnswer = [form.q1.value , form.q2.value , form.q3.value , form.q4.value];
    let score = 0;
    userAnswer.forEach((answer , index) => {
        if(answer === correctAnswer[index]){
            score += 25;
        };
    });

    scrollTo(0,0);

    allScore.classList.remove('d-none');
    let output = 0;
    const timer = setInterval( () => {
        allScore.querySelector('span').textContent = ` ${output}% `;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    },10);

});