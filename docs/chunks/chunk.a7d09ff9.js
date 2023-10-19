import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, f as renderSlot } from './chunk.e2ad2317.js';
import { $ as $$Icon, a as $$Layout } from './chunk.d49772b2.js';
import { g as getCollection, $ as $$Hero, b as $$Pill, c as $$ActionButton, a as $$Contact } from './chunk.48db9272.js';
/* empty css                *//* empty css                */
const $$Astro$3 = createAstro();
const $$Skill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Skill;
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-kb2fbe5o><article class="stack gap-2 lg:gap-4" data-astro-cid-kb2fbe5o>${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-kb2fbe5o": true })}<h2 data-astro-cid-kb2fbe5o>FullStack Java</h2><p data-astro-cid-kb2fbe5o>
Este rol me brinda la flexibilidad de adaptarme a diversos proyectos y asumir diferentes roles en el ciclo de desarrollo. Además me permite disfrutar de oportunidades de aprendizaje.
</p></article><article class="stack gap-2 lg:gap-4" data-astro-cid-kb2fbe5o>${renderComponent($$result, "Icon", $$Icon, { "icon": "monitor", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-kb2fbe5o": true })}<h2 data-astro-cid-kb2fbe5o>Frontend Developer whit React</h2><p data-astro-cid-kb2fbe5o>
Mi objectivo es construir experiencias que no solo sean visualmente atractivas, sino también intuitivas y fáciles de usar. Estoy emocionado por enfrentar los desafíos que la industria presenta y contribuir al crecimiento
</p></article><article class="stack gap-2 lg:gap-4" data-astro-cid-kb2fbe5o>${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-kb2fbe5o": true })}<h2 data-astro-cid-kb2fbe5o>Analista Funcional</h2><p data-astro-cid-kb2fbe5o>
Traduciendo requerimientos de clientes en soluciones tecnológicas eficaces. Mi rol abarca desde el análisis detallado de necesidades hasta el diseño y planificación colaborando con equipos de desarrollo.
</p></article></section>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/globals/Skill.astro", void 0);

const $$Astro$2 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([
    "grid",
    {
      offset: variant === "offset",
      small: variant === "small"
    }
  ], "class:list")} data-astro-cid-6ndpajjo>${renderSlot($$result, $$slots["default"])}</ul>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/main/Grid.astro", void 0);

const $$Astro$1 = createAstro();
const $$WorkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/projects/${slug}`, "href")} data-astro-cid-eqz2qkwt><span class="title" data-astro-cid-eqz2qkwt>${data.title}</span><img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-eqz2qkwt></a>`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/components/globals/WorkPreview.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("project")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lombardi Matias", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6><div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6><section class="hero" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Hero", $$Hero, { "subtitle": "Hola a todos \u{1F44B}!\n", "title": "Soy Matias Lombardi", "tagline": "Analista Funcional, Desarrollador Frontend React & FullStack Java.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`<article class="roles" data-astro-cid-j7pv25f6>${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33", "data-astro-cid-j7pv25f6": true })}
Metódico
` })}${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "microphone-stage", "size": "1.33em", "data-astro-cid-j7pv25f6": true })}
Comunicativo
` })}${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "change", "size": "1.33em", "data-astro-cid-j7pv25f6": true })}
Adaptable
` })}${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "strategy", "size": "1.33em", "data-astro-cid-j7pv25f6": true })}
Analítico
` })}</article>` })}<img class="hero-img" src="/assets/images/avatar21.webp" width="480" height="620" alt="Matias sonriendo con una remera azul con dos botones en el cuello, con un fondo estilo mancha de color turqueza." data-astro-cid-j7pv25f6></section>${renderComponent($$result2, "Skill", $$Skill, { "data-astro-cid-j7pv25f6": true })}</div><div class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6><section class="section with-background with-cta" data-astro-cid-j7pv25f6><article class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6><h3 data-astro-cid-j7pv25f6>
Proyectos
</h3><p data-astro-cid-j7pv25f6>
Echa un vistazo a algunos de mis trabajos destacados.
</p></article><article class="gallery" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6>${renderComponent($$result3, "WorkPreview", $$WorkPreview, { "project": project, "data-astro-cid-j7pv25f6": true })}</li>`)}` })}</article><article class="cta" data-astro-cid-j7pv25f6>${renderComponent($$result2, "ActionButton", $$ActionButton, { "href": "/projects/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View All
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })}` })}</article></section></div>${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })}</section>` })}`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/index.astro", void 0);

const $$file = "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$WorkPreview as a, index as i };
