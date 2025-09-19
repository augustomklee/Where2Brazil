export const QUIZ_ACTIONS = {
  PREVIOUS: 'previous',
  NEXT: 'next'
}

export const MESSAGES = {
  SELECT_ANSWER: 'Please select an answer before proceeding.',
  RECOMMENDATION_ERROR: "Sorry, we couldn't generate recommendations at this time.",
  GENERATING_TRIP: "✈️ Generating Your Perfect Trip",
  ANALYZING_PREFERENCES: "Analyzing your preferences to find the best destinations...",
  PERSONALIZED_RECOMMENDATIONS: "🌎 Your Personalized Travel Recommendations"
}

export const FALLBACK_DESTINATIONS = [
  {
    id: 1,
    title: "Rio de Janeiro",
    description: "Famous for its beaches, Christ the Redeemer statue, and vibrant culture."
  },
  {
    id: 2,
    title: "São Paulo",
    description: "Brazil's largest city with world-class museums, restaurants, and nightlife."
  },
  {
    id: 3,
    title: "Salvador",
    description: "Historic colonial city with Afro-Brazilian culture and beautiful beaches."
  }
]