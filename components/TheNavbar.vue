<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom mb-4">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Русская Леди</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="showMobileMenu = !showMobileMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        :class="{ show: showMobileMenu }"
      >
        <div class="navbar-nav ms-auto">
          <NuxtLink
            class="nav-link"
            aria-current="page"
            to="/shipping-and-payment"
            >Доставка и Оплата</NuxtLink
          >
          <NuxtLink class="nav-link" to="/size-chart"
            >Таблица размеров</NuxtLink
          >
          <NuxtLink class="nav-link" to="/contacts">Контакты</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    }
  },
}
</script>
