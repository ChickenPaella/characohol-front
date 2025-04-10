'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">애니 캐릭터와 함께하는 술 성향 테스트!</h1>
          <button
              className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full"
              onClick={() => router.push('/test')}
          >
            시작!
          </button>
        </div>
      </main>
  );
}
