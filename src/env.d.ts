/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
