import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { countyName, stateAbbr, hazard } = await req.json();
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `Generate 2-3 sentences about ${hazard} risks in ${countyName}, ${stateAbbr} and what residents can do to help. Focus on local mitigation strategies.`
      }],
      max_tokens: 100
    });

    const text = completion.choices[0].message.content;
    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to generate info" 
    }, { status: 500 });
  }
}