/// <reference types="vite/client" />

declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

interface Window {
	paws?: {
		notifyParent?: (event: string) => void;
		on?: (
			event: string,
			callback: (...args: any[]) => void
		) => (() => void) | void;
	};
}
