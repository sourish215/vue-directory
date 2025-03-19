<script setup lang="ts">
import { computed, ref } from "vue";
import {
  ItemType,
  type FileItem,
  type FolderItem,
} from "../types/directoryTypes";
import { directory } from "../data/dummyData";
import FolderComponent from "./FolderComponent.vue";
import FileComponent from "./FileComponent.vue";

const show = ref(false);

const rootFolderClass = computed(() => {
  return directory.length ? "cursor-pointer hover:text-gray-600" : "";
});

function toggleShow() {
  show.value = !show.value;
}
</script>

<template>
  <div>
    <div :class="rootFolderClass" @click="toggleShow">
      /
      <span className="text-gray-500 pl-2 text-sm">
        {{ directory.length }} items
      </span>
    </div>
    <div class="pl-5" v-if="show">
      <div v-for="item in directory" :key="item.name">
        <FolderComponent
          v-if="item.type === ItemType.Folder"
          :name="item.name"
          :children="(item as FolderItem).children"
          :isOpen="show"
        />
        <FileComponent
          v-if="item.type === ItemType.File"
          :name="item.name"
          :size="(item as FileItem).size"
          :modified="(item as FileItem).modified"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
