const BasketToggle = (props) => {
    const onClickToggle = (e) => {
        if (document.body.classList.contains('is__basket__open')) {
            document.body.classList.remove('is__basket__open');
        }
        else {
            document.body.classList.add('is__basket__open')
        }
    };
    
    document.addEventListener('click', (e) => {
        const closest = e.target.closest('.basket');
        const toggle = e.target.closest('.basket__toggle');
        const closeToggle = e.target.closest('.basket__item__remove');

        if (!closest && document.body.classList.contains('is__basket__open') && !toggle && !closeToggle) {
            document.body.classList.remove('is__basket__open');
        }
    });
    return props.children({onClickToggle})
}