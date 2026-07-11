<script setup lang="ts">
definePageMeta({
  title: 'Contact | gabutngoding',
  description: 'Got a project idea or just want to say hi? Drop a message.'
})

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  window.open(
    `mailto:gabutngoding5@gmail.com?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0A--%0A${form.name}%0A${form.email}`,
    '_blank'
  )
}
</script>

<template>
  <div class="flex min-h-[calc(100vh-128px)] items-center justify-center px-6 py-16 antialiased md:px-8 md:py-24">
    <div class="relative z-10 grid w-full max-w-[800px] gap-6 md:grid-cols-2">
      <!-- Left -->
      <div class="flex flex-col justify-center space-y-6">
        <div>
          <h1
            class="mb-2 text-[28px] font-bold leading-[36px] tracking-tight text-primary md:text-[48px] md:leading-[56px] md:tracking-[-0.02em]"
          >
            Let's talk code.
          </h1>
          <p class="leading-relaxed text-on-surface-variant">
            Got a project idea, a bug that's keeping you awake, or just want to
            say hi? Drop a message. I'm usually around unless I'm aggressively
            resting.
          </p>
        </div>

        <div class="space-y-4">
          <a
            href="mailto:gabutngoding5@gmail.com"
            class="group flex items-center gap-3 text-secondary-fixed transition-colors hover:text-primary"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded border border-secondary-fixed/10 bg-surface-container-high transition-colors group-hover:border-primary/50"
            >
              <UIcon name="i-lucide-mail" class="h-5 w-5 text-primary" />
            </div>
            <span class="text-[13px] leading-[18px]">gabutngoding5@gmail.com</span>
          </a>

          <div class="flex gap-4 pt-2">
            <a
              href="https://github.com/gabutlabs"
              target="_blank"
              class="flex h-10 w-10 items-center justify-center rounded border border-secondary-fixed/10 bg-surface-container-high transition-colors hover:border-primary hover:text-primary"
            >
              <UIcon name="i-simple-icons-github" class="h-5 w-5" />
            </a>
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded border border-secondary-fixed/10 bg-surface-container-high transition-colors hover:border-primary hover:text-primary"
            >
              <UIcon name="i-simple-icons-linkedin" class="h-5 w-5" />
            </a>
            <a
              href="https://www.sribu.com/id/users/baidhowi.alwi/professional-web-development-8b1d3873-5fd3-4bff-8650-94688e92fbba"
              target="_blank"
              class="flex h-10 w-10 items-center justify-center rounded border border-secondary-fixed/10 bg-surface-container-high transition-colors hover:border-primary hover:text-primary"
            >
              <UIcon name="i-lucide-briefcase" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Right Form -->
      <div
        class="relative overflow-hidden rounded-xl border border-secondary-fixed/10 bg-surface-variant p-6 md:p-8"
      >
        <div
          class="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        />

        <form
          class="relative z-10 flex flex-col gap-5"
          @submit.prevent="handleSubmit"
        >
          <div class="flex flex-col gap-1">
            <label
              class="text-sm font-medium tracking-[0.02em] text-on-surface-variant"
              for="name"
            >
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              class="rounded border border-secondary-fixed/10 bg-surface-container-low px-4 py-3 leading-relaxed text-on-surface transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
          </div>

          <div class="flex flex-col gap-1">
            <label
              class="text-sm font-medium tracking-[0.02em] text-on-surface-variant"
              for="email"
            >
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="john@example.com"
              class="rounded border border-secondary-fixed/10 bg-surface-container-low px-4 py-3 leading-relaxed text-on-surface transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
          </div>

          <div class="flex flex-col gap-1">
            <label
              class="text-sm font-medium tracking-[0.02em] text-on-surface-variant"
              for="message"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="What's on your mind?"
              rows="4"
              class="resize-none rounded border border-secondary-fixed/10 bg-surface-container-low px-4 py-3 leading-relaxed text-on-surface transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <UButton
            type="submit"
            size="lg"
            block
            class="mt-2 font-bold"
            trailing-icon="i-lucide-send"
          >
            Send Message
          </UButton>
        </form>
      </div>
    </div>
  </div>
</template>
