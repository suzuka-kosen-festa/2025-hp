import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    // パフォーマンス最適化の設定
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
    // チャンクサイズの警告を無効化
    chunkSizeWarningLimit: 1000,
  },
  // 開発サーバーの設定
  server: {
    hmr: {
      overlay: false,
    },
  },
});
