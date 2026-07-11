<script setup lang="ts">
definePageMeta({
  title: "About Me | gabutngoding",
  description:
    "Pelajari lebih lanjut tentang perjalanan, keterampilan, dan apa yang memotivasi saya sebagai pengembang.",
});
</script>

<template>
  <div class="antialiased">
    <!-- Hero Section -->
    <section
      class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-8 md:py-24"
    >
      <div>
        <h1
          class="mb-6 text-[28px] font-bold leading-[36px] md:text-[48px] md:leading-[56px] md:tracking-[-0.02em]"
        >
          <span class="text-on-surface">The Mind Behind</span><br />
          <span class="mt-2 block text-primary">the 'Gabut'.</span>
        </h1>
        <p class="mb-8 max-w-lg leading-relaxed text-on-surface-variant">
          Hi, I'm Alwi. What started as idle curiosity—the essence of
          'gabut'—has evolved into a passionate pursuit of building robust,
          scalable backend systems. I engineer solutions that are as solid as
          they are elegant.
        </p>
        <div class="flex gap-4">
          <UButton
            to="/#portfolio"
            size="lg"
            class="font-bold"
            icon="i-lucide-terminal"
          >
            View Projects
          </UButton>
          <UButton
            to="#"
            variant="outline"
            size="lg"
            color="secondary"
            class="font-bold"
          >
            Download CV
          </UButton>
        </div>
      </div>

      <div
        class="relative overflow-hidden rounded-2xl border border-surface-variant"
        style="
          background-image: url(&quot;/images/gabut_ngoding_transparent_precise.png&quot;);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-color: var(--ds-surface-container);
          min-height: 360px;
        "
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-10"
          style="
            background-image: radial-gradient(
              circle at 2px 2px,
              #bdee96 1px,
              transparent 0
            );
            background-size: 24px 24px;
          "
        />
      </div>
    </section>

    <!-- Biography Bento Grid -->
    <section class="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <h2
        class="mb-8 border-l-4 border-primary pl-4 text-[28px] font-bold leading-[36px] text-primary md:text-[32px] md:leading-[40px] md:tracking-[-0.01em]"
      >
        System Initialized: _whoami
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Main Bio Card -->
        <div
          class="rounded-xl border border-surface-variant bg-surface-container p-8 md:col-span-2"
        >
          <h3
            class="mb-4 flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-primary"
          >
            <UIcon name="i-lucide-code-2" class="h-5 w-5" />
            5+ Years Backend Experience
          </h3>
          <p class="mb-4 leading-relaxed text-on-surface-variant">
            I specialize in architecting the unseen infrastructure that powers
            digital experiences. With deep roots in PHP frameworks (Laravel,
            CodeIgniter) and a strong command of modern Go and TS/JS ecosystems,
            I build APIs that don't just work—they perform.
          </p>
          <p class="leading-relaxed text-on-surface-variant">
            While my heart is in the backend, I'm well-versed in bridging the
            gap to the frontend using Vue and React, ensuring seamless
            end-to-end delivery. The 'gabutngoding' philosophy is simple:
            turning spare time into reliable code.
          </p>
        </div>

        <!-- Stats Card -->
        <div
          class="flex flex-col items-center justify-center rounded-xl border border-surface-variant bg-surface-variant/50 p-8 text-center"
        >
          <UIcon name="i-lucide-cpu" class="mb-4 h-10 w-10 text-primary" />
          <div class="mb-2 text-4xl font-bold text-on-surface">5+</div>
          <div class="text-sm font-medium text-on-surface-variant">
            Years of Engineering
          </div>
        </div>

        <!-- Philosophy Card -->
        <div
          class="rounded-xl border border-primary/20 bg-surface-container-high p-8 md:col-span-3"
        >
          <h3
            class="mb-4 flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-primary"
          >
            <UIcon name="i-lucide-boxes" class="h-5 w-5" />
            Professional Philosophy
          </h3>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-bold text-on-surface">Clean Architecture</h4>
              <p class="text-sm leading-relaxed text-on-surface-variant">
                Separation of concerns isn't just a buzzword; it's the
                foundation of maintainable software. I prioritize writing
                testable, decoupled code that scales with the business.
              </p>
            </div>
            <div>
              <h4 class="mb-2 font-bold text-on-surface">Scalability First</h4>
              <p class="text-sm leading-relaxed text-on-surface-variant">
                Whether it's optimizing database queries or designing
                microservices, I build with future growth in mind, ensuring
                systems remain resilient under load.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <h2
        class="mb-8 border-l-4 border-primary pl-4 text-[28px] font-bold leading-[36px] text-primary md:text-[32px] md:leading-[40px] md:tracking-[-0.01em]"
      >
        Core Dependencies
      </h2>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          class="group flex flex-col items-center gap-3 rounded-lg border border-surface-variant bg-surface-container p-6 transition-colors hover:border-primary"
        >
          <UIcon
            name="i-lucide-database"
            class="h-9 w-9 text-on-surface-variant transition-colors group-hover:text-primary"
          />
          <span class="text-sm font-medium">Laravel</span>
        </div>
        <div
          class="group flex flex-col items-center gap-3 rounded-lg border border-surface-variant bg-surface-container p-6 transition-colors hover:border-primary"
        >
          <UIcon
            name="i-lucide-terminal"
            class="h-9 w-9 text-on-surface-variant transition-colors group-hover:text-primary"
          />
          <span class="text-sm font-medium">Go</span>
        </div>
        <div
          class="group flex flex-col items-center gap-3 rounded-lg border border-surface-variant bg-surface-container p-6 transition-colors hover:border-primary"
        >
          <UIcon
            name="i-simple-icons-javascript"
            class="h-9 w-9 text-on-surface-variant transition-colors group-hover:text-primary"
          />
          <span class="text-sm font-medium">TS / JS</span>
        </div>
        <div
          class="group flex flex-col items-center gap-3 rounded-lg border border-surface-variant bg-surface-container p-6 transition-colors hover:border-primary"
        >
          <UIcon
            name="i-lucide-globe"
            class="h-9 w-9 text-on-surface-variant transition-colors group-hover:text-primary"
          />
          <span class="text-sm font-medium">Vue / React</span>
        </div>
      </div>
    </section>

    <!-- Personal Touch -->
    <section class="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <div
        class="relative overflow-hidden rounded-2xl border border-surface-variant bg-surface-container-highest p-8 md:p-12"
      >
        <div
          class="pointer-events-none absolute -right-10 -top-10 select-none text-[128px] font-bold text-surface/50 opacity-10"
        >
          GABUT
        </div>
        <div class="relative z-10 max-w-2xl">
          <h2
            class="mb-4 text-[28px] font-bold leading-[36px] text-primary md:text-[32px] md:leading-[40px] md:tracking-[-0.01em]"
          >
            Beyond the Terminal
          </h2>
          <p class="mb-6 leading-relaxed text-on-surface-variant">
            When I'm not untangling complex logic or debugging server
            deployments, you can usually find me brewing a perfect cup of
            coffee, exploring new tech stacks (just for fun), or trying to
            automate another trivial part of my life.
          </p>
          <div class="flex gap-4">
            <span
              class="inline-flex items-center gap-1 rounded-full border border-outline-variant/30 bg-surface-variant px-3 py-1 text-sm font-medium text-on-surface-variant"
            >
              <UIcon name="i-lucide-coffee" class="h-4 w-4" />
              Coffee Enthusiast
            </span>
            <span
              class="inline-flex items-center gap-1 rounded-full border border-outline-variant/30 bg-surface-variant px-3 py-1 text-sm font-medium text-on-surface-variant"
            >
              <UIcon name="i-lucide-headphones" class="h-4 w-4" />
              Lofi Beats
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
