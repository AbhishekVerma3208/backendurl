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
    property1: 'French Greeting',
    property2: 'Bonjour',
    description: 'The most essential French greeting meaning "Hello". Used in both formal and informal contexts throughout the day until evening. Pronunciation: "bohn-zhoor". Example usage: "Bonjour, comment ça va?" (Hello, how are you?). Cultural note: In France, saying hello when entering small shops is considered polite.'
  },
  {
    property1: 'Spanish Question',
    property2: '¿Dónde está el baño?',
    description: 'Critical travel phrase meaning "Where is the bathroom?". Pronunciation: "DON-deh es-TAH el BAN-yo". Regional variations exist - in some countries people say "los servicios" instead. This is often the first phrase learners practice when visiting Spanish-speaking countries.'
  },
  {
    property1: 'Japanese Honorific',
    property2: '-san',
    description: 'The most common Japanese honorific suffix, added to names as a neutral-polite form of address. Similar to "Mr./Ms." but used more widely. Example: "Tanaka-san". Important cultural note: Never use honorifics when referring to yourself, as this would be considered arrogant.'
  },
  {
    property1: 'German Emotion',
    property2: 'Schadenfreude',
    description: 'A complex German noun meaning pleasure derived from someone else\'s misfortune. Pronunciation: "SHAH-den-froy-duh". This loanword is used in English because no single-word equivalent exists. Demonstrates how language captures specific cultural concepts.'
  },
  {
    property1: 'Chinese Number',
    property2: '8 (八)',
    description: 'Considered the luckiest number in Chinese culture because it sounds like the word for "prosper" (发, fā). People pay premium prices for phone numbers or license plates containing 8s. During the Beijing Olympics, the opening ceremony began at 8:08 PM on 8/8/2008 for maximum auspiciousness.'
  },
  {
    property1: 'English Tense',
    property2: 'Present Perfect',
    description: 'A verb tense formed with have/has + past participle (e.g., "I have eaten"). Used for actions that happened at an unspecified time or have present relevance. Common learner mistake: Using it with specific time markers ("I have seen him yesterday" is incorrect).'
  },
  {
    property1: 'Italian Gesture',
    property2: 'Hand purse',
    description: 'The iconic Italian gesture where fingers are bunched together and moved up and down. Meaning depends on context: can indicate "What do you want?", "What are you saying?", or "Perfect!" Demonstrates how much communication happens beyond words in language learning.'
  },
  {
    property1: 'Arabic Letter',
    property2: 'ع (Ayn)',
    description: 'One of the most challenging Arabic letters for learners, representing a voiced pharyngeal fricative sound not found in English. Produced by constricting the throat muscles. Essential for words like "عرب" (Arab) and "علم" (knowledge). Many beginners substitute with a glottal stop at first.'
  },
  {
    property1: 'Russian Word',
    property2: 'Тоска (Toska)',
    description: 'A Russian noun with no direct English translation, describing a deep spiritual anguish or melancholic longing. Famous author Vladimir Nabokov described it as "a sensation of great spiritual anguish, often without any specific cause." Shows how languages package emotions differently.'
  },
  {
    property1: 'Portuguese Sound',
    property2: 'ão ending',
    description: 'The nasal diphthong found in words like "pão" (bread) and "coração" (heart). Pronunciation resembles a nasal "ow" sound. A distinctive feature of Portuguese that learners often struggle with. Appears in many diminutives and affectionate terms like "irmão" (brother).'
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
