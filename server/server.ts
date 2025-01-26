import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import OpenAI from 'openai';

dotenv.config();  // Load environment variables

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.use(express.json());  // Enable JSON parsing for POST requests

// API route to fetch a pickup line
app.post('/api/get-pickup-line', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'developer', content: 'You are a hot blonde and helping your computer science nerd, introverted guy friend pick up the chuzz (chopped huzz) ifykyk.' },
        { role: 'user', content: 'Give me interesting and unique pickup lines. These pickup lines can be anything but they have to be hella rizzy, ifykyk. Do NOT use any pickup line related to magicians or any pickup line you used in the past. Only give me the pickup line and no other yap' },
      ],
      store: true,
    });

    res.json({ pickupLine: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pickup line.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
