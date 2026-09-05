<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon-site/favicon.ico' }],
  htmlAttrs: {
    lang: 'id'
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Gabut Ngoding',
        url: 'https://gabutngoding.my.id',
        description:
          'Portofolio pribadi yang mendokumentasikan karya dan eksplorasi saya dalam pengembangan perangkat lunak.',
        author: {
          '@type': 'Person',
          name: 'Alwi',
          jobTitle: 'Backend Developer',
          url: 'https://gabutngoding.my.id/about'
        }
      })
    }
  ]
})

const title = 'Gabut Ngoding'
const description =
  'Portofolio pribadi yang mendokumentasikan karya dan eksplorasi saya dalam pengembangan perangkat lunak.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})

const menu = ref([
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Portfolio',
    to: '/project'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
])
</script>

<template>
  <UApp>
    <div class="bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10">
      <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            src="/images/gabutngodinglogo.png"
            alt="gabutngoding logo"
            class="h-10 w-10 rounded-full border border-primary/20 bg-surface-container object-cover p-0.5"
          >
          <span
            class="text-[20px] font-bold text-primary tracking-tight"
          >
            gabutngoding
          </span>
        </NuxtLink>
      </template>

      <UNavigationMenu :items="menu" />

      <template #body>
        <UNavigationMenu
          :items="menu"
          orientation="vertical"
        />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="/contact"
          class="font-bold shadow-sm shadow-primary/20"
        >
          Hire Me
        </UButton>
      </template>
    </UHeader>
    </div>

    <UMain>
      <NuxtPage />
    </UMain>

    <footer
      class="w-full border-t border-outline-variant/10 bg-surface-container-lowest py-12 mt-16"
    >
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between md:px-8"
      >
        <div class="flex items-center gap-3">
          <img
            src="/images/gabutngodinglogo.png"
            alt="gabutngoding logo"
            class="h-8 w-8 rounded-full border border-primary/20 bg-surface-container object-cover p-0.5"
          >
          <span class="text-lg font-bold text-primary tracking-tight">
            gabutngoding
          </span>
        </div>

        <p class="text-sm text-on-surface-variant text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} gabutngoding. Built with
          precision and a bit of idle curiosity.
        </p>

        <div class="flex items-center gap-8 text-sm">
          <UButton
            to="https://github.com/gabutlabs"
            target="_blank"
            variant="link"
            color="neutral"
            class="text-on-surface-variant hover:text-primary opacity-80 hover:opacity-100"
          >
            GitHub
          </UButton>
          <UButton
            to="mailto:gabutngoding5@gmail.com"
            variant="link"
            color="neutral"
            class="text-on-surface-variant hover:text-primary opacity-80 hover:opacity-100"
          >
            Email
          </UButton>
        </div>
      </div>
    </footer>
  </UApp>
</template>
