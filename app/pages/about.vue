<script setup lang="ts">
const title = "Tentang Saya";
const description =
  "Pelajari lebih lanjut tentang perjalanan, keterampilan, dan apa yang memotivasi saya sebagai pengembang.";
</script>

<template>
  <div>
    <UPageHero
      :title="title"
      :description="description"
      :links="[
        {
          label: 'Hubungi Saya',
          to: '#contact',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
        {
          label: 'Lihat Proyek',
          to: '/',
          icon: 'i-lucide-folder-open',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    />

    <UPageSection
      title="Siapa Saya"
      description="Pengenalan singkat tentang latar belakang dan semangat saya dalam pengembangan perangkat lunak"
      id="about"
    >
      <div class="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
        <p class="text-lg">
          Hai, saya <span class="font-bold">Alwi</span>, seorang Software Engineer yang
          penuh semangat dalam menciptakan solusi digital. Saya selalu antusias mengeksplorasi teknologi baru dan menyelesaikan tantangan kompleks, yang kemudian
          melahirkan platform ini - tempat saya mendokumentasikan
          dan menampilkan karya-karya profesional saya.
        </p>

        <p>
          Saya mengkhususkan diri dalam pengembangan backend tetapi saya juga
          mampu dalam pengembangan frontend. Meskipun saya cukup nyaman dengan
          teknologi frontend, saya jujur saja - styling CSS yang kompleks bukan
          keahlian terkuat saya. Namun, saya terus belajar dan meningkatkan
          keterampilan saya. Fokus utama dan semangat saya terletak pada
          pengembangan backend, di mana saya menikmati merancang solusi yang
          kuat dan menyelesaikan tantangan sisi server yang kompleks.
        </p>
      </div>
    </UPageSection>

    <UPageSection
      title="Perjalanan Saya"
      description="Bagaimana semangat saya dalam pengembangan perangkat lunak berkembang seiring waktu"
      id="journey"
    >
      <ULandingSection
        :ui="{ wrapper: 'grid grid-cols-1 md:grid-cols-2 gap-12' }"
      >
        <div>
          <h3 class="text-xl font-bold mb-4">Awal Mula</h3>
          <p class="mb-4">
            Perjalanan saya dalam pengembangan perangkat lunak dimulai di waktu
            luang ketika saya memutuskan untuk menjelajahi pemrograman. Apa yang
            awalnya hanya hobi kini telah menjadi semangat yang mendorong saya
            untuk menciptakan solusi-solusi inovatif.
          </p>
          <p>
            Ide Gabut Ngoding awalnya muncul dari keinginan saya untuk mendokumentasikan
            dan berbagi proyek-proyek yang saya buat di waktu senggang. Kini, platform ini
            telah berevolusi menjadi repositori perjalanan pembelajaran dan portofolio
            profesional dari karya-karya saya.
          </p>
        </div>

        <div class="flex justify-center items-center">
          <UAvatar
            :src="'/images/about-me.jpg'"
            :alt="'Tentang Saya'"
            size="2xl"
            class="rounded-lg shadow-lg"
          />
        </div>
      </ULandingSection>
    </UPageSection>

    <UPageSection
      title="Keterampilan & Teknologi"
      description="Teknologi dan alat-alat yang saya gunakan"
      id="skills"
    >
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <UPageCard
          title="Frontend"
          description="Membangun antarmuka yang indah dan responsif"
          variant="subtle"
        >
          <template #header>
            <div class="flex justify-center">
              <UIcon name="i-lucide-monitor" class="h-10 w-10 text-primary" />
            </div>
          </template>
        </UPageCard>

        <UPageCard
          title="Backend"
          description="Pengembangan sisi server dan API"
          variant="subtle"
        >
          <template #header>
            <div class="flex justify-center">
              <UIcon name="i-lucide-server" class="h-10 w-10 text-primary" />
            </div>
          </template>
        </UPageCard>

        <UPageCard
          title="Database"
          description="Penyimpanan dan manajemen data"
          variant="subtle"
        >
          <template #header>
            <div class="flex justify-center">
              <UIcon name="i-lucide-database" class="h-10 w-10 text-primary" />
            </div>
          </template>
        </UPageCard>

        <UPageCard
          title="DevOps"
          description="Deployment dan infrastruktur"
          variant="subtle"
        >
          <template #header>
            <div class="flex justify-center">
              <UIcon name="i-lucide-settings" class="h-10 w-10 text-primary" />
            </div>
          </template>
        </UPageCard>
      </div>
    </UPageSection>

    <UPageSection
      id="contact"
      title="Hubungi Saya"
      description="Punya proyek dalam pikiran atau ingin membicarakan peluang kerja sama? Ayo terhubung!"
    >
      <UPageColumns>
        <UPageCard
          title="Informasi Kontak"
          description="Jangan ragu untuk menghubungi saya melalui saluran-saluran berikut"
          variant="subtle"
        >
          <UButton
            to="https://wa.me/6285156469473"
            target="_blank"
            block
            class="mb-3"
            variant="outline"
            icon="i-simple-icons-whatsapp"
          >
            WhatsApp
          </UButton>

          <UButton
            to="https://t.me/Baiikuzo"
            target="_blank"
            block
            class="mb-3"
            variant="outline"
            icon="i-simple-icons-telegram"
          >
            Telegram
          </UButton>

          <UButton
            to="https://github.com/gabutlabs"
            target="_blank"
            block
            variant="outline"
            icon="i-simple-icons-github"
          >
            GitHub
          </UButton>
        </UPageCard>

        <UPageCard
          title="Mari Berkolaborasi"
          description="Saya selalu terbuka untuk diskusi profesional, peluang freelance, atau kolaborasi pengembangan perangkat lunak."
          variant="subtle"
        >
          <p class="mb-4">
            Baik Anda memiliki aplikasi web, aplikasi mobile, atau proyek
            digital lain dalam pikiran, saya di sini untuk membantu mewujudkan
            ide-ide Anda dengan teknologi modern dan praktik terbaik.
          </p>

          <UButton
            to="mailto:contact@gabutngoding.com"
            block
            color="primary"
            icon="i-lucide-mail"
          >
            Kirim Email
          </UButton>
        </UPageCard>
      </UPageColumns>
    </UPageSection>
  </div>
</template>
