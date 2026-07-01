const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

exports.generateCode = async (prompt, framework) => {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "system",
        content: `You are an expert ${framework} developer.

Return only production-ready code.

Do not explain anything.

Do not wrap the response inside markdown.`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],

    temperature: 0.4,
  });

  let response = completion.choices[0].message.content;

  // Remove markdown if AI accidentally returns it
  response = response
    .replace(/```[\w]*/g, "")
    .replace(/```/g, "")
    .trim();

  return response;
};