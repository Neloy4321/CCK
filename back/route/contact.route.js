import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ msg: 'Message received', newMessage });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;