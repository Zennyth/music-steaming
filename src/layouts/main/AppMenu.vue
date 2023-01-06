<template>
  <div class="layout-menu">
    <router-link :to="{ name: 'home' }" class="layout-menu_link">
      <i class="pi pi-home"></i>
      <span>Home</span>
    </router-link>

    <router-link :to="{ name: 'home' }" class="layout-menu_link">
      <i class="pi pi-search"></i>
      <span>Search</span>
    </router-link>

    <GooeyButton>
      <router-link :to="{ name: 'match' }" class="layout-menu_link">
        <i class="pi pi-bolt" style="font-size: 1.75rem;"></i>
        <span></span>
      </router-link>
    </GooeyButton>

    <router-link :to="{ name: 'playlists' }" class="layout-menu_link">
      <i class="pi pi-bookmark"></i>
      <span>Playlists</span>
    </router-link>

    <router-link :to="{ name: 'home' }" class="layout-menu_link">
      <i class="pi pi-user"></i>
      <span>Profil</span>
    </router-link>
  </div>
</template>

<script setup>
import GooeyButton from '@/components/shared/buttons/GooeyButton.vue';
</script>