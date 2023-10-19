import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './chunk.e2ad2317.js';
import { $ as $$Hero, a as $$Contact } from './chunk.48db9272.js';
import { a as $$Layout } from './chunk.d49772b2.js';
/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre M\xED | Lombardi Matias", "description": "Descripci\xF3n personal y laboral sobre Matias Lombardi", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="stack gap-20" data-astro-cid-kh7btl4r><div class="wrapper about" data-astro-cid-kh7btl4r>${renderComponent($$result2, "Hero", $$Hero, { "title": "Sobre M\xED", "tagline": "Muchas gracias por su visita. A continuaci\xF3n puede saber m\xE1s sobre quien soy y como transite m\xED camino.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate`<img class="profile-img" height="720" width="1080" src="/assets/images/working.jpg" alt="Matias Lombardi, posando en su escritorio HomeOffice" data-astro-cid-kh7btl4r>` })}<article data-astro-cid-kh7btl4r><h2 class="section-title" data-astro-cid-kh7btl4r>Historia</h2><div class="content" data-astro-cid-kh7btl4r><p data-astro-cid-kh7btl4r>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea ipsum blanditiis hic minima a at aperiam temporibus quod ipsam.
</p><p data-astro-cid-kh7btl4r>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est odio rerum illo distinctio qui reiciendis deleniti praesentium atque laboriosam. Ad.
</p><p data-astro-cid-kh7btl4r>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta perferendis magni possimus, assumenda reprehenderit quis in tenetur sit impedit consequatur!
</p></div></article><article data-astro-cid-kh7btl4r><h2 class="section-title" data-astro-cid-kh7btl4r>Experiencia</h2><div class="content" data-astro-cid-kh7btl4r><p data-astro-cid-kh7btl4r>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus, molestiae voluptatem nisi aliquid magni reprehenderit tempore quia quod. Nobis?
</p></div></article><article data-astro-cid-kh7btl4r><h2 class="section-title" data-astro-cid-kh7btl4r>Educación</h2><div class="content" data-astro-cid-kh7btl4r><p data-astro-cid-kh7btl4r>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium soluta atque et quas aperiam accusamus cumque ab nesciunt, porro asperiores!
</p></div></article></div>${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-kh7btl4r": true })}</section>` })}`;
}, "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/about.astro", void 0);

const $$file = "D:/Documentos/Proyectos/1.Training/6.Porfolio/lombardidev.github.io/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
