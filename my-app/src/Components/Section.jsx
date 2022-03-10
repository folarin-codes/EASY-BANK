import './section.css'
import online from '../images/icon-online.svg'
import api from '../images/icon-api.svg'
import budget from '../images/icon-budgeting.svg' 
import onboarding from '../images/icon-onboarding.svg'


function Section() {
      return (
            <section className="section">
                  <div className="section-primary">
                        <h2>Why choose Easybank?</h2>

                        <p> We leverage Open Banking to turn your bank account into your financial hub. control your finances like never before.</p>
                  
                  </div>

                  <SectionFragment
                        title='Online Banking'
                        paragraph='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
                        img={online}
                  />

                  <SectionFragment
                        title='Simple Budgeting'
                        paragraph="See exactly where your money goes each month. Receive notifications when you're close to your hitting limits." 
                        img={budget}
                  
                  />

                  <SectionFragment
                        title="Fast Onboarding"
                        paragraph="We dont do branches. Open your account in minutes online and start taking control of your finances right away."
                        img={onboarding}
                  
                  />

                  <SectionFragment
                        title="Open API"
                        paragraph="Manage your savings,investments,pension,and much more from one account. Tracking your money has never been easier."
                        img={api}
                  />
                  

            </section>
      )
      
}

function SectionFragment(props) {
      return (
            <div className="section-secondary">
                 
                        <img src={props.img} alt="" srcset="" />
                 
                  <h3>
                        { props.title}

                  </h3>
                  <p>
                        {props.paragraph}

                  </p>
            </div>
      )
}

export default Section;