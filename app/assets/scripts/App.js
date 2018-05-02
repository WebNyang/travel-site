import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeder from './modules/StickyHeader';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeder();
