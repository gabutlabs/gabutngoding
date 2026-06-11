<script setup lang="ts">
definePageMeta({
  title: "Portofolio",
  description: "Kumpulan karya dan eksplorasi digital saya",
});

const { data: projects } = await useAsyncData("all-projects", () => {
  return queryCollection("projects").all();
});

const title = "Portofolio Saya";
const description =
  "Jelajahi berbagai karya digital, proyek sumber terbuka, dan eksplorasi teknologi yang telah saya kembangkan.";
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
      title="Karya Pilihan"
      description="Kumpulan proyek digital yang telah saya kembangkan, mengeksplorasi teknologi baru, dan merancang solusi untuk berbagai masalah."
    >
      <div v-if="projects && projects.length > 0" class="space-y-12">
        <UPageCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.project_name"
          :description="project.description"
          variant="outline"
          class="hover:shadow-lg transition-shadow duration-300"
          :ui="{ footer: 'w-full' }"
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
              <div class="flex gap-3 w-full">
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
                class="w-full text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-3 rounded-md"
                style="min-width: 100%"
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
        <h3 class="text-xl font-medium mb-2">Belum Ada Proyek</h3>
        <p class="text-gray-500 dark:text-gray-400">
          Periksa kembali nanti untuk pembaruan karya terbaru saya.
        </p>
      </div>
    </UPageSection>

    <UPageSection
      title="Teknologi yang Digunakan"
      description="Teknologi dan alat yang saya gunakan dalam mengembangkan proyek-proyek saya"
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
      title="Tertarik untuk Berkolaborasi?"
      description="Saya selalu terbuka untuk diskusi mengenai peluang proyek baru. Mari wujudkan ide Anda."
    >
      <UPageColumns>
        <UPageCard
          title="Butuh Bantuan Teknis?"
          description="Jika Anda membutuhkan bantuan dalam pengembangan aplikasi atau memiliki proyek yang ingin didiskusikan, jangan ragu untuk menghubungi saya."
          variant="subtle"
        >
          <UButton
            to="/about#contact"
            color="primary"
            class="w-full"
            icon="i-lucide-briefcase"
          >
            Mari Berdiskusi
          </UButton>
        </UPageCard>

        <UPageCard
          title="Jelajahi Lebih Lanjut"
          description="Lihat GitHub saya untuk repositori open-source dan kontribusi lainnya."
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
