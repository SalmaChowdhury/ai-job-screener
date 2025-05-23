import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testKey() {
  try {
    const response = await openai.models.list();
    console.log("✅ Your API key works! Models:", response.data);
  } catch (err) {
    console.error("❌ Your API key is invalid or unauthorized:");
    console.error(err.response?.data || err.message);
  }
}

testKey();
