'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTestStore } from '@/stores/useTestStore';

export default function ResultPage() {
    const router = useRouter();
    const { answers, reset } = useTestStore();
    const [recommendation, setRecommendation] = useState<any>(null);

    const resultTag = useMemo(() => {
        const counts: Record<string, number> = {};
        Object.values(answers).forEach((tag) => {
            counts[tag] = (counts[tag] || 0) + 1;
        });
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        return sorted[0]?.[0];
    }, [answers]);

    useEffect(() => {
        if (!resultTag) {
            router.push('/');
        } else {
            fetch(`/api/recommendations/${encodeURIComponent(resultTag)}`)
                .then((res) => res.json())
                .then(setRecommendation);
        }
    }, [resultTag, router]);

    if (!recommendation) {
        return <div className="text-center mt-20">결과를 불러오는 중...</div>;
    }

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
