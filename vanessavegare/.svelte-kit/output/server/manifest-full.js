export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-384x384.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/1-1.webp","images/2-2.webp","images/3-1.webp","images/4-1.webp","images/5-1.webp","images/6-1.webp","images/7-1.webp","images/8-1.webp","logoCapre.PNG","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"text/xml",".webp":"image/webp",".PNG":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.DW_7SvPI.js","app":"_app/immutable/entry/app.BiOhHIuo.js","imports":["_app/immutable/entry/start.DW_7SvPI.js","_app/immutable/chunks/entry.C8q4vGFc.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CUt9P6Im.js","_app/immutable/entry/app.BiOhHIuo.js","_app/immutable/chunks/scheduler.D9xsQs6S.js","_app/immutable/chunks/index.CtFlYCUQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/listings",
				pattern: /^\/listings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
