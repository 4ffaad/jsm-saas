import CompanionCard from '@/components/ui/CompanionCard'
import CompanionsList from '@/components/ui/CompanionsList'
import CTA from '@/components/ui/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline"> Popular Companions</h1> 
        <section className="home-section">
          <CompanionCard
            id="1"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the brain"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
            id="2"
            name="Countsy the Number Wizard"
            topic="Derivative and Integrals"
            subject="maths"
            duration={30}
            color="#e5d0ff"
          />
          <CompanionCard
            id="4"
            name="Verba the Vocabulary Builder"
            topic="language"
            subject="English Literature"
            duration={30}
            color="#BDE7FF"
          />
        </section>
      
        <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
          <CTA /> 
        </section>
      

    </main>
  )
}

export default Page