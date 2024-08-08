export class ShowMore {
	private readonly button: HTMLElement | null;
	private items: HTMLElement[];
	private readonly visibleCount: number;
	private isExpanded: boolean;

	constructor(buttonId: string, itemSelector: string, visibleCount: number = 6) {
		this.button = document.getElementById(buttonId);
		this.items = Array.from(document.querySelectorAll(itemSelector)) as HTMLElement[];
		this.visibleCount = visibleCount;
		this.isExpanded = false;

		this.init();
	}

	private init(): void {
		if (this.button) {
			this.button.addEventListener('click', () => this.toggleItems());
			this.updateButtonText();
		}
	}

	private toggleItems(): void {
		this.isExpanded = !this.isExpanded;

		this.items.forEach((item, index) => {
			if (index >= this.visibleCount) {
				item.classList.toggle('hidden', !this.isExpanded);
			}
		});

		this.updateButtonText();
	}

	private updateButtonText(): void {
		if (this.button) {
			this.button.innerHTML = this.isExpanded ? 'Скрыть' : 'Показать еще';
		}
	}
}
