import { NextResponse } from 'next/server';
import { recommendations } from '@/data/recommendations';

export async function GET(req: Request, { params }: { params: { type: string } }) {
    const { type } = params;
    const result = recommendations[type as keyof typeof recommendations];
    if (!result) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(result);
}
