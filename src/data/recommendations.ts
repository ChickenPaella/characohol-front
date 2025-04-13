export const recommendations = {
    '조용한': {
        character: '신지 (에반게리온)',
        drinks: ['사케', '하이볼', '말린자몽소주'],
        imageUrl: '/characters/shinji.png',
        message: '혼자 있는 걸 즐기며 술의 분위기를 깊이 음미하는 타입!',
    },
    '사교적': {
        character: '나루토',
        drinks: ['카시스 오렌지', '청하', '레몬 사와'],
        imageUrl: '/characters/naruto.png',
        message: '사람들과 어울리며 밝은 분위기를 만드는 파티형!',
    },
    '진지한': {
        character: '키리토 (소드 아트 온라인)',
        drinks: ['보드카 마티니', '위스키 하이볼', '크래프트 진'],
        imageUrl: '/characters/kirito.png',
        message: '술도 철학도 깊게 빠져드는 진지한 분위기의 당신!',
    },
    '감성적': {
        character: '바이올렛 에버가든',
        drinks: ['로제 와인', '플럼 와인', '사쿠라 칵테일'],
        imageUrl: '/characters/violet.png',
        message: '분위기와 감정을 술에 녹여내는 낭만주의자!',
    },
    '부드러운': {
        character: 'C.C. (코드기어스)',
        drinks: ['아마레또', '하이볼', '매실주'],
        imageUrl: '/characters/cc.png',
        message: '은근한 부드러움과 함께 조용한 술자리를 즐길 타입!',
    },
    '강한': {
        character: '이누야샤',
        drinks: ['위스키', '소주 스트레이트', '진토닉'],
        imageUrl: '/characters/inuyasha.png',
        message: '강한 술을 마시며 뜨거운 이야기를 나누고 싶은 당신!',
    },
    '깔끔한': {
        character: '카구야 (카구야 님은 고백받고 싶어)',
        drinks: ['샴페인', '진토닉', '화이트 와인'],
        imageUrl: '/characters/kaguya.png',
        message: '깔끔하고 단정한 취향, 우아한 분위기를 좋아하는 타입!',
    },
    '향긋한': {
        character: '카스미가오카 우타하 (시원찮은 그녀를 위한 육성방법)',
        drinks: ['복숭아 칵테일', '리큐르', '플로럴 진'],
        imageUrl: '/characters/utaha.png',
        message: '은은한 향기처럼 매력적인 당신의 취향을 위한 술!',
    },
} as const

export type RecommendationTag = keyof typeof recommendations;
export type Recommendation = (typeof recommendations)[RecommendationTag];