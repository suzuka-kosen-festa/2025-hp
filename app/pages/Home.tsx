import type { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-8 p-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          高専祭2025
        </h1>
        <div className="w-full max-w-4xl">
          <iframe
            src="/高専祭2025ポスター.pdf"
            className="h-[80vh] w-full rounded-lg border border-gray-300 shadow-lg dark:border-gray-600"
            title="高専祭2025ポスター"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ポスターをクリックして拡大表示できます
        </p>
      </div>
    </div>
  );
};

export default Home;
