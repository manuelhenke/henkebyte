<template comments>
  <div id="page">
    <!-- #page -->
    <TheTitle :badge-text="page['badge-text']">{{ page.title }}</TheTitle>
    <nuxt-content :document="page" />
    <!-- /#page -->
  </div>
</template>

<script>
export default {
  data: () => ({
    page: undefined,
  }),
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
  head() {
    const head = {
      meta: [],
    }

    if (this.page['meta-tags']) {
      const metaTags = this.page['meta-tags']
      if (metaTags.title) {
        head.title = metaTags.title
        head.meta.push({
          hid: 'title',
          name: 'title',
          property: 'og:title',
          content: metaTags.title,
        })
      }
      if (metaTags.description) {
        head.meta.push({
          hid: 'description',
          name: 'description',
          property: 'og:description',
          content: metaTags.description,
        })
      }
    }

    return head
  },
}
</script>
