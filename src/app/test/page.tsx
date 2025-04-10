'use client';

import { useRouter } from 'next/navigation';
import { useTestStore } from '@/stores/useTestStore';
import { questions } from '@/data/questions';

export default function TestPage() {
    const router = useRouter();
    const { currentStep, setAnswer, goNext, goPrev } = useTestStore();
    const question = questions[currentStep];

    const handleChoice = (tag: string) => {
        setAnswer(currentStep, tag);
        if (currentStep + 1 < questions.length) {
            goNext();
        } else {
            router.push('/loading');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
            {question ? (
                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
                    <ul className="space-y-2">
                        {question.choices.map(({ label, tag }) => (
                            <li key={tag}>
                                <button
                                    className="w-full py-2 px-4 bg-pink-100 hover:bg-pink-300 rounded"
                                    onClick={() => handleChoice(tag)}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {currentStep > 0 && (
                        <button
                            onClick={goPrev}
                            className="mt-4 text-sm text-gray-500 hover:underline"
                        >
                            이전으로
                        </button>
                    )}
                </div>
            ) : (
                <p>질문을 불러오는 중...</p>
            )}
        </div>
    );
}
