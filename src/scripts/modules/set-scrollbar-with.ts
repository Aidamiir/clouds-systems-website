export const setScrollbarWidth = () => {
	const value = (innerWidth - document.body.clientWidth) / 16 + 'rem';
	document.documentElement.style.setProperty('--cs-scrollbar-width', value);
};
