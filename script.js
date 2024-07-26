const accordians = document.querySelectorAll('.accordian')

accordians.forEach((accordian) => {
    accordian.addEventListener('click', () => {
        const answerElement = accordian.querySelector('.answer')
        const icon = accordian.querySelector('.question img')

        answerElement.classList.toggle('active')

        if(answerElement.classList.contains('active')){
            icon.src = 'assets/images/icon-minus.svg'
        } else {
            icon.src = 'assets/images/icon-plus.svg'
        }
    })
})