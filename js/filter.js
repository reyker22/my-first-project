
    const filterBox = document.querySelectorAll('.gallery__item');

    const gallery_btns = document.querySelectorAll('.gallery__btn');

    const filter = document.querySelectorAll('.gallery__filter');

    document.querySelector('.gallery__list').addEventListener('click', event => {
        if(event.target.tagName !== 'BUTTON') return false;

        let filterClass = event.target.dataset['f'];

        filterBox.forEach(elem =>{
            elem.classList.remove('hide');
            if(!elem.classList.contains(filterClass) && filterClass!== 'category-all'){
                elem.classList.add('hide');
            }
        });
        
    });


   