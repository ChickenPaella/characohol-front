'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/result');
        }, 2500);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center px-4">
            <h2 className="text-xl font-semibold mb-4">결과를 분석 중입니다...</h2>
            <img
                src="/mock-loading-scene.png"
                alt="기대하는 캐릭터 이미지"
                className="w-64 h-auto rounded shadow"
            />
            <div className="w-full max-w-sm mt-6">
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-pink-400 animate-pulse w-full" />
                </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">기대되는 결과를 준비 중이에요...</p>
        </div>
    );
}
