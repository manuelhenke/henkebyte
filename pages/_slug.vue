<template comments>
  <div id="page">
    <!-- #page -->
    <TheTitle :badge_text="page.badge_text">{{ page.title }}</TheTitle>
    <nuxt-content :document="page" />
    <!-- /#page -->
  </div>
</template>

<script>
export default {
  layout: 'default',
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

    if (this.page.meta_tags) {
      const metaTags = this.page.meta_tags

      for (const metaTag of metaTags) {
        head.meta.push({
          hid: metaTag.key,
          name: metaTag.key,
          content: metaTag.content,
        })
        head.meta.push({
          hid: `og:${metaTag.key}`,
          property: `og:${metaTag.key}`,
          content: metaTag.content,
        })
      }
    }

    return head
  },
}
</script>
