export default function StartPage({ toggleStartPage }) {
  return (
    <section className="start-page">
      <img src="/logo.png" alt="Where2Brazil Logo" className="logo" />
      <h1>Where2Brazil</h1>
      <p>Find the best places to visit in Brazil</p>
      <button onClick={toggleStartPage}>Get Started</button>
    </section>
  )
}
