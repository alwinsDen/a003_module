import init, * as wasm from './dist/rustwasm.js';

await init();

wasm.greet();
