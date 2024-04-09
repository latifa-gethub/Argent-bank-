import React from 'react' 
import FeatureItem from './FeatureItem'

/**
 * Function component to display home page or landingPage
 * @returns {JSX.Element}
 */
const LandingPage = () => {
  return (
    <main>
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem img="../assets/img/icon-chat.png" alt="chat-icon" 
      title="You are our #1 priority"  paragraphe=" Need to talk to a representative? You can get in touch through our
      24/7 chat or through a phone call in less than 5 minutes."/>

      <FeatureItem img="../assets/img/icon-money.png" alt="money-icon" 
      title="More savings means higher rates"  paragraphe=" The more you save with us, the higher your interest rate will 
      be!"/>

      <FeatureItem img="../assets/img/icon-security.png" alt="security-icon" 
      title="Security you can trust"  paragraphe="  We use top of the line encryption to make sure your data and money
      is always safe."/>
       
    </section>
  </main>
  )
}

export default LandingPage