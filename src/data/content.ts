export const navigation = [
  { label: 'コース', href: '#courses' },
  { label: 'CODE QUESTについて', href: '#about' },
  { label: '教室', href: '#learning' },
  { label: '料金', href: '#pricing' },
  { label: 'よくある質問', href: '#faq' },
] as const

export const features = [
  {
    number: '01',
    label: 'PLAY FIRST',
    title: '夢中になれるから、続けられる。',
    description:
      'まずは遊ぶ。ゲームや作品づくりから自然に学習へつなげます。楽しいから続けられる。',
    tone: 'blue',
  },
  {
    number: '02',
    label: 'CREATE',
    title: '自分のアイデアを、カタチに。',
    description:
      '自分で考え、自分でつくる。正解のない問題に挑戦することで、創造力が育ちます。',
    tone: 'purple',
  },
  {
    number: '03',
    label: 'GROW',
    title: '失敗も、成長のチャンス。',
    description:
      '成功も失敗も楽しみながら、論理的思考と問題解決力を自然に身につけます。',
    tone: 'orange',
  },
] as const

export const courses = [
  {
    eyebrow: 'STARTER',
    title: 'Scratch Adventure',
    description: 'ブロックをつなげてゲームやアニメを作ろう！はじめてのプログラミング。',
    tags: ['小学1〜3年生', '初心者OK', 'ゲーム作成'],
    accent: '#4f7df3',
    surface: '#eaf2ff',
    icon: 'blocks',
  },
  {
    eyebrow: 'MOST POPULAR',
    title: 'Minecraft Coding',
    description: 'マイクラの世界でプログラミング！建築と論理思考を同時に学ぶ。',
    tags: ['小学2〜6年生', '人気No.1', '論理思考'],
    accent: '#22a36a',
    surface: '#e6fbf0',
    icon: 'box',
  },
  {
    eyebrow: 'GAME CREATOR',
    title: 'Roblox Creator',
    description: '自分だけのゲームを作って友達に遊んでもらおう！Luaの基礎も学べる。',
    tags: ['小学3〜6年生', 'ゲーム開発', 'Lua入門'],
    accent: '#ff765d',
    surface: '#fff0ed',
    icon: 'gamepad',
  },
  {
    eyebrow: 'DESIGN & CODE',
    title: 'Web Creator',
    description: '自分だけのWebサイトを作ろう！HTML・CSSの基礎からデザインまで。',
    tags: ['小学4〜6年生', 'HTML/CSS', 'デザイン'],
    accent: '#8a5cf6',
    surface: '#f1ebff',
    icon: 'monitor',
  },
  {
    eyebrow: 'NEXT LEVEL',
    title: 'JavaScript Starter',
    description: 'プログラミング言語JavaScriptで本格的なアプリ・ゲームを作ろう！',
    tags: ['小学5〜6年生', '本格入門', 'アプリ開発'],
    accent: '#f4a900',
    surface: '#fff8dd',
    icon: 'code',
  },
] as const

export const journey = [
  { step: '01', label: 'PLAY', title: '遊ぶ', text: '好きなゲームや作品で楽しくスタート' },
  { step: '02', label: 'THINK', title: '考える', text: 'どうすれば動く？自分で考える' },
  { step: '03', label: 'CREATE', title: 'つくる', text: 'コードを書いて実際に作ってみる' },
  { step: '04', label: 'SHARE', title: '伝える', text: '友達や家族に見せて感想をもらう' },
  { step: '05', label: 'LEVEL UP', title: '成長する', text: '次の課題へ！どんどん上達する' },
] as const

export const works = [
  { title: 'オリジナル迷路ゲーム', author: 'たろうくん（小4）', course: 'Scratch', type: 'maze' },
  { title: 'Minecraftの未来都市', author: 'はなちゃん（小5）', course: 'Minecraft Education', type: 'city' },
  { title: '自分のプロフィールサイト', author: 'りくくん（小6）', course: 'Web Creator', type: 'web' },
  { title: 'Robloxミニゲーム', author: 'さくらちゃん（小5）', course: 'Roblox Creator', type: 'game' },
] as const

export const supportPoints = [
  '少人数制（最大8名）で丁寧な指導',
  '経験豊富な専門インストラクター',
  '毎月の制作発表会で自信とプレゼン力を育成',
  'いつでも相談できる保護者向けサポート',
] as const

export const skills = ['論理的思考', '問題解決力', '創造力', 'プレゼン力', '自己探求力'] as const

export const prices = [
  {
    title: '月4回コース',
    price: '9,800',
    featured: false,
    items: ['月4回（週1回）', '1回60分', '少人数制（最大8名）', 'オリジナル教材付き', 'オンライン授業OK'],
  },
  {
    title: '月8回コース',
    price: '16,800',
    featured: true,
    items: [
      '月8回（週2回）',
      '1回60分',
      '少人数制（最大8名）',
      'オリジナル教材付き',
      'オンライン授業OK',
      '制作発表会参加権',
    ],
  },
] as const

export const faqs = [
  {
    question: 'プログラミング未経験でも大丈夫ですか？',
    answer:
      'もちろんです！CODE QUESTは完全初心者からスタートできる設計になっています。ゲームや作品作りを通じて、自然にプログラミングの考え方が身につきます。',
  },
  {
    question: '自宅にパソコンがなくても通えますか？',
    answer:
      '授業中はスクールのPC・タブレットを使用しますので、ご自宅にパソコンがなくても大丈夫です。ご自宅で練習したい場合はご相談ください。',
  },
  {
    question: 'オンライン授業は可能ですか？',
    answer:
      'はい、全コースでオンライン授業（Zoom）をご用意しています。ご自宅から受講できますので、遠方の方もお気軽にお申し込みください。',
  },
  {
    question: '途中でコースを変更できますか？',
    answer:
      'はい、月単位でコースの変更・レベル変更が可能です。お子さまの成長や興味の変化に合わせて柔軟に対応します。',
  },
  {
    question: '無料体験はどんな内容ですか？',
    answer:
      '60分間の実際の授業を体験できます。当日はゲームや簡単な作品作りに挑戦！体験後はコースのご案内もさせていただきます。',
  },
] as const
