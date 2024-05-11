export{}

type Prefectures = 'Tokyo' | 'Chiba' | 'Osaka';

type Covid19 = {
  kanji_name: string;
  people: number;
}

const covid19Japan: Record<Prefectures, Covid19> = {
  Tokyo: {kanji_name: '東京', people: 5000},
  Chiba: {kanji_name: '千葉', people: 5000},
  Osaka: {kanji_name: '大阪', people: 5000}
}
