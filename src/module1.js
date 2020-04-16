import template from './main.hbs';

const templateGenerate = (filtrData) => {
   const projects = document.querySelector('#projects');
   projects.innerHTML =  template(filtrData);

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

   if (menuBtn != null) {
     menuBtn.addEventListener('click', function() {
        const menuList = document.querySelector('.projects__menu-list');
        let displayList = menuList.style.display;
  
        if (displayList == 'block') {
           menuList.style.display = 'none';
        } else {
           menuList.style.display = 'block';
        }
      })
   }
}

const sliderChange = (section) => {
   let projectsScrollUp = document.querySelector('.projects__scroll_up'),
   projectsScrollDown = document.querySelector('.projects__scroll_down');

   if (projectsScrollUp && projectsScrollDown) {
      console.log(section);
   }
}

const menuClick = () => {
   const body = document.querySelector('body');

   if (body) {
      body.addEventListener('click', function(event) {
         let bigMenu = document.querySelector('#menuPage'),
         projectsBlock = document.querySelector('#projects');

         if (event.target.innerText == 'Мои проекты' && classSearch(event.target.className)) {
            if (bigMenu) {
               bigMenu.style.display = 'none';
            }
            if (projectsBlock) {
               projectsBlock.style.display = 'flex';
            }
            loadProjects('project1').then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange('project1'));
         } else if (event.target.innerText == 'Обо мне' && classSearch(event.target.className)) {
            if (bigMenu) {
               bigMenu.style.display = 'none';
            }
            if (projectsBlock) {
               projectsBlock.style.display = 'flex';
            }
            loadProjects('about').then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick()).then(() => sliderChange('about'));
         } else if (event.target.innerText == 'Контакты' && classSearch(event.target.className)) {
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
       var xhr = new XMLHttpRequest();

       xhr.open('GET', 'data/data.json');
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
   menuClick,
   loadProjects,
   templateGenerate
};
