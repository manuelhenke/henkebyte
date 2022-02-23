<template>
  <div id="page-template" class="p-3 p-sm-4 p-md-5 bg-light rounded-3 shadow">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <router-link tag="button" to="/" class="btn btn-link text-decoration-none">
        <i class="bi bi-chevron-left"></i>{{ backButtonText }}
      </router-link>
      <img src="images/henkebyte-logo.png" class="img-fluid" width="50" alt="henkebyte-logo">
    </div>
    <div class="container-fluid">
      <h1 class="display-5 fw-bold">
        <slot name="title"></slot> <span v-if="newBadge" class="badge bg-info">New</span>
      </h1>
      <p class="col-md-8 fs-4 lead">
        <slot name="lead"></slot>
      </p>
      <hr class="my-4" />
      <slot></slot>
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "PageTemplate",
  components: {
    Footer
  },
  props: {
    newBadge: {
      type: Boolean,
      required: false,
      default: false,
    },
    backButtonText: {
      type: String,
      required: false,
      default: "Home",
    },
  }
};
</script>

<style lang="scss" scoped>
#page-template {
  height: 100%;
  @media (max-width: 768px) {
    border-radius: 0 !important;
  }
}
</style>
