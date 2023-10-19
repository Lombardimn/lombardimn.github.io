import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, e as renderHead, f as renderSlot } from './chunk.e2ad2317.js';
/* empty css                *//* empty css                */
const iconPaths = {
  "terminal-window": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
  trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
  strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
  "paper-plane-tilt": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  "arrow-right": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
  "arrow-left": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
  code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
  "microphone-stage": `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
  "pencil-line": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
  "rocket-launch": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  "moon-stars": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  "twitter-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>`,
  "codepen-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
  "github-logo": `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
  "twitch-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
  "youtube-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
  "dribbble-logo": `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
  "discord-logo": `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
  "linkedin-logo": `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  "instagram-logo": `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  "tiktok-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`,
  change: `<path d="M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"></path>`,
  monitor: `<path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path>`
};

const $$Astro$7 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentcolor",
    gradient,
    icon,
    size
  } = Astro2.props;
  const iconPath = iconPaths[icon];
  const attrs = {};
  if (size)
    attrs.style = { "--size": size };
  const gradientId = "icon-gradient-" + Math.round(Math.random() * 1e13).toString(36);
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true"${addAttribute(gradient ? `url(#${gradientId})` : color, "stroke")}${addAttribute(gradient ? `url(#${gradientId})` : color, "fill")}${spreadAttributes(attrs, "attrs", { "class": "astro-rpmnkggn" })} data-astro-cid-rpmnkggn><g data-astro-cid-rpmnkggn>${unescapeHTML(iconPath)}</g>${gradient && renderTemplate`<linearGradient${addAttribute(gradientId, "id")} x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" data-astro-cid-rpmnkggn><stop stop-color="var(--gradient-stop-1)" data-astro-cid-rpmnkggn></stop><stop offset=".5" stop-color="var(--gradient-stop-2)" data-astro-cid-rpmnkggn></stop><stop offset="1" stop-color="var(--gradient-stop-3)" data-astro-cid-rpmnkggn></stop></linearGradient>`}</svg>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/globals/Icon.astro", void 0);

const $$Astro$6 = createAstro();
const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-dwl4onjj><div class="group" data-astro-cid-dwl4onjj><p data-astro-cid-dwl4onjj>
Designed & Developed with
<a href="https://astro.build/" data-astro-cid-dwl4onjj>
Astro
</a>${renderComponent($$result, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.2em", "data-astro-cid-dwl4onjj": true })}</p><p data-astro-cid-dwl4onjj>&copy; ${currentYear} Lombardi Matias</p></div><p class="socials" data-astro-cid-dwl4onjj><a href="https://github.com/Lombardimn" data-astro-cid-dwl4onjj>GitHub</a><a href="https://linkedin.com/in/mnlombardi/" data-astro-cid-dwl4onjj>LinkedIn</a><a href="https://www.instagram.com/lombardimn/" data-astro-cid-dwl4onjj>Instagram</a></p></footer>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/footer/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MainHead;
  const {
    title = "Matias Lombardi: Personal Site",
    description = "The personal site of Matias Lombardi"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<meta charset="UTF-8"><meta name="description" property="og:description"', '><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", `</title><link rel="icon" href="/assets/icons/logo2.png" type="image/x-icon" sizes="144x144"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap" rel="stylesheet"><script>
    /**
     * Este c\xF3digo es en l\xEDnea dentro de la cabecera para hacer el modo oscuro instant\xE1neo y de bloqueo.
     */ 
    const getThemePreference = () =>{
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')){
            return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    const isDark = getThemePreference() === 'dark';
    document.documentElement.classList[isDark ? 'add' : 'remove']('theme-dark');

    if (typeof localStorage !== 'undefined') {
        /** Observamos el elemento del documento y mantenemos la preferencia del usuario cuando cambia. */
        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('theme-dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        observer.observe(document.documentElement, {
            attributes: true, 
            attributeFilter: ['class']
        })
    }
<\/script>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title);
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/head/MainHead.astro", void 0);

const $$Astro$4 = createAstro();
const $$Toggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Toggle;
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-zimxxk3z": true }, { "default": () => renderTemplate`${maybeRenderHead()}<button data-astro-cid-zimxxk3z><span class="sr-only" data-astro-cid-zimxxk3z>Dark Theme</span><span class="icon light" data-astro-cid-zimxxk3z>${renderComponent($$result, "Icon", $$Icon, { "icon": "sun", "data-astro-cid-zimxxk3z": true })}</span><span class="icon dark" data-astro-cid-zimxxk3z>${renderComponent($$result, "Icon", $$Icon, { "icon": "moon-stars", "data-astro-cid-zimxxk3z": true })}</span></button>` })}`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/navbar/Toggle.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const textLinks = [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/projects/" },
    { label: "Sobre M\xED", href: "/about/" }
  ];
  const iconLinks = [
    { label: "GitHub", href: "https://github.com/Lombardimn", icon: "github-logo" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mnlombardi/", icon: "linkedin-logo" },
    { label: "Instagram", href: "https://www.instagram.com/lombardimn/", icon: "instagram-logo" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-s4yhteap><section class="menu-header" data-astro-cid-s4yhteap><a href="/" class="site-title" data-astro-cid-s4yhteap><img class="nav-img" src="/assets/icons/logomain.png" alt="Imagen Logo de LombardiDev" data-astro-cid-s4yhteap></a>${renderComponent($$result, "menu-button", "menu-button", { "data-astro-cid-s4yhteap": true }, { "default": () => renderTemplate`<template data-astro-cid-s4yhteap><button class="menu-button" aria-expanded="false" data-astro-cid-s4yhteap><span class="sr-only" data-astro-cid-s4yhteap>Menú</span>${renderComponent($$result, "Icon", $$Icon, { "icon": "list", "data-astro-cid-s4yhteap": true })}</button></template>` })}</section><section id="menu-content" data-astro-cid-s4yhteap><ul class="nav-items" data-astro-cid-s4yhteap>${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-s4yhteap><a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute(["link", {
    active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
  }], "class:list")}${addAttribute(href, "href")} data-astro-cid-s4yhteap>${label}</a></li>`)}</ul><div class="menu-footer" data-astro-cid-s4yhteap><div class="socials" data-astro-cid-s4yhteap>${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-s4yhteap><span class="sr-only" data-astro-cid-s4yhteap>${label}</span>${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-s4yhteap": true })}</a>`)}</div><div class="theme-toggle" data-astro-cid-s4yhteap>${renderComponent($$result, "Toggle", $$Toggle, { "data-astro-cid-s4yhteap": true })}</div></div></section></nav>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/navbar/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/node_modules/.pnpm/astro@3.3.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4><head>${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "data-astro-cid-sckkx6r4": true })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head><body data-astro-cid-sckkx6r4><div class="stack backgrounds" data-astro-cid-sckkx6r4><header data-astro-cid-sckkx6r4>${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })}</header><main data-astro-cid-sckkx6r4>${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}</main></div></body></html>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not Found", "description": "404 Error - this page was not found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="content" data-astro-cid-zetdm5md><h2 class="title-404" data-astro-cid-zetdm5md>Page Not Found</h2><img class="img-error" src="/assets/icons/404.svg" alt="Un robot en el suelo al que se le salieron piezas internas y tiene un cartel indicando el error 404 de pagina no encontrada." data-astro-cid-zetdm5md></div>` })}`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/404.astro", void 0);

const $$file = "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, _404 as _, $$Layout as a };
