<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
</script>
<template>
  <v-app :class="theme.current.value.dark ? 'dark' : ''">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
