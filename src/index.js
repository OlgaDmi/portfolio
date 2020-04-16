
import './css/style.css';
import {
    loadProjects,
    menuOpen,
    menuClick,
    templateGenerate
} from './module1';

menuOpen();
menuClick();

//  loadProjects('contacts').then(filtrData => templateGenerate(filtrData)).then(() => menuOpen()).then(() => menuClick());