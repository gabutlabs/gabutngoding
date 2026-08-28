<script setup lang="ts">
definePageMeta({
  title: 'Kontak | gabutngoding',
  description:
    'Mari terhubung untuk membicarakan ide, kolaborasi, atau proyek berikutnya.'
})

const emailAddress = 'gabutngoding5@gmail.com'
const copyState = ref<'idle' | 'copied' | 'error'>('idle')
let copyResetTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  if (!navigator.clipboard) {
    copyState.value = 'error'
    return
  }

  try {
    await navigator.clipboard.writeText(emailAddress)
    copyState.value = 'copied'
  } catch {
    copyState.value = 'error'
  }

  if (copyResetTimer) {
    window.clearTimeout(copyResetTimer)
  }

  copyResetTimer = window.setTimeout(() => {
    copyState.value = 'idle'
  }, 2200)
}

onBeforeUnmount(() => {
  if (copyResetTimer) {
    window.clearTimeout(copyResetTimer)
  }
})
</script>

<template>
  <div class="relative overflow-hidden antialiased">
    <div
      class="pointer-events-none absolute -right-48 top-16 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -left-56 top-[520px] h-[360px] w-[360px] rounded-full bg-tertiary/10 blur-3xl"
    />

    <main class="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
      <section class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <div
            class="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold tracking-[0.12em] text-primary"
          >
            <span class="h-2 w-2 animate-pulse rounded-full bg-primary" />
            STATUS: SIAP BERKOLABORASI
          </div>

          <h1
            class="max-w-2xl text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-on-surface md:text-[64px]"
          >
            Mari bangun sesuatu yang
            <span class="text-primary">berguna.</span>
          </h1>

          <p
            class="mt-7 max-w-xl text-lg leading-relaxed text-on-surface-variant"
          >
            Punya ide, masalah teknis, atau sekadar ingin bertukar pikiran?
            Ceritakan saja konteksnya. Tidak harus sudah punya brief yang
            sempurna untuk memulai percakapan.
          </p>

          <div class="mt-9 grid max-w-xl grid-cols-2 gap-3">
            <div
              class="rounded-xl border border-outline-variant/20 bg-surface-container-low p-4"
            >
              <div class="mb-2 text-xs font-bold tracking-[0.12em] text-primary">
                FOKUS
              </div>
              <div class="text-sm font-medium text-on-surface">
                Backend &amp; web
              </div>
            </div>
            <div
              class="rounded-xl border border-outline-variant/20 bg-surface-container-low p-4"
            >
              <div class="mb-2 text-xs font-bold tracking-[0.12em] text-primary">
                MODE
              </div>
              <div class="text-sm font-medium text-on-surface">
                Remote-friendly
              </div>
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-2xl shadow-primary/5"
        >
          <div
            class="flex h-11 items-center gap-2 border-b border-outline-variant/20 bg-surface-container-high px-4"
          >
            <span class="h-3 w-3 rounded-full bg-error" />
            <span class="h-3 w-3 rounded-full bg-[#facc15]" />
            <span class="h-3 w-3 rounded-full bg-primary" />
            <span
              class="ml-3 truncate font-mono text-xs text-on-surface-variant"
            >
              ~/gabutngoding/connect.sh
            </span>
          </div>

          <div class="relative p-6 font-mono text-sm leading-8 md:p-8">
            <div class="text-on-surface-variant">
              <span class="text-primary">$</span> ./connect.sh
            </div>
            <div class="mt-5 border-l border-primary/30 pl-4 text-on-surface-variant">
              <div>
                <span class="text-primary">status</span>:
                <span class="text-[#facc15]">"open_to_ideas"</span>
              </div>
              <div>
                <span class="text-primary">channels</span>:
                <span class="text-[#facc15]">["email", "social"]</span>
              </div>
              <div>
                <span class="text-primary">reply</span>:
                <span class="text-[#facc15]">"human, not automated"</span>
              </div>
              <div>
                <span class="text-primary">next_step</span>:
                <span class="text-[#facc15]">"start a conversation"</span>
              </div>
            </div>
            <div class="mt-6 flex items-center gap-2 text-primary">
              <span class="h-2 w-2 animate-pulse rounded-full bg-primary" />
              connection_ready
            </div>
          </div>

          <div
            class="pointer-events-none absolute -bottom-24 -right-16 h-48 w-48 rounded-full border border-primary/20"
          />
          <div
            class="pointer-events-none absolute -bottom-16 -right-8 h-32 w-32 rounded-full border border-primary/20"
          />
        </div>
      </section>

      <section
        id="connect"
        class="mx-1 mt-28 md:mx-2 md:mt-36"
      >
        <div class="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:mb-12">
          <div>
            <div class="mb-3 text-xs font-bold tracking-[0.14em] text-primary">
              01 / PILIH JALUR
            </div>
            <h2
              class="text-[28px] font-bold leading-tight tracking-[-0.02em] text-on-surface md:text-[40px]"
            >
              Terhubung dengan cara yang nyaman.
            </h2>
          </div>
          <p class="max-w-sm leading-relaxed text-on-surface-variant md:text-right">
            Belum ada mail sender di sini—gunakan kanal pilihanmu, dan kita
            lanjutkan dari sana.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            class="group rounded-2xl border border-primary/30 bg-surface-container-low p-6 transition-colors hover:border-primary/70 hover:bg-surface-container"
          >
            <div class="mb-8 flex items-start justify-between">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary"
              >
                <UIcon
                  name="i-lucide-mail"
                  class="h-5 w-5"
                />
              </div>
              <span class="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                UTAMA
              </span>
            </div>
            <h3 class="mb-2 text-lg font-bold text-on-surface">
              Email langsung
            </h3>
            <p class="mb-5 break-all text-sm leading-relaxed text-on-surface-variant">
              {{ emailAddress }}
            </p>
            <button
              type="button"
              class="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              @click="copyEmail"
            >
              <UIcon
                :name="copyState === 'copied' ? 'i-lucide-check' : 'i-lucide-copy'"
                class="h-4 w-4"
              />
              <span v-if="copyState === 'copied'">Email tersalin</span>
              <span v-else-if="copyState === 'error'">Salin manual</span>
              <span v-else>Salin alamat email</span>
            </button>
            <span
              class="sr-only"
              aria-live="polite"
            >
              {{ copyState === 'copied' ? 'Alamat email berhasil disalin' : '' }}
            </span>
          </div>

          <a
            href="https://github.com/gabutlabs"
            target="_blank"
            rel="noreferrer"
            class="group rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6 transition-colors hover:border-primary/60 hover:bg-surface-container"
          >
            <div
              class="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high text-on-surface transition-colors group-hover:text-primary"
            >
              <UIcon
                name="i-simple-icons-github"
                class="h-5 w-5"
              />
            </div>
            <h3 class="mb-2 text-lg font-bold text-on-surface">GitHub</h3>
            <p class="text-sm leading-relaxed text-on-surface-variant">
              Lihat proyek, eksperimen, dan kode yang sedang dirawat.
            </p>
            <div class="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
              Buka profil
              <UIcon
                name="i-lucide-arrow-up-right"
                class="h-4 w-4"
              />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-baidhowi-alwi-5a41b01b7"
            target="_blank"
            rel="noreferrer"
            class="group rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6 transition-colors hover:border-primary/60 hover:bg-surface-container"
          >
            <div
              class="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high text-on-surface transition-colors group-hover:text-primary"
            >
              <UIcon
                name="i-simple-icons-linkedin"
                class="h-5 w-5"
              />
            </div>
            <h3 class="mb-2 text-lg font-bold text-on-surface">LinkedIn</h3>
            <p class="text-sm leading-relaxed text-on-surface-variant">
              Terhubung untuk peluang kerja dan kolaborasi profesional.
            </p>
            <div class="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
              Buka profil
              <UIcon
                name="i-lucide-arrow-up-right"
                class="h-4 w-4"
              />
            </div>
          </a>

          <div
            class="group rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6 transition-colors hover:border-primary/60 hover:bg-surface-container"
          >
            <div
              class="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high text-on-surface transition-colors group-hover:text-primary"
            >
              <UIcon
                name="i-lucide-briefcase-business"
                class="h-5 w-5"
              />
            </div>
            <h3 class="mb-2 text-lg font-bold text-on-surface">
              Freelance
            </h3>
            <p class="text-sm leading-relaxed text-on-surface-variant">
              Mulai proyek web yang lebih terstruktur melalui platform freelance.
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              <a
                href="https://www.sribu.com/id/users/baidhowi.alwi/professional-web-development-8b1d3873-5fd3-4bff-8650-94688e92fbba"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant/30 px-3 py-2 text-sm font-bold text-primary transition-colors hover:border-primary hover:text-on-surface"
              >
                Sribu
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="h-4 w-4"
                />
              </a>
              <a
                href="https://fastwork.id/byob/Wyt6y2YpJ8?openExternalBrowser=1&source=byob"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant/30 px-3 py-2 text-sm font-bold text-primary transition-colors hover:border-primary hover:text-on-surface"
              >
                Fastwork
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="h-4 w-4"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-2 mt-10 md:mx-6 md:mt-12 lg:mx-10">
        <div
          class="relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-highest p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-12 lg:p-14"
        >
          <div class="relative z-10 max-w-2xl md:pr-4">
            <div class="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-primary">
              <UIcon
                name="i-lucide-sparkles"
                class="h-4 w-4"
              />
              02 / MULAI DARI YANG ADA
            </div>
            <h2 class="mb-3 text-2xl font-bold text-on-surface md:text-3xl">
              Tidak perlu menunggu ide yang sempurna.
            </h2>
            <p class="leading-relaxed text-on-surface-variant">
              Satu kalimat tentang kebutuhanmu sudah cukup untuk memulai.
              Sisanya bisa kita pecah menjadi langkah-langkah kecil yang jelas.
            </p>
          </div>
          <UButton
            to="/#portfolio"
            size="lg"
            class="relative z-10 mt-7 shrink-0 font-bold md:mt-0"
            trailing-icon="i-lucide-arrow-right"
          >
            Lihat karya dulu
          </UButton>
          <div
            class="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border border-primary/20"
          />
          <div
            class="pointer-events-none absolute -right-2 -top-12 h-40 w-40 rounded-full border border-primary/20"
          />
        </div>
      </section>
    </main>
  </div>
</template>
