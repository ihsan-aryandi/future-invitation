/*
    Collapsible
*/
const collapsibleElements = document.querySelectorAll('.faq-collapsible')

collapsibleElements.forEach(collapsibleElement => {
    const opener = collapsibleElement.querySelector('.opener')
    const answer = collapsibleElement.querySelector('.faq-answer')

    if (!opener) return

    opener.addEventListener('click', e => {
        if (answer.classList.contains('open')) {
            answer.classList.remove('open')
            answer.style.height = 0
            return
        }

        answer.style.height = `${answer.scrollHeight}px`
        answer.classList.add('open')
    })
})