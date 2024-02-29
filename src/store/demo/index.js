import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const getNicheAndProductsFromAi = async (
  content = "Напиши нишевые товары рынка"
) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content }],
    model: "gpt-3.5-turbo-1106",
  });
  const message = completion?.choices[0]?.message?.content;

  return message;
};
