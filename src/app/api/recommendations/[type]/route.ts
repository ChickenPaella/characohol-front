import { NextRequest, NextResponse } from 'next/server';
import { recommendations } from '@/data/recommendations';

type Props = {
    params: Promise<{
        type: keyof typeof recommendations
    }>
}

export async function GET(
    req: NextRequest,
    props: Props
) {
    const params = await props.params;

    const result = recommendations[params.type];
    return NextResponse.json(result);
}
