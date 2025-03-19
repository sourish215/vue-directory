export enum ItemType {
  Folder = "folder",
  File = "file",
}

export interface FolderItem {
  name: string;
  type: ItemType;
  children: Array<FolderItem | FileItem>;
}

export interface FileItem {
  name: string;
  type: ItemType;
  size: number;
  modified: string;
}
