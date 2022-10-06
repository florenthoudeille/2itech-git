import { header } from '../component/header.js';
import { homeComponent } from '../component/homeComponent.js';
import { section } from '../component/section.js';
import { productComponent } from '../component/productComponent.js';
import { cardComponent } from '../component/cardComponent.js';


export const router = {
    
    header : header,
    section : section,
    Home : homeComponent,
    Products : productComponent,
    card : cardComponent,
};
