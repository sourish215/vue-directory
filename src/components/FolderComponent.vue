<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  type FolderItem,
  type FileItem,
  ItemType,
} from "../types/directoryTypes";
import FileComponent from "./FileComponent.vue";

const props = defineProps<{
  name: string;
  children: Array<FolderItem | FileItem>;
  isOpen: boolean;
}>();

const show = ref(false);
const folderClass = computed(() => {
  return props.children.length ? "cursor-pointer hover:text-gray-600" : "";
});

function handleFolderClick() {
  show.value = !show.value;
}

watch(
  () => props.isOpen,
  (newValue) => {
    if (!newValue) {
      show.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <div class="text-black" :class="folderClass" @click="handleFolderClick">
      {{ name }}
      <span className="text-gray-500 pl-2 text-sm">
        {{ children.length }} items
      </span>
    </div>
    <div class="pl-5" v-if="show">
      <div v-for="child in children" :key="child.name">
        <FolderComponent
          v-if="child.type === ItemType.Folder"
          :name="child.name"
          :children="(child as FolderItem).children"
          :isOpen="show"
        />
        <FileComponent
          v-if="child.type === ItemType.File"
          :name="child.name"
          :size="(child as FileItem).size"
          :modified="(child as FileItem).modified"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
