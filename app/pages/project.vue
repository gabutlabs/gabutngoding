<script setup lang="ts">
definePageMeta({
  title: 'Portfolio - gabutngoding',
  description: 'Kumpulan proyek yang lahir dari momen "gabut", diubah menjadi sistem backend yang tangguh dan alat fungsional.'
})

const { data: projects } = await useAsyncData('all-projects', () => {
  return queryCollection('projects').all()
})
</script>

<template>
  <div class="antialiased">
    <!-- Hero -->
    <section
      class="mx-auto mb-16 max-w-7xl px-6 pt-8 text-center md:px-8 md:pt-16 md:text-left"
    >
      <h1
        class="mb-4 text-[28px] font-bold leading-[36px] text-primary md:text-[48px] md:leading-[56px] md:tracking-[-0.02em]"
      >
        Portfolio
      </h1>
      <p class="mx-auto max-w-2xl leading-relaxed text-on-surface-variant md:mx-0">
        A collection of projects born from "gabut" moments, turned into robust
        backend systems and functional tools. Exploring the intersection of
        idle curiosity and technical precision.
      </p>
    </section>

    <!-- Project Grid -->
    <section
      class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3"
    >
      <template v-if="projects && projects.length > 0">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group flex flex-col rounded-lg border border-tertiary-container/30 bg-surface-container-lowest p-6 transition-colors hover:border-primary/50"
        >
          <div class="mb-4 flex items-start justify-between">
            <h3
              class="text-[24px] font-bold text-on-background transition-colors group-hover:text-primary"
            >
              {{ project.project_name }}
            </h3>
            <UIcon
              v-if="project.icon"
              :name="project.icon"
              class="h-6 w-6 shrink-0 text-primary"
            />
          </div>

          <p class="mb-6 flex-grow leading-relaxed text-on-surface-variant">
            {{ project.description }}
          </p>

          <div
            v-if="project.technologies"
            class="mb-6 flex flex-wrap gap-2"
          >
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="rounded border border-primary/20 bg-primary/10 px-2 py-1 text-[13px] leading-[18px] text-primary"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex gap-4">
            <UButton
              v-if="project.url"
              :to="project.url"
              target="_blank"
              class="flex-1"
            >
              {{ project.is_private ? 'Request Demo' : 'Live' }}
            </UButton>

            <UButton
              v-if="project.github && !project.is_private"
              :to="project.github"
              target="_blank"
              variant="outline"
              color="neutral"
              class="flex-1"
            >
              View on GitHub
            </UButton>
          </div>
        </div>
      </template>

      <div v-else class="col-span-full py-12 text-center">
        <UIcon
          name="i-lucide-folder-open"
          class="mx-auto mb-4 h-16 w-16 text-on-surface-variant/40"
        />
        <h3 class="mb-2 text-xl font-medium text-on-surface">
          Belum Ada Proyek
        </h3>
        <p class="text-on-surface-variant">
          Periksa kembali nanti untuk pembaruan karya terbaru saya.
        </p>
      </div>
    </section>
  </div>
</template>
