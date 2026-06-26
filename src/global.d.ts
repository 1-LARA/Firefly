declare global {
	interface HTMLElementTagNameMap {
		"table-of-contents": HTMLElement & {
			init?: () => void;
		};
	}
}
	interface Window {
		// biome-ignore lint/suspicious/noExplicitAny: External library
		swup: any;
		spineModelInitialized?: boolean;
		floatingTOCListenersInitialized?: boolean;
		// biome-ignore lint/suspicious/noExplicitAny: External library
		spinePlayerInstance?: any;
		pagefind: {
			search: (query: string) => Promise<{
				results: Array<{
					data: () => Promise<SearchResult>;
				}>;
			}>;
		};
	}