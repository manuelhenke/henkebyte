---
title: HenkeByte Website
badge_text: New
meta_tags:
- key: description
  content: Description to this project website including used (dev-)tools, hosting,
    deployment and content management.

---
<the-lead full-width>
This website itself is a project to learn and try out different tools and libraries. The code is available on <a href="https://github.com/manuelhenke/henkebyte" target="_blank">GitHub</a>.
</the-lead>

<div class="vstack gap-1 align-items-center my-4">
  <website-screenshot-gallery disable-auto-play></website-screenshot-gallery>
  <small class="text-muted text-center">Overview of sample pages. The screenshots also change based on the selected theme mode. The creation is automated using <a href="https://playwright.dev/" target="_blank">Playwright</a> for all routes, the available themes and the three device types (the screenshot of this page is obviously omitted due to redundancy).</small> 
</div>

<section id="libraries-and-frameworks">
<!-- #libraries-and-frameworks -->
<h2>Libraries & Frameworks</h2>
<p>
It is a <strong>Single Page Application</strong> build with <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a> (a library build on top of <a href="https://vuejs.org/" target="_blank">Vue.js</a>) along with some modules for NuxtJS:
<dl class="row">
<dt class="col-md-3"><a href="https://pwa.nuxtjs.org/" target="_blank">nuxt/pwa</a></dt>
<dd class="col-md-9">Provides the website as <strong>Progressive Web App</strong>.</dd>
<dt class="col-md-3"><a href="https://color-mode.nuxtjs.org/" target="_blank">nuxt/color-mode</a></dt>
<dd class="col-md-9">Color modes like Light-, Dark- and Sepia-Mode.</dd>
<dt class="col-md-3"><a href="https://content.nuxtjs.org/" target="_blank">nuxt/content</a></dt>
<dd class="col-md-9">Static content folder including querying the content.</dd>
<dt class="col-md-3"><a href="https://github.com/nuxt-community/device-module#readme" target="_blank">nuxt/device</a></dt>
<dd class="col-md-9">Client-Device recognition to provide suitable information for the user.</dd>
</dl>
</p>
<hr />
<p>
The <strong>User Interface</strong> is build upon <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> as well as some custom made components. The used <strong>icons</strong> are from <a href="https://icons.getbootstrap.com/" target="_blank">Bootstraps's icon pack</a>.
</p>
<hr />
<p>
Other less commonly used tools are:
<dl class="row">
<dt class="col-md-3"><a href="https://dexie.org/" target="_blank">Dexie.js</a></dt>
<dd class="col-md-9">To save the minesweeper history in the IndexedDB of the browser.</dd>
<dt class="col-md-3"><a href="https://www.chartjs.org/" target="_blank">Chart.js</a></dt>
<dd class="col-md-9">To display the minesweeper history as pie chart.</dd>
<dt class="col-md-3"><a href="https://fireworks.js.org/" target="_blank">firework-js</a></dt>
<dd class="col-md-9">For the celebration of a win at minesweeper.</dd>
<dt class="col-md-3"><a href="https://lodash.com/" target="_blank">Lodash</a></dt>
<dd class="col-md-9">Just providing some utility functions which JavaScript is missing.</dd>
</dl>
</p>
<p>
<small class="text-muted">Get a complete overview <a href="https://github.com/manuelhenke/henkebyte/blob/main/package.json#L34-L56" target="_blank">here</a></small>
</p>
<!-- /#libraries-and-frameworks -->
</section>

<section id="dev-toolchain">
<!-- #dev-toolchain -->
<h2>Dev-Toolchain</h2>
<p>
<em>Coming soon...</em>
</p>
<p>
<small class="text-muted">Get a complete overview <a href="https://github.com/manuelhenke/henkebyte/blob/main/package.json#L57-L103" target="_blank">here</a></small>
</p>
<!-- /#dev-toolchain -->
</section>

<section id="hosting-and-deployment">
<!-- #hosting-and-deployment -->
<h2>Hosting and Deployment</h2>
<p>
The website is <strong>statically hosted</strong> in <a href="https://aws.amazon.com/s3/" target="_blank">Amazon S3</a>. To achieve better latency and reduce direct traffic to S3, the website is cached in <a href="https://aws.amazon.com/cloudfront/" target="_blank">Amazon CloudFront</a> and then distributed via a <strong>CDN</strong>. <strong>Deployment is automated</strong> using <a href="https://github.com/features/actions" target="_blank">GitHub actions</a>. A push to the main branch triggers a Continuous Integration (linting and testing) and a Code-Quality pipeline. If these pipelines are successful, the Continuous Deployment pipeline is triggered and creates the static build of the website. It is then deployed to S3 and finally the CloudFront cache is invalidated.
</p>
<!-- /#hosting-and-deployment -->
</section>

<section id="content-management">
<!-- #content-management -->
<h2>Content Management</h2>
<p>
The content on this page (and some meta information) is <strong>mainly stored in the Git Repository</strong> itself. However, it is quite manageable via a <strong>Git-based CMS</strong>. The tool used for this is <a href="https://forestry.io/" target="_blank">forestry.io</a> and it commits changes directly to the repository. Through automated deployment, these changes are then available on the website after a few minutes. Furthermore, the <strong>headless CMS</strong> <a href="https://www.contentful.com/" target="_blank">contentful</a> is used to store the content that is shown in the <nuxt-link to="resources-overview">Resources Overview</nuxt-link>.
</p>
<!-- /#content-management -->
</section>

<section id="backend">
<!-- #backend -->
<h2>Backend</h2>
<p>
<em>Currently there are no further backend services with custom business logic.</em>
</p>
<!-- /#backend -->
</section>
