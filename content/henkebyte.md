---
title: Henkebyte
badge-text: 'New'
meta-tags:
- key: description
  value: Showcase of the implementation of the project "ios-calculator-for-web" which
    is available at GitHub and npm.

---
<the-lead>
  This website itself is a showcase to learn about different tools and libraries. The code is available on <a href="https://github.com/manuelhenke/henkebyte" target="_blank">GitHub</a>.
</the-lead>

<hr class="my-4" />

<section id="tools">
  <!-- #tools -->
  <h2>Tools</h2>
  <p>
    The website is a Single Page Application build with <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a> (a library build on top of <a href="https://vuejs.org/" target="_blank">Vue.js</a>) along with some plugins for NuxtJS:
    <dl class="row">
      <dt class="col-md-3"><a href="https://pwa.nuxtjs.org/" target="_blank">nuxt/pwa</a></dt>
      <dd class="col-md-9">Provides the website as Progressive Web App.</dd>
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
    The design is build upon a customized <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> as well as some custom made components. Also utilizing <a href="https://icons.getbootstrap.com/" target="_blank">Bootstraps's icon pack</a>. 
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
    <small class="text-muted">Get a complete overview <a href="https://github.com/manuelhenke/henkebyte/blob/main/package.json#L22-L41" target="_blank">here</a></small>
  </p>
  <!-- /#tools -->
</section>

<section id="dev-tools">
  <!-- #dev-tools -->
  <h2>Dev-Tools</h2>
  <p>
    <em>Coming soon.</em>
  </p>
  <p>
    <small class="text-muted">Get a complete overview <a href="https://github.com/manuelhenke/henkebyte/blob/main/package.json#L42-L71" target="_blank">here</a></small>
  </p>
  <!-- /#dev-tools -->
</section>

<section id="hosting-and-deployment">
  <!-- #hosting -->
  <h2>Hosting and Deployment</h2>
  <p>
    The website is hosted in <a href="https://aws.amazon.com/s3/" target="_blank">Amazon S3</a>. To achieve better latency and reduce traffic to the S3, the website is cached in <a href="https://aws.amazon.com/cloudfront/" target="_blank">Amazon CloudFront</a>. Deployment is automated using <a href="https://github.com/features/actions" target="_blank">GitHub actions</a>. A push to the main branch triggers a Continuous Integration (linting and testing) and a Code-Quality pipeline. If these pipelines are successful, the Continuous Deployment pipeline is triggered and creates the static build of the website. It is then deployed to S3 and finally the CloudFront cache is invalidated.
  </p>
  <!-- /#hosting -->
</section>

<section id="content">
  <!-- #hosting -->
  <h2>Content</h2>
  <p>
    The content on this page (and some meta information) is mainly stored in the GitHub repository itself. However, it is quite manageable via a Git-based CMS. The tool used for this is <a href="https://forestry.io/" target="_blank">forestry.io</a> and it commits changes directly to the repository. Through automated deployment, these changes are then available on the website after a few minutes. A second CMS is <a href="https://www.contentful.com/" target="_blank">contentful</a>. It is headless and a SaaS. The content stored there is used for the <nuxt-link to="resources-overview">Resources Overview</nuxt-link>.
  </p>
  <!-- /#hosting -->
</section>

<section id="backend">
  <!-- #backend -->
  <h2>Backend</h2>
  <p>
    <em>Currently there are no own backend services with custom business logic.</em>
  </p>
  <!-- /#hosting -->
</section>
