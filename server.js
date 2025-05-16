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
      property1: 'value1',
      property2: 'value2',
      description: 'Detailed description 1',
    },
    {
      property1: 'value4',
      property2: 'value4',
      description: 'Detailed description 2',
    },
    {
      property1: 'value2',
      property2: 'value5',
      description: 'Detailed description 2',
    },
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
