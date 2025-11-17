<script setup lang="ts">
definePageMeta({
  title: "Produk",
  description: "Kumpulan produk digital saya",
});

const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});

const title = "Produk Saya";
const description =
  "Jelajahi produk digital yang telah saya kembangkan di waktu luang saya.";
</script>

<template>
  <div>
    <UPageHero
      :title="title"
      :description="description"
      :links="[
        {
          label: 'Hubungi Saya',
          to: '/about#contact',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
        {
          label: 'Tentang Saya',
          to: '/about',
          icon: 'i-lucide-user',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    />

    <UPageSection
      id="projects"
      title="Produk Unggulan"
      description="Kumpulan produk digital yang telah saya kembangkan di waktu luang, mengeksplorasi teknologi baru dan menyelesaikan masalah menarik."
    >
      <div v-if="projects && projects.length > 0" class="space-y-12">
        <UPageCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.project_name"
          :description="project.description"
          variant="outline"
          class="hover:shadow-lg transition-shadow duration-300"
        >
          <template #header>
            <div
              class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center"
            >
              <img
                :src="project.image"
                :alt="project.project_name"
                class="w-full h-full object-cover"
                @error="
                  (e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-project.jpg';
                  }
                "
              />
            </div>
          </template>

          <template #footer>
            <div class="flex flex-col w-full space-y-3">
              <div class="flex justify-between items-center">
                <UButton
                  :to="project.url"
                  target="_blank"
                  icon="i-lucide-external-link"
                  variant="outline"
                  color="primary"
                >
                  Lihat Demo
                </UButton>

                <UButton
                  v-if="!project.is_private"
                  :to="project.github || project.url"
                  target="_blank"
                  icon="i-simple-icons-github"
                  variant="ghost"
                >
                  Kode Sumber
                </UButton>

                <UButton
                  v-else
                  disabled
                  icon="i-simple-icons-github"
                  variant="ghost"
                  color="neutral"
                >
                  Sumber Pribadi
                </UButton>
              </div>

              <div
                v-if="project.demo_credentials"
                class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-3 rounded-md"
              >
                <p v-if="project.demo_credentials.username">
                  <span class="font-medium">Akun Demo:</span>
                  {{ project.demo_credentials.username }}
                  <span v-if="project.demo_credentials.password"
                    >| Kata sandi tersedia atas permintaan</span
                  >
                </p>
                <p v-if="project.demo_credentials.note" class="mt-1">
                  {{ project.demo_credentials.note }}
                </p>
              </div>
            </div>
          </template>
        </UPageCard>
      </div>

      <div v-else class="text-center py-12">
        <UIcon
          name="i-lucide-folder-open"
          class="h-16 w-16 text-gray-400 mx-auto mb-4"
        />
        <h3 class="text-xl font-medium mb-2">Belum Ada Produk</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Periksa kembali nanti untuk pembaruan produk terbaru saya.
        </p>
      </div>
    </UPageSection>

    <UPageSection
      title="Teknologi yang Digunakan"
      description="Teknologi dan alat-alat yang telah saya gunakan dalam berbagai produk"
      id="technologies"
    >
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <UTooltip text="JavaScript" :popper="{ placement: 'bottom' }">
          <div
            class="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <UIcon name="i-simple-icons-javascript" class="h-8 w-8 mb-2" />
            <span class="text-sm">JavaScript</span>
          </div>
        </UTooltip>

        <UTooltip text="TypeScript" :popper="{ placement: 'bottom' }">
          <div
            class="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <UIcon name="i-simple-icons-typescript" class="h-8 w-8 mb-2" />
            <span class="text-sm">TypeScript</span>
          </div>
        </UTooltip>

        <UTooltip text="Vue.js" :popper="{ placement: 'bottom' }">
          <div
            class="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <UIcon name="i-simple-icons-vuedotjs" class="h-8 w-8 mb-2" />
            <span class="text-sm">Vue.js</span>
          </div>
        </UTooltip>

        <UTooltip text="Nuxt.js" :popper="{ placement: 'bottom' }">
          <div
            class="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <UIcon name="i-simple-icons-nuxtdotjs" class="h-8 w-8 mb-2" />
            <span class="text-sm">Nuxt.js</span>
          </div>
        </UTooltip>

        <UTooltip text="Laravel" :popper="{ placement: 'bottom' }">
          <div
            class="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <UIcon name="i-simple-icons-laravel" class="h-8 w-8 mb-2" />
            <span class="text-sm">Laravel</span>
          </div>
        </UTooltip>

        <UTooltip text="Node.js" :popper="{ placement: 'bottom' }">
          <div
            class="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <UIcon name="i-simple-icons-nodedotjs" class="h-8 w-8 mb-2" />
            <span class="text-sm">Node.js</span>
          </div>
        </UTooltip>
      </div>
    </UPageSection>

    <UPageSection
      id="contact"
      title="Tertarik dengan Produk Saya?"
      description="Saya terbuka untuk diskusi tentang produk-produk saya. Mari bicarakan kebutuhan Anda."
    >
      <UPageColumns>
        <UPageCard
          title="Beli Produk Saya"
          description="Saya menyediakan source code produk-produk saya untuk dijual. Hubungi saya untuk informasi lebih lanjut."
          variant="subtle"
        >
          <UButton
            to="/about#contact"
            color="primary"
            class="w-full"
            icon="i-lucide-briefcase"
          >
            Hubungi untuk Pembelian
          </UButton>
        </UPageCard>

        <UPageCard
          title="Jelajahi Lebih Lanjut"
          description="Lihat GitHub saya untuk produk tambahan dan kontribusi lainnya."
          variant="subtle"
        >
          <UButton
            to="https://github.com/gabutlabs"
            target="_blank"
            color="neutral"
            variant="outline"
            class="w-full"
            icon="i-simple-icons-github"
          >
            Lihat Profil GitHub
          </UButton>
        </UPageCard>
      </UPageColumns>
    </UPageSection>
  </div>
</template>
