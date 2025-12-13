import OpenAI from "openai";

const SYSTEM_PROMPT = `
You are a job description parser. Extract structured information from job postings and return ONLY valid JSON with no additional text, explanations, or markdown formatting.

Return JSON with this exact structure:
{
  "title": "",
  "company": "",
  "location": {
     "city": "";
     "state": "";
     "country": "";
  },
  "jobType": "",
  "jobLink": "",
  "compensation": "",
  "responsibilities": [],
  "requirements": [],
  "otherImportantData": {}
}

Rules:
- If a field is not found, use empty string "" or empty array []
- jobType must be one of: "Remote", "Onsite", "Hybrid". By default set it to "Onsite"
- responsibilities and requirements should be arrays of strings
- otherImportantData is an object for any other relevant info (benefits, tech stack, etc.)
- Return ONLY the JSON object, no markdown code blocks, no explanations
- Let the State and Country fields be the codes and not the entire word
`;

export async function POST(request: Request) {
  const requestParams = await request.json();
  const { jobDesc } = requestParams;

  if (!jobDesc || !jobDesc.trim()) {
    return Response.json(
      { error: "Job description is required" },
      { status: 400 }
    );
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `Parse this job descriptionn\n${jobDesc}`,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    });

    const responseText = completion.choices[0].message.content;

    if (!responseText) {
      throw new Error("No response from API");
    }

    const responseJson = JSON.parse(responseText);

    return Response.json({ response: responseJson }, { status: 200 });
  } catch (err) {
    console.error("parseDescription API Error", err)
    return Response.json({}, { status: 400 });
  }
}
