

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D11myz4n.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CtFlYCUQ.js"];
export const stylesheets = ["_app/immutable/assets/0.CKWmQxyX.css"];
export const fonts = [];
