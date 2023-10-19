import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './chunk.e2ad2317.js';
import { g as getCollection, $ as $$Hero, a as $$Contact } from './chunk.48db9272.js';
import { a as $$Layout } from './chunk.d49772b2.js';
import { $ as $$Grid, a as $$WorkPreview } from './chunk.a7d09ff9.js';
/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */
const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = (await getCollection("project")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mis Proyectos | Lombardi Matias", "description": "Conozca los proyectos m\xE1s recientes de Lombardi Matias" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="stack gap-20"><article class="wrapper stack gap-8">${renderComponent($$result2, "Hero", $$Hero, { "title": "Proyectos", "tagline": "Vea mis proyectos m\xE1s recientes a continuaci\xF3n para hacerse una idea de mi experiencia anterior.", "align": "start" })}${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>${renderComponent($$result3, "WorkPreview", $$WorkPreview, { "project": project })}</li>`)}` })}</article>${renderComponent($$result2, "Contact", $$Contact, {})}</section>` })}`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/projects.astro", void 0);

const $$file = "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
