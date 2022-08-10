let raitinvalue = 0;

function catchValue(e) {
    const raiting1 = document.querySelector('#raiting1');
    const raiting2 = document.querySelector('#raiting2');
    const raiting3 = document.querySelector('#raiting3');
    const raiting4 = document.querySelector('#raiting4');
    const raiting5 = document.querySelector('#raiting5');
    raitinvalue=e;
    console.log(raitinvalue);
    if(raitinvalue==1){
        raiting1.setAttribute('class', 'number-selected');
    }
    if(raitinvalue==2){
        raiting1.setAttribute('class', 'number-selected-other');
        raiting2.setAttribute('class', 'number-selected');
    }
    if(raitinvalue==3){
        raiting1.setAttribute('class', 'number-selected-other');
        raiting2.setAttribute('class', 'number-selected-other');
        raiting3.setAttribute('class', 'number-selected');
    }
    if(raitinvalue==4){
        raiting1.setAttribute('class', 'number-selected-other');
        raiting2.setAttribute('class', 'number-selected-other');
        raiting3.setAttribute('class', 'number-selected-other');
        raiting4.setAttribute('class', 'number-selected');
    }
    if(raitinvalue==5){
        raiting1.setAttribute('class', 'number-selected-other');
        raiting2.setAttribute('class', 'number-selected-other');
        raiting3.setAttribute('class', 'number-selected-other');
        raiting4.setAttribute('class', 'number-selected-other');
        raiting5.setAttribute('class', 'number-selected');
    }
}

function sendValue() {
    if(raitinvalue!=0){
    const raitingCard = document.querySelector('#raiting-card');
    const raitingCardSend = document.querySelector('#raiting-card-send');
    const resumeRaiting = document.querySelector('.resume-raiting');
    raitingCard.setAttribute('class','inactive');
    raitingCardSend.classList.remove('inactive');
    raitingCardSend.classList.add('raiting-card');
    resumeRaiting.innerHTML = `You selected ${raitinvalue} out of 5`;
    }
}