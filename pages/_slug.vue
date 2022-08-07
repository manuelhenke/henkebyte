<template comments>
  <div id="page">
    <!-- #page -->
    <TheTitle :badge-text="page.badge_text">{{ page.title }}</TheTitle>
    <nuxt-content :document="page" />
    <!-- /#page -->
  </div>
</template>

<script>
import { flatten, isArray, map } from 'lodash-es';

export default {
  layout: 'default',
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index';
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    return {
      page,
    };
  },
  data: () => ({
    page: undefined,
  }),
  head() {
    const head = {
      title: `${this.page.title} - HenkeByte`,
      meta: [],
    };

    if (isArray(this.page.meta_tags)) {
      head.meta = flatten(
        map(this.page.meta_tags, (metaTag) => [
          {
            hid: metaTag.key,
            name: metaTag.key,
            content: metaTag.content,
          },
          {
            hid: `og:${metaTag.key}`,
            property: `og:${metaTag.key}`,
            content: metaTag.content,
          },
        ])
      );
    }

    return head;
  },
};
</script>
