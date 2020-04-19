import template from './main.hbs';

const templateGenerate = (filtrData) => {
    const projects = document.querySelector('#projects');

    projects.innerHTML = template(filtrData);

    if (filtrData['project-h'] == 'Контакты') {
        const description = document.querySelector('.projects__description');
      
        description.style.width = '100%';
    } else if (filtrData['project-h'] == 'Обо мне') {
        const img = document.querySelector('.projects__main-icon img'),
            source = document.querySelector('.projects__main-icon source');

        img.style.width = '60%';
        source.style.width = '60%';
        img.style.marginTop = '2%';
        source.style.marginTop = '2%';
    } 
}

const menuOpen = () => {
    const menuBtn = document.querySelector('#menuTop');
    const body = document.querySelector('body');

    if (menuBtn != null) {
        body.addEventListener('click', (event) => {
            const menuList = document.querySelector('.projects__menu-list');
            let displayList = menuList.style.display;

            if (event.target == menuBtn) {
                if (displayList == 'block') {
                    menuList.style.display = 'none';
                } else {
                    menuList.style.display = 'block';
                }
            } else {
                if (displayList == 'block') {
                    menuList.style.display = 'none';
                }
            }
        })
    }
}

const sliderChange = (sectionMain, section) => {
    let projectsScrollUp = document.querySelector('.projects__scroll_up'),
        projectsScrollDown = document.querySelector('.projects__scroll_down');

    if (projectsScrollUp && projectsScrollDown) {
        projectsScrollUp.addEventListener('click', () => {
            let num = parseInt(section.replace(/[^\d]/g, ''));

            if (num < 4) {
                let sectionNext = sectionMain + ++num;
                loadProjects(sectionNext).then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange(sectionMain, sectionNext));
            } else {
                let sectionNext = sectionMain + 1;
                loadProjects(sectionNext).then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange(sectionMain, sectionNext));
            }
        });

        projectsScrollDown.addEventListener('click', () => {
            let num = parseInt(section.replace(/[^\d]/g, ''));

            if (num != 1) {
                let sectionNext = sectionMain + --num;
                loadProjects(sectionNext).then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange(sectionMain, sectionNext));
            } else {
                let sectionNext = sectionMain + (num + 3);
                loadProjects(sectionNext).then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange(sectionMain, sectionNext));
            }
        });
    }
}

const menuClick = () => {
    const body = document.querySelector('body');

    if (body) {
        body.addEventListener('click', (event) => {
            let bigMenu = document.querySelector('#menuPage'),
                projectsBlock = document.querySelector('#projects');

            if (event.target.innerText == 'Мои проекты' || event.target.alt == 'Мои проекты' && classSearch(event.target.className)) {
                if (bigMenu) {
                    bigMenu.style.display = 'none';
                }
                if (projectsBlock) {
                    projectsBlock.style.display = 'flex';
                }
                loadProjects('project1').then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange('project', 'project1'));
            } else if (event.target.innerText == 'Обо мне' || event.target.alt == 'Обо мне' && classSearch(event.target.className)) {
                if (bigMenu) {
                    bigMenu.style.display = 'none';
                }
                if (projectsBlock) {
                    projectsBlock.style.display = 'flex';
                }
                loadProjects('about1').then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange('about', 'about1'));
            } else if (event.target.innerText == 'Контакты' || event.target.alt == 'Контакты' && classSearch(event.target.className)) {
                if (bigMenu) {
                    bigMenu.style.display = 'none';
                }
                if (projectsBlock) {
                    projectsBlock.style.display = 'flex';
                }
                loadProjects('contacts').then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick());
            } else if (event.target.innerText == 'Главное меню' && classSearch(event.target.className)) {
                if (projectsBlock) {
                    projectsBlock.style.display = 'none';
                }
                if (bigMenu) {
                    bigMenu.style.display = 'flex';
                }
            }
        });
    }
}

const classSearch = (full) => {
    const chunk = 'menu__target';

    if (full.toUpperCase().indexOf(chunk.toUpperCase()) >= 0) {
        return true;
    }

    return false;
}

const loadProjects = (object) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'dist/data/data.json');
        xhr.responseType = 'json';

        xhr.onload = function() {
            if (this.status == 200) {
                let data = this.response,
                    filtrData;

                for (let item in data) {
                    if (item == object) {
                        filtrData = data[item];
                    }
                }
                resolve(filtrData);
            } else {
                let error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error('Network Error'));
        };

        xhr.send();
    });
}

export {
    menuOpen,
    menuClick
};
