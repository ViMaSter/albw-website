/* tslint:disable */
/* eslint-disable */
/**
*/
export class Cartridge {
  free(): void;
/**
* @param {any} jsettings
* @param {number} seed
*/
  constructor(jsettings: any, seed: number);
/**
* @returns {any}
*/
  get_trash_item_names(): any;
/**
* @returns {any}
*/
  get_progression_item_names(): any;
/**
* @param {any} obtained_items_js
* @returns {any}
*/
  get_available_checks(obtained_items_js: any): any;
/**
* @returns {any}
*/
  get_plando(): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_cartridge_free: (a: number) => void;
  readonly cartridge_new: (a: number, b: number) => number;
  readonly cartridge_get_trash_item_names: (a: number) => number;
  readonly cartridge_get_progression_item_names: (a: number) => number;
  readonly cartridge_get_available_checks: (a: number, b: number) => number;
  readonly cartridge_get_plando: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
