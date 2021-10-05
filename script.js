document.querySelector('.chat-close').addEventListener('click', () => {
    document.querySelector('.top-chat').style.display = 'none'
    document.querySelector('.chat-show').style.display = 'block'

})
document.querySelector('.chat-show').addEventListener('click', () => {
    document.querySelector('.chat-show').style.display = 'none'
    document.querySelector('.top-chat').style.display = 'flex'
})

