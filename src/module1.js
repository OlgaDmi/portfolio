  
 const menuOpen = () => {
    const menuBtn = document.querySelector('#menu');

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
 
 export {
   menuOpen
};
