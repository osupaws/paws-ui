import type { InjectionKey, Ref } from "vue";

export interface PawsShellState {
	theme: "light" | "dark";
	mode: "lazer" | "stable" | "unknown";
	isFocused: boolean;
}

/**
 * Injection key to retrieve the Paws Shell state from any child component.
 * @example
 * const shellState = inject(PawsShellStateKey);
 * if (shellState) {
 *   console.log(shellState.value.theme);
 * }
 */
export const PawsShellStateKey: InjectionKey<Ref<PawsShellState>> =
	Symbol("PawsShellState");
