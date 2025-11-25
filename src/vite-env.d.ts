/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WIDGET_API_URL: string;
  readonly VITE_WIDGET_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
