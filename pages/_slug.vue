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
  layout(context) {
    return undefined
  },
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
  data: () => ({
    page: undefined,
  }),
  head() {
    const head = {
      title: `${this.page.title} - HenkeByte`,
      meta: [],
    }

    if (this.page['meta-tags']) {
      const metaTags = this.page['meta-tags']

      for (const metaTag of metaTags) {
        head.meta.push({
          hid: metaTag.key,
          name: metaTag.key,
          property: `og:${metaTag.key}`,
          content: metaTag.value,
        })
      }
    }

    return head
  },
}
</script>
