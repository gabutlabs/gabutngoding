<script setup lang="ts">
const { data: projects, pending } = await useAsyncData('home-projects', () => {
  return queryCollection('projects').limit(3).all()
})

const techColorClasses: Record<string, string> = {
  'Nuxt.js': 'text-primary',
  Laravel: 'text-error',
  SQLite: 'text-secondary',
  Elysia: 'text-tertiary',
  React: 'text-tertiary'
}
</script>

<template>
  <div class="overflow-x-hidden antialiased">
    <!-- Hero Section -->
    <section class="mx-auto mt-12 max-w-7xl px-6 md:mt-20 md:px-8">
      <div class="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
          >
            <span class="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for projects
          </div>

          <h1
            class="text-[28px] font-bold leading-[36px] text-on-surface md:text-[48px] md:leading-[56px] md:tracking-[-0.02em]"
          >
            Crafting Robust Backends, One
            <span class="text-primary">'Gabut'</span> at a Time.
          </h1>

          <p
            class="max-w-xl text-lg leading-relaxed text-on-surface-variant"
          >
            Hi, I'm Alwi. A backend developer with 5+ years of experience
            turning idle curiosity into production-ready systems.
          </p>

          <div class="flex flex-wrap gap-3">
            <span
              class="rounded-full border border-outline-variant/50 bg-surface-variant px-3 py-1 text-sm text-on-surface"
            >
              PHP (Laravel/CI)
            </span>
            <span
              class="rounded-full border border-outline-variant/50 bg-surface-variant px-3 py-1 text-sm text-on-surface"
            >
              Go
            </span>
            <span
              class="rounded-full border border-outline-variant/50 bg-surface-variant px-3 py-1 text-sm text-on-surface"
            >
              JS/TS
            </span>
            <span
              class="rounded-full border border-outline-variant/50 bg-surface-variant px-3 py-1 text-sm text-on-surface"
            >
              Vue/React
            </span>
          </div>

          <div class="flex flex-wrap gap-4 pt-4">
            <UButton
              to="#portfolio"
              size="lg"
              class="font-bold shadow-md shadow-primary/10"
            >
              View Portfolio
            </UButton>
            <UButton
              to="#contact"
              variant="outline"
              size="lg"
              color="primary"
              class="font-bold"
            >
              Hire Me
            </UButton>
          </div>
        </div>

        <!-- Abstract Code Window -->
        <div class="hidden md:block">
          <div
            class="relative h-[420px] overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container/80 backdrop-blur-xl shadow-2xl"
          >
            <div
              class="flex h-10 items-center gap-2 border-b border-outline-variant/30 bg-surface-container-high px-4"
            >
              <div class="h-3 w-3 rounded-full bg-error" />
              <div class="h-3 w-3 rounded-full bg-[#facc15]" />
              <div class="h-3 w-3 rounded-full bg-primary" />
              <span
                class="ml-4 text-[13px] leading-[18px] text-on-surface-variant"
              >
                ~/gabutngoding/kernel.go
              </span>
            </div>
            <div
              class="h-full overflow-hidden bg-surface-container-lowest p-6 text-[13px] leading-[18px] text-on-surface-variant opacity-90"
            >
              <span class="text-primary">package</span> main<br><br>
              <span class="text-primary">import</span> (<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#facc15]">"fmt"</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#facc15]">"time"</span><br>
              )<br><br>
              <span class="text-primary">func</span>
              <span class="text-secondary-fixed">main</span>
              () {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println(<span class="text-[#facc15]">"Initializing robust backend..."</span>)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;startGabutMode()<br>
              }<br><br>
              <span class="text-primary">func</span>
              <span class="text-secondary-fixed">startGabutMode</span>
              () {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-outline-variant">// Turning idle time into clean code</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-primary">for</span> {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;buildProductionSystem()<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.Sleep(time.Hour)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br>
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="mx-auto mt-32 max-w-7xl px-6 md:px-8">
      <div
        class="group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 shadow-lg transition-colors duration-500 hover:border-primary/40 md:p-14"
      >
        <div
          class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div
          class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <h2
          class="mb-8 text-[28px] font-bold leading-[36px] text-on-surface md:text-[32px] md:leading-[40px] md:tracking-[-0.01em]"
        >
          Why <span class="text-primary">gabutngoding</span>?
        </h2>

        <div
          class="max-w-4xl space-y-6 text-lg leading-relaxed text-on-surface-variant"
        >
          <p>
            "Gabut" in Indonesian slang often implies idle time or having
            nothing to do. For me, these are the moments where the best ideas
            are born. This space is where I, Alwi, showcase the experiments,
            tools, and systems built during those idle moments that often evolve
            into robust solutions.
          </p>
          <p>
            With over 5 years of professional experience deep in the trenches of
            CodeIgniter, Laravel, and Golang, I've learned that clean
            architecture isn't just for enterprise—it's a mindset that applies
            whether you're building a massive microservice or a weekend side
            project.
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="mx-auto mt-32 max-w-7xl px-6 md:px-8">
      <h2
        class="mb-10 text-[28px] font-bold leading-[36px] text-on-surface md:text-[32px] md:leading-[40px] md:tracking-[-0.01em]"
      >
        Recent <span class="text-primary">Commits</span>
      </h2>

      <div class="grid gap-8 md:grid-cols-2">
        <template v-if="!pending && projects">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="group relative flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container/40 p-8 shadow-md backdrop-blur-md transition-all duration-300 hover:border-outline-variant/60 hover:bg-surface-container/60"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />

            <div class="relative z-10 flex h-full flex-col">
              <div class="mb-6 flex items-start justify-between">
                <h3
                  class="text-[24px] font-bold text-on-surface"
                >
                  {{ project.project_name }}
                </h3>
                <span
                  v-if="project.is_private"
                  class="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-variant px-3 py-1.5 text-sm text-on-surface-variant"
                >
                  <UIcon
                    name="i-lucide-lock"
                    class="h-4 w-4"
                  />
                  Private
                </span>
              </div>

              <p
                class="mb-8 flex-grow leading-relaxed text-on-surface-variant"
              >
                {{ project.description }}
              </p>

              <div class="mt-auto space-y-5">
                <div v-if="project.technologies" class="flex gap-3">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="rounded-md bg-surface-container-highest px-3 py-1.5 text-sm font-medium"
                    :class="techColorClasses[tech] || 'text-on-surface-variant'"
                  >
                    {{ tech }}
                  </span>
                </div>

                <details
                  v-if="project.demo_credentials"
                  class="group/details cursor-pointer rounded-lg border border-outline-variant/20 bg-surface-container-highest p-4 transition-colors hover:bg-surface-variant/50"
                >
                  <summary
                    class="flex items-center justify-between text-sm font-medium text-on-surface outline-none"
                  >
                    Demo Credentials (Limited Features)
                    <UIcon
                      name="i-lucide-chevron-down"
                      class="h-4 w-4 transition-transform group-open/details:rotate-180"
                    />
                  </summary>
                  <div
                    class="mt-4 rounded-md border border-outline-variant/10 bg-surface-container-lowest p-4 text-sm"
                  >
                    <template
                      v-if="project.demo_credentials.username"
                    >
                      User: {{ project.demo_credentials.username }}<br>
                    </template>
                    <template
                      v-if="project.demo_credentials.password"
                    >
                      Pass: {{ project.demo_credentials.password }}
                    </template>
                    <p
                      v-if="project.demo_credentials.note"
                      class="mt-2 text-on-surface-variant"
                    >
                      {{ project.demo_credentials.note }}
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </template>

        <!-- Skeleton Loading -->
        <template v-else>
          <div
            v-for="n in 2"
            :key="n"
            class="animate-pulse rounded-xl border border-outline-variant/30 bg-surface-container/40 p-8 shadow-md backdrop-blur-md"
          >
            <div class="mb-6 flex items-start justify-between">
              <div class="h-7 w-48 rounded bg-surface-container-highest/40" />
              <div class="h-7 w-20 rounded-full bg-surface-container-highest/40" />
            </div>
            <div class="mb-8 space-y-3">
              <div class="h-4 w-full rounded bg-surface-container-highest/30" />
              <div class="h-4 w-2/3 rounded bg-surface-container-highest/30" />
            </div>
            <div class="space-y-4">
              <div class="flex gap-3">
                <div class="h-7 w-20 rounded-md bg-surface-container-highest/40" />
                <div class="h-7 w-20 rounded-md bg-surface-container-highest/40" />
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="mx-auto mt-32 max-w-7xl px-6 md:px-8">
      <div
        class="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 p-12 text-center shadow-xl md:p-16"
      >
        <div
          class="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"
        />
        <div
          class="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]"
        />

        <h2
          class="relative z-10 mb-6 text-[28px] font-bold leading-[36px] text-on-surface md:text-[32px] md:leading-[40px] md:tracking-[-0.01em]"
        >
          Ready to build something together?
        </h2>
        <p
          class="relative z-10 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
        >
          Whether you need a scalable backend architecture, a custom API, or
          just someone to turn complex logic into clean code, I'm available for
          freelance opportunities.
        </p>
        <UButton
          to="mailto:gabutngoding5@gmail.com"
          size="lg"
          class="relative z-10 inline-flex items-center gap-3 font-bold shadow-lg shadow-primary/20"
          icon="i-lucide-mail"
        >
          Start a Conversation
        </UButton>
      </div>
    </section>
  </div>
</template>
