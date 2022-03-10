import './articles.css'
import currency from '../images/image-currency.jpg'
import restaurant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
// import mockup from '../images/image-mockups.jpg'
import  confetti from '../images/image-confetti.jpg'

function Articles() {
      return (

            <section className='articles-primary'>
                  <h2>Latest Articles</h2>
                  <div className='article-cards'>
                        <Card
                              title='Receive money in any currency with no fees'
                              author='By Claire Robinson'
                              paragraph="The world is getting smaller and we're becoming more mobile . so why should you be forced to only receive money in a single... "
                              image={currency}
                        
                        />

                        <Card
                              title="Treat yourself without worrying about money"
                              paragraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month . That means you..."
                              author='By Wilson Hutton'
                              image={restaurant}

                        />

                        <Card
                              title='Take your Easybank card wherever you go'
                              paragraph="We want you toenjoy your travels this ia why we don't charge any fees on purchases while you're abroad. We'll even show you..."
                              image={plane}
                              author='By Wilson Hutton'
                              
                        
                        />

                        <Card
                              title='Our invite-only Beta accounts are now live!'
                              paragraph="After a lot of hard work by the whole team , we're excited to launch our closed beta. It's easy to request an invite through the site..."
                              author='By Claire Robinson'
                              image={confetti}

                        
                              


                        
                        />
                  
                  </div>

            </section>
           
            
      )
}

function Card({image , title , paragraph,author}) {
      return (
            <div>
                  <img src={image} alt="" />
                  <span>{author }</span>
                  <h3>{ title}</h3>
                  <p>{ paragraph}</p>
            </div>
      )
}

export default Articles;