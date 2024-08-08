import { particlesConfigure } from '@scripts/modules/particles-configure.ts';
import { SolutionsSwiperConfigure } from '@scripts/modules/solutions-swiper-configure.ts';
import { ShowMore } from '@scripts/modules/show-more-configure.ts';

document.addEventListener('DOMContentLoaded', () => {
	particlesConfigure();
	SolutionsSwiperConfigure();
	new ShowMore('key-skills-show-more', '.key-skill-item')
	new ShowMore('completed-projects-show-more', '.completed-project-item')
});
