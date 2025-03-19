import type { FolderItem, FileItem } from "../types/directoryTypes";

export const directory = [
  {
    name: "Documents",
    type: "folder",
    children: [
      {
        name: "Work",
        type: "folder",
        children: [
          {
            name: "Project A",
            type: "folder",
            children: [
              {
                name: "requirements.txt",
                type: "file",
                size: 1024,
                modified: "2025-02-15T10:23:15Z",
              },
              {
                name: "proposal.docx",
                type: "file",
                size: 2048576,
                modified: "2025-02-18T14:30:22Z",
              },
              {
                name: "design_document.pdf",
                type: "file",
                size: 5242880,
                modified: "2025-03-01T11:12:00Z",
              },
              {
                name: "project_plan.xlsx",
                type: "file",
                size: 1048576,
                modified: "2025-02-25T16:45:10Z",
              },
              {
                name: "notes.txt",
                type: "file",
                size: 5120,
                modified: "2025-03-02T10:50:00Z",
              },
            ],
          },
          {
            name: "meeting_notes.md",
            type: "file",
            size: 5120,
            modified: "2025-03-01T09:15:00Z",
          },
          {
            name: "status_report.docx",
            type: "file",
            size: 2097152,
            modified: "2025-02-28T14:00:10Z",
          },
        ],
      },
      {
        name: "Personal",
        type: "folder",
        children: [
          {
            name: "vacation_photos",
            type: "folder",
            children: [
              {
                name: "beach.jpg",
                type: "file",
                size: 4194304,
                modified: "2025-01-05T18:22:33Z",
              },
              {
                name: "mountains.jpg",
                type: "file",
                size: 3145728,
                modified: "2025-01-05T18:23:10Z",
              },
              {
                name: "cityscape.jpg",
                type: "file",
                size: 5242880,
                modified: "2025-01-06T10:10:15Z",
              },
              {
                name: "lake_view.jpg",
                type: "file",
                size: 3145728,
                modified: "2025-01-06T11:05:32Z",
              },
            ],
          },
          {
            name: "resume.pdf",
            type: "file",
            size: 512000,
            modified: "2025-02-28T20:15:44Z",
          },
          {
            name: "birthday_invitation.docx",
            type: "file",
            size: 1048576,
            modified: "2025-02-20T15:25:30Z",
          },
        ],
      },
    ],
  },
  {
    name: "Downloads",
    type: "folder",
    children: [
      {
        name: "installation.exe",
        type: "file",
        size: 15728640,
        modified: "2025-03-10T12:45:30Z",
      },
      {
        name: "dataset.csv",
        type: "file",
        size: 8388608,
        modified: "2025-03-12T08:30:15Z",
      },
      {
        name: "software_update.zip",
        type: "file",
        size: 10485760,
        modified: "2025-03-14T14:00:00Z",
      },
      {
        name: "game_patch.rar",
        type: "file",
        size: 20971520,
        modified: "2025-03-15T09:50:00Z",
      },
    ],
  },
  {
    name: "config.json",
    type: "file",
    size: 2048,
    modified: "2025-01-01T00:00:00Z",
  },
  {
    name: "AppData",
    type: "folder",
    children: [
      {
        name: "logs",
        type: "folder",
        children: [
          {
            name: "error_log.txt",
            type: "file",
            size: 10240,
            modified: "2025-03-12T07:30:15Z",
          },
          {
            name: "debug_log.txt",
            type: "file",
            size: 5120,
            modified: "2025-03-13T09:15:45Z",
          },
        ],
      },
      {
        name: "cache",
        type: "folder",
        children: [
          {
            name: "temp_file_1.tmp",
            type: "file",
            size: 8192,
            modified: "2025-03-13T14:00:20Z",
          },
          {
            name: "temp_file_2.tmp",
            type: "file",
            size: 4096,
            modified: "2025-03-13T14:01:00Z",
          },
        ],
      },
    ],
  },
] as Array<FolderItem | FileItem>;
