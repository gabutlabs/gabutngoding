<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  priority?: boolean
}>()

const previewDialog = ref<HTMLDialogElement | null>(null)

function openPreview() {
  previewDialog.value?.showModal()
}

function closePreview() {
  previewDialog.value?.close()
}
</script>

<template>
  <figure class="aspect-[2/1] overflow-hidden bg-surface-container">
    <button
      type="button"
      class="group relative block h-full w-full cursor-zoom-in focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      :aria-label="`Enlarge ${alt}`"
      @click="openPreview"
    >
      <img
        :src="src"
        :alt="alt"
        width="2940"
        height="1450"
        :loading="priority ? 'eager' : 'lazy'"
        :fetchpriority="priority ? 'high' : 'auto'"
        decoding="async"
        class="h-full w-full object-contain"
      >
      <span
        aria-hidden="true"
        class="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-surface-container-high px-3 py-2 text-sm font-medium text-on-surface shadow-sm"
      >
        <UIcon name="i-lucide-expand" class="h-4 w-4" />
        Enlarge
      </span>
    </button>
  </figure>

  <dialog
    ref="previewDialog"
    :aria-label="alt"
    class="m-auto max-h-[92dvh] max-w-[95vw] overflow-visible border-0 bg-transparent p-0 backdrop:bg-black/80"
    @click.self="closePreview"
  >
    <div class="relative">
      <img
        :src="src"
        :alt="alt"
        width="2940"
        height="1450"
        decoding="async"
        class="max-h-[88dvh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
      >
      <button
        type="button"
        class="absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-full bg-surface-container-high text-on-surface shadow-sm transition-colors hover:bg-surface-container-highest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="Close image preview"
        @click="closePreview"
      >
        <UIcon name="i-lucide-x" aria-hidden="true" class="h-5 w-5" />
      </button>
    </div>
  </dialog>
</template>
