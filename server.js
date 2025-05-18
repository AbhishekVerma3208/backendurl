const express = require('express');
const app = express();

app.use(express.json());

// Simple login endpoint
app.post('/:class/auth', (req, res) => {
  const classLocation = req.params.class; // footscray, sydney, ort
  const { username, password } = req.body;

  // Dummy validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  // Just a simple check example
  if (password.startsWith('s') && username.length > 0) {
    // Return keypass based on username and class location
    return res.json({ keypass: `${classLocation}_${username}_key` });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Dashboard endpoint
app.get('/dashboard/:keypass', (req, res) => {
  const { keypass } = req.params;

  // Dummy data example
  const entities = [
  {
    property1: 'French',
    property2: 'Bonjour',
    description: 'French is a Romance language spoken by over 300 million people worldwide. Known for its rich literary tradition and precise pronunciation, French is an official language in countries like France, Belgium, Canada, and several African nations.'
  },
  {
    property1: 'Spanish',
    property2: 'Hola',
    description: 'Spanish, or Español, is the world\'s second-most spoken native language. It originated in Spain and is now the official language of most Latin American countries. Its rolling "r" sounds and expressive tone make it globally recognized.'
  },
  {
    property1: 'Japanese',
    property2: 'こんにちは (Konnichiwa)',
    description: 'Japanese is spoken by over 125 million people, primarily in Japan. It uses three scripts: Hiragana, Katakana, and Kanji. Known for its polite speech levels and honorifics, it’s a language of subtlety and tradition.'
  },
  {
    property1: 'German',
    property2: 'Hallo',
    description: 'German is spoken in Germany, Austria, Switzerland, and other parts of Europe. Famous for its compound words and precise grammar, German is a key language in philosophy, science, and engineering.'
  },
  {
    property1: 'Chinese (Mandarin)',
    property2: '你好 (Nǐ hǎo)',
    description: 'Mandarin Chinese is the world\'s most spoken native language. It uses characters instead of an alphabet, and its meaning often depends on tone. Mandarin is the official language of China and Taiwan.'
  },
  {
    property1: 'English',
    property2: 'Hello',
    description: 'English is the most widely spoken second language globally and the official language in over 50 countries. With roots in Anglo-Saxon and Latin, it’s known for its vast vocabulary and global influence.'
  },
  {
    property1: 'Italian',
    property2: 'Ciao',
    description: 'Italian is a Romance language famous for its musical intonation and emotional expressiveness. Spoken in Italy and parts of Switzerland, it’s known for its historical ties to art, opera, and Renaissance culture.'
  },
  {
    property1: 'Arabic',
    property2: 'مرحبا (Marhaban)',
    description: 'Arabic is spoken by over 400 million people in the Middle East and North Africa. It has a unique script written from right to left, and Classical Arabic remains the liturgical language of Islam.'
  },
  {
    property1: 'Russian',
    property2: 'Привет (Privet)',
    description: 'Russian is the most widely spoken Slavic language, known for its Cyrillic script and rich literary tradition. It’s spoken in Russia, Belarus, Kazakhstan, and across Eastern Europe and Central Asia.'
  },
  {
    property1: 'Portuguese',
    property2: 'Olá',
    description: 'Portuguese is a Romance language spoken in Portugal, Brazil, and parts of Africa and Asia. Brazilian Portuguese has distinct pronunciation and vocabulary differences compared to European Portuguese.'
  }
];
  res.json({
    entities,
    entityTotal: entities.length,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
