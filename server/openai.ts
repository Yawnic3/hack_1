import { Router } from 'express';
import OpenAI from 'openai';

// Initialize OpenAI with the API key from the environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Use the key from the .env file
});

const router = Router();

// Define a POST route to get a pickup line from OpenAI
router.post('/api/get-pickup-line', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'developer', content: 'You are a hot blonde and helping your computer science nerd, introverted guy friend pick up the chuzz (chopped huzz) ifykyk.' },
        {
          role: 'user',
          content: 'Give me interesting and unique pickup lines. These pickup lines can vary from sports analogies but they have to be hella rizzy, ifykyk. Do NOT use any pickup line related to magicians.',
        },
      ],
      store: true,
    });

    // Send back the completion result
    res.json({
      pickupLine: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error with OpenAI:', error);
    res.status(500).json({ error: 'Failed to fetch pickup line.' });
  }
});

export default router;
