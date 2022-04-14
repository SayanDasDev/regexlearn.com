const regex101 = [
  {
    title: 'lesson.regexForSeo.starter.title',
    description: 'lesson.regexForSeo.starter.description',
    content: 'Understand? OK or NOT',
    initialFlags: 'g',
    flags: 'g',
    regex: ['OK'],
    answer: ['OK'],
  },
  {
    title: 'lesson.regexForSeo.usage.title',
    description: 'lesson.regexForSeo.usage.description',
    content: 'Google Analitycs\nGoogle Data Studio\nGoogle Sheets\nGoogle Search Console\nAhrefs',
    initialFlags: 'gm',
    initialValue: '^Google',
    cursorPosition: 7,
    flags: 'gm',
    regex: ['^Google'],
    answer: ['Google', 'Google', 'Google', 'Google'],
  },
  {
    title: 'lesson.regexForSeo.basics.title',
    description: 'lesson.regexForSeo.basics.description',
    content: 'Yes or No?',
    initialFlags: 'g',
    flags: 'g',
    regex: ['Yes'],
    answer: ['Yes'],
  },
  {
    title: 'lesson.regexForSeo.or.title',
    description: 'lesson.regexForSeo.or.description',
    content: 'regex\nseo\nregular expression',
    initialFlags: 'g',
    flags: 'g',
    regex: ['seo|regex', 'regex|seo'],
    answer: ['seo', 'regex'],
  },
  {
    title: 'lesson.regexForSeo.optional.title',
    description: 'lesson.regexForSeo.optional.description',
    content: 'http\nhttps',
    initialFlags: 'gm',
    flags: 'gm',
    regex: ['https?'],
    answer: ['http', 'https'],
  },
  {
    title: 'lesson.regexForSeo.any.title',
    description: 'lesson.regexForSeo.any.description',
    content: 'how to write regex\nhow to write regexp\nhow to write book review',
    initialFlags: 'gm',
    flags: 'gm',
    cursorPosition: 13,
    initialValue: 'how to write ',
    regex: ['how to write .*'],
    answer: ['how to write regex', 'how to write regexp', 'how to write book review'],
  },
  {
    title: 'lesson.regexForSeo.negated.title',
    description: 'lesson.regexForSeo.negated.description',
    content: 'http - https',
    initialFlags: 'gm',
    flags: 'gm',
    cursorPosition: 5,
    initialValue: 'http',
    regex: ['http[^s]'],
    answer: ['http '],
  },
  {
    title: 'lesson.regexForSeo.caret.title',
    description: 'lesson.regexForSeo.caret.description',
    content:
      'http://www.google.com/search?q=https\nhttps://developer.mozilla.org/en-US/docs/Glossary/http \nhttp://httpstatus.io/\nhttps://ahrefs.com/',
    initialFlags: 'gm',
    initialValue: 'http[^s].*',
    flags: 'gm',
    regex: ['^http[^s].*'],
    answer: ['http://www.google.com/search?q=https', 'http://httpstatus.io/'],
  },
  {
    title: 'lesson.regexForSeo.dollarAndEscape.title',
    description: 'lesson.regexForSeo.dollarAndEscape.description',
    content:
      'https://www.google.com/search?hl=en&q=html\nhttps://testsite.com/learn-html.htm\nhttps://developer.mozilla.org/en-US/docs/Web/html\nhttps://learnhtmltestsite.com/learn.html',
    initialFlags: 'gm',
    initialValue: '.*.htm',
    flags: 'gm',
    regex: ['.*\\.htm$'],
    answer: ['https://testsite.com/learn-html.htm'],
  },
  {
    title: 'lesson.regexForSeo.limitation.title',
    description: 'lesson.regexForSeo.limitation.description',
    content:
      'https://ahrefs.com/dashboard\nhttps://ahrefs.com/site-explorer\nhttps://ahrefs.com/keywords-explorer\nhttps://ahrefs.com/site-audit\nhttps://ahrefs.com/rank-tracker\nhttps://ahrefs.com/content-explorer',
    initialFlags: 'gm',
    initialValue: '^.$',
    flags: 'gm',
    cursorPosition: 2,
    regex: ['^.{35}$'],
    answer: ['https://ahrefs.com/content-explorer'],
  },
  {
    title: 'lesson.regexForSeo.maxLimitation.title',
    description: 'lesson.regexForSeo.maxLimitation.description',
    content:
      'https://ahrefs.com/dashboard\nhttps://ahrefs.com/site-explorer\nhttps://ahrefs.com/keywords-explorer\nhttps://ahrefs.com/site-audit\nhttps://ahrefs.com/rank-tracker\nhttps://ahrefs.com/content-explorer',
    initialFlags: 'gm',
    initialValue: '^.$',
    flags: 'gm',
    cursorPosition: 2,
    regex: ['^.{1,35}$'],
    answer: [
      'https://ahrefs.com/dashboard',
      'https://ahrefs.com/site-explorer',
      'https://ahrefs.com/site-audit',
      'https://ahrefs.com/rank-tracker',
      'https://ahrefs.com/content-explorer',
    ],
  },
  {
    title: 'lesson.regexForSeo.minLimitation.title',
    description: 'lesson.regexForSeo.minLimitation.description',
    content:
      'https://ahrefs.com/dashboard\nhttps://ahrefs.com/site-explorer\nhttps://ahrefs.com/keywords-explorer\nhttps://ahrefs.com/site-audit\nhttps://ahrefs.com/rank-tracker\nhttps://ahrefs.com/content-explorer',
    initialFlags: 'gm',
    initialValue: '^.$',
    flags: 'gm',
    cursorPosition: 2,
    regex: ['^.{35,}$'],
    answer: ['https://ahrefs.com/keywords-explorer', 'https://ahrefs.com/content-explorer'],
  },
];

export default regex101;