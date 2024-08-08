import 'swiper/css'
import Swiper from 'swiper';

export const SolutionsSwiperConfigure = () => {
	const swiperContainer = document.getElementById('solutions-swiper');

	if (swiperContainer) {
		new Swiper(swiperContainer, {
			slidesPerView: 'auto',
			spaceBetween: 30,
		});
	}
}
