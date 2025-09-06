import { useEffect } from "react";
import type { FC } from "react";

const Home: FC = () => {
  useEffect(() => {
    // ページ読み込み時にPDFにリダイレクト
    window.location.href = "/高専祭2025ポスター.pdf";
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-8 p-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          高専祭2025
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          ポスターを表示しています...
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    </div>
  );
};

export default Home;
