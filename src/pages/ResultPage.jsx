import { useEffect, useState, useRef } from 'react'
import { createChatCompletion, formatTravelRecommendations } from '../utils/googleai.js'
import { convertAnswersToText, createPromptMessages } from '../utils/promptHelper.js'

export default function ResultPage({ userAnswers }) {
    const [recommendations, setRecommendations] = useState([])
    const [loading, setLoading] = useState(true)
    const hasGenerated = useRef(false)

    async function generateRecommendations() {
        try {
            const answerTexts = convertAnswersToText(userAnswers)
            const messages = createPromptMessages(answerTexts)

            const result = await createChatCompletion(messages)
            const formattedRecommendations = formatTravelRecommendations(result)

            setRecommendations(formattedRecommendations)
        } catch (err) {
            console.error('Failed to generate recommendation:', err)
            setRecommendations([{
                id: 1,
                title: "Error",
                description: "Sorry, we couldn't generate recommendations at this time."
            }])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!hasGenerated.current) {
            hasGenerated.current = true
            generateRecommendations()
        }
    }, [])

    if (loading) {
        return (
            <section className="results-page">
                <div className="loading-container">
                    <h2>✈️ Generating Your Perfect Trip</h2>
                    <p>Analyzing your preferences to find the best destinations...</p>
                    <div className="loading-spinner"></div>
                </div>
            </section>
        )
    }

    return (       
         <section className="results-page">
            <h2>🌎 Your Personalized Travel Recommendations</h2>
            <div className="recommendations-container">
                {recommendations.map((destination) => (
                    <div key={destination.id} className="destination-card">
                        <h3 className="destination-title">{destination.title}</h3>
                        <p className="destination-description">{destination.description}</p>
                        <div className="card-footer">
                            <span className="destination-number">#{destination.id}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="restart-button" onClick={() => window.location.reload()}>Restart Quiz</button>
        </section>)
}