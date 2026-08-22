// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 公開後に独自ドメインへ切り替えるときは、ここを自分のURLに書き換える
  site: 'https://shin-writingskill.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
