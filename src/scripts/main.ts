import LazyLoad from 'vanilla-lazyload'

import { BurgerMenuConfigure } from '@scripts/modules/burger-menu-configure'
import { inputConfigure } from '@scripts/modules/input-configure'
import { PopupConfigure } from '@scripts/modules/popup-configure'
import { setScrollbarWidth } from '@scripts/modules/set-scrollbar-with'
import { DynamicAdaptive } from './libs/dynamic-adapt'

document.addEventListener('DOMContentLoaded', () => {
	const popupConfigure = new PopupConfigure();

	setScrollbarWidth();
	new DynamicAdaptive('max');
	new BurgerMenuConfigure(popupConfigure.toggleBodyLock.bind(popupConfigure));
	new LazyLoad();
	inputConfigure();
});

window.onload = () => document.documentElement.classList.add('loaded');
