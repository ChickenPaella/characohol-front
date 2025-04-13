'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTestStore } from '@/stores/useTestStore';
import type { Recommendation } from '@/data/recommendations';

export default function ResultPage() {
    const router = useRouter();
    const { answers, reset } = useTestStore();
    const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

    useEffect(() => {
        if (Object.keys(answers).length === 0) {
            router.push('/');
            return;
        }

        const tagCounts: Record<string, number> = {};
        Object.values(answers).forEach((tag) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });

        const resultTag = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])[0][0];

        fetch(`/api/recommendations/${encodeURIComponent(resultTag)}`)
            .then((res) => res.ok ? res.json() : Promise.reject('Not found'))
            .then((data) => setRecommendation(data))
            .catch(() => router.push('/'));
    }, [answers, router]);

    if (!recommendation) return <p className="text-center mt-10">결과를 불러오는 중...</p>;

    return (
        <div className="max-w-md mx-auto p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">당신의 술 성향은?</h2>
            <p className="text-lg mb-2">{recommendation.message}</p>
            <img
                src={recommendation.imageUrl}
                alt={recommendation.character}
                className="mx-auto w-60 rounded-lg mb-4"
            />
            <p className="text-lg font-semibold">추천 캐릭터: {recommendation.character}</p>
            <p className="mt-2">추천 술: {recommendation.drinks.join(', ')}</p>
            <button
                onClick={() => {
                    reset();
                    router.push('/test');
                }}
                className="mt-6 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full"
            >
                다시하기
            </button>
        </div>
    );
}
