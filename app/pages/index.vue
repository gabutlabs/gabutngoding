<script setup lang="ts">
// Beri ID unik untuk :key dan tambahkan 'url' untuk tombol demo/github
const { data: projects, pending } = await useAsyncData("home-projects", () => {
  return queryCollection("projects").limit(3).all();
});
</script>

<template>
  <div>
    <UPageHero
      title="Selamat Datang di Gabut Ngoding"
      description="Gabut Ngoding merupakan sebuah website tempat saya menaruh semua hasil project gabut saya"
      :links="[
        {
          label: 'Lihat Semua Produk',
          to: '/project', // <-- OPTIMASI KONTEN: Link ke section project
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
        {
          label: 'GitHub Saya',
          to: 'https://github.com/gabutlabs', // <-- OPTIMASI KONTEN: Ganti dengan GitHub Anda
          target: '_blank',
          icon: 'i-simple-icons-github',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    />

    <UPageSection
      id="features"
      title="PRODUK PILIHAN"
      description="Berikut ini adalah hasil produk yang saya buat ketika senggang, belajar, atau gabut ingin membuat sesuatu"
    >
      <UPageColumns>
        <template v-if="!pending">
          <UPageCard
            v-for="(project, index) in projects"
            :key="index"
            variant="subtle"
            :description="project.description"
            :title="project.project_name"
          >
            <template #header>
              <img
                :src="project.image"
                :alt="project.project_name"
                class="w-full h-48 object-cover"
              />
            </template>
            <template #footer>
              <UButton
                :to="project.url"
                target="_blank"
                label="Lihat Detail"
                :trailing="true"
                icon="i-lucide-external-link"
                variant="subtle"
              />
            </template>
          </UPageCard>
        </template>
      </UPageColumns>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Tertarik untuk Bekerja Sama?"
        description="Saya terbuka untuk proyek freelance, pembuatan aplikasi kustom, atau penjualan source code. Jangan ragu hubungi saya melalui tombol di bawah ini."
        variant="subtle"
        :links="[
          {
            label: 'Whatsapp',
            to: 'https://wa.me/6285156469473', // <-- Ganti nomor Anda
            target: '_blank',
            trailingIcon: 'i-simple-icons-whatsapp',
          },
          {
            label: 'Telegram',
            to: 'https://t.me/Baiikuzo', // <-- Ganti username Anda
            target: '_blank',
            icon: 'i-simple-icons-telegram',
            color: 'neutral',
            variant: 'outline',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
