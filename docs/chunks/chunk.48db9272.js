import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent, A as AstroError, U as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML } from './chunk.e2ad2317.js';
import { $ as $$Icon, a as $$Layout } from './chunk.d49772b2.js';
/* empty css                *//* empty css                *//* empty css                */
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    subtitle,
    tagline,
    align = "center"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["hero stack gap-4", align], "class:list")} data-astro-cid-flpxnje5><div class="stack gap-2" data-astro-cid-flpxnje5><h1 class="title" data-astro-cid-flpxnje5><span id="span-title" data-astro-cid-flpxnje5>${subtitle}</span>${title}</h1>${tagline && renderTemplate`<p class="tagline" data-astro-cid-flpxnje5>${tagline}</p>`}</div>${renderSlot($$result, $$slots["default"])}</article>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/globals/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-cmlj5n7c>${renderSlot($$result, $$slots["default"])}</div>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/main/Pill.astro", void 0);

const $$Astro$2 = createAstro();
const $$ActionButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ActionButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-o4d3io7c>${renderSlot($$result, $$slots["default"])}</a>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/globals/ActionButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-cgl7laum><h2 class="title-h2" data-astro-cid-cgl7laum>
¿Estaría interesado en colaborar en una oportunidad de trabajo conjunto?
</h2>${renderComponent($$result, "ActionButton", $$ActionButton, { "href": "mailto:contacto@lombardidev.ar", "data-astro-cid-cgl7laum": true }, { "default": ($$result2) => renderTemplate`
Contacto
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-cgl7laum": true })}` })}</aside>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/globals/Contact.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/project/bloom-box.md": () => import('./chunk.b20c2e14.js'),"/src/content/project/h20.md": () => import('./chunk.493c6616.js'),"/src/content/project/markdown-mystery-tour.md": () => import('./chunk.7b272354.js')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"project":{"type":"content","entries":{"bloom-box":"/src/content/project/bloom-box.md","markdown-mystery-tour":"/src/content/project/markdown-mystery-tour.md","h20":"/src/content/project/h20.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/project/bloom-box.md": () => import('./chunk.cb10dff4.js'),"/src/content/project/h20.md": () => import('./chunk.2d7e6bc1.js'),"/src/content/project/markdown-mystery-tour.md": () => import('./chunk.7857b098.js')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro();
async function getStaticPaths() {
  const work = await getCollection("project");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-5uq7evlv": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="stack gap-20" data-astro-cid-5uq7evlv><div class="stack gap-15" data-astro-cid-5uq7evlv><header class="header-slug" data-astro-cid-5uq7evlv><article class="wrapper stack gap-2" data-astro-cid-5uq7evlv><a class="back-link" href="/projects/" data-astro-cid-5uq7evlv>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-5uq7evlv": true })}
Proyectos
</a>${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "data-astro-cid-5uq7evlv": true }, { "default": ($$result3) => renderTemplate`<section class="details" data-astro-cid-5uq7evlv><div class="tags" data-astro-cid-5uq7evlv>${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-5uq7evlv": true }, { "default": ($$result4) => renderTemplate`${t}` })}`)}</div><p class="description" data-astro-cid-5uq7evlv>${entry.data.description}</p></section>` })}</article></header><section class="wrapper" data-astro-cid-5uq7evlv><article class="stack gap-10 content" data-astro-cid-5uq7evlv>${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} data-astro-cid-5uq7evlv>`}<div class="content" data-astro-cid-5uq7evlv>${renderComponent($$result2, "Content", Content, { "data-astro-cid-5uq7evlv": true })}</div></article></section></div>${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-5uq7evlv": true })}</section>` })}`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/projects/[...slug].astro", void 0);

const $$file = "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, ____slug_ as _, $$Contact as a, $$Pill as b, $$ActionButton as c, getCollection as g };
