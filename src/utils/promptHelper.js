import questions from '../data/questions.js'

export const SYSTEM_PROMPT = `CRITICAL: You MUST respond with ONLY valid JSON in this EXACT format. Do not include any other text, explanations, or markdown formatting:

{
    "destinations": [
        {
            "title": "Destination Name",
            "description": "Description of the destination"
        },
        {
            "title": "Second Destination",
            "description": "Description of the second destination"
        },
        {
            "title": "Third Destination",
            "description": "Description of the third destination"
        }
    ]
}

Requirements:
- Return exactly 3 destinations
- Each destination must have "title" and "description" fields
- Title should be the destination name only
- Description should be at least 3 sentences and maximum of 4 sentences
- No extra fields or formatting`

export function createPromptMessages(answerTexts) {
    return [
        {
            role: "user",
            parts: [{ text: `You are a travel advisor that provides personalized destination recommendations based on user preferences. Your travel recommendations should be in Brazil ONLY. ${SYSTEM_PROMPT}` }]
        },
        {
            role: "user",
            parts: [{ text: `Based on these travel preferences: ${answerTexts.join(', ')}, recommend 3 travel destinations in Brazil with brief explanations for each.` }]
        }
    ]
}

export function convertAnswersToText(userAnswers) {
    return userAnswers.map((answer, index) => {
        const question = questions[index]
        const option = question.options.find(opt => opt.value === answer)
        return option ? option.text : ''
    })
}