<script setup lang="ts">
import { computed } from "vue";
import { formatDate, getFileSizeWithUnits } from "../utils/helper";

const props = defineProps<{
  name: string;
  size: number;
  modified: string;
}>();

const dateModified = computed(() => {
  return formatDate(props.modified);
});
const fileSize = computed(() => {
  return getFileSizeWithUnits(props.size);
});
</script>

<template>
  <div
    class="text-blue-700 hover:text-blue-500 flex justify-start items-center gap-x-4"
  >
    <span>{{ name }}</span>
    <span>{{ fileSize }}</span>
    <span>{{ dateModified }}</span>
  </div>
</template>

<style scoped></style>
