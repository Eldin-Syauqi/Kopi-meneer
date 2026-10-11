interface ImportMetaEnv {
  readonly VITE_BACKENDLESS_APP_ID?: string;
  readonly VITE_BACKENDLESS_API_KEY?: string;
  readonly VITE_CONTENTFUL_SPACE_ID?: string;
  readonly VITE_CONTENTFUL_ACCESS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
