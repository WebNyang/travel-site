import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeder from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeder();
var modal = new Modal();
