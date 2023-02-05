import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  vite: {
    plugins: [
      Icons({
        jsx: 'preact',
        compiler: 'jsx',
        customCollections: {
          'games': FileSystemIconLoader('./public/icons')
        }
      }),
      AutoImport({
        imports: [
          'preact'
        ],
        resolvers: [
          IconsResolver({
            prefix: 'icon',
            extension: 'jsx',
            customCollections: [
              'games'
            ]
          })
        ]
      })
    ],
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [preact({ compat: true })]
});