// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { faMobileAlt, faLayerGroup, faCode } from '@fortawesome/free-solid-svg-icons';
import Feature from './Feature';
import Card from './Card';
import Testimonial from './Testimonial';
import Hero from './Hero';
import Footer from './Footer';

const features = [
  {
    icon: faMobileAlt,
    title: 'Fully Responsive',
    description: 'This theme will look great on any device, no matter the size!',
  },
  {
    icon: faLayerGroup,
    title: 'Bootstrap 5 Ready',
    description: 'Featuring the latest build of the new Bootstrap 5 framework!',
  },
  {
    icon: faCode,
    title: 'Easy to Use',
    description: 'Ready to use with your own content, or customize the source files!',
  },
];

const sections = [
  {
    title: 'Fully Responsive Design',
    description: 'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it\'s a phone, tablet, or desktop the page will behave responsively!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_C-FblnIRlAFMGiAVhRUwovsWeAqr1i5', // Adjust the image path
    imagedirection: 'right',
    textdirection: 'left',
  },
  {
    title: 'Updated For Bootstrap 5',
    description: 'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8BvnB6XdzJDT87Xpij6jrMZ4btS_R3Qa0xZKbVsBdcUep419D',
    imagedirection: 'left',
    textdirection: 'right'
  },
  {
    title: 'Easy to Use & Customize',
    description: 'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXyEVzVDOzXNWhTzwZ65tzI6HtAuGTnPvJAHGwruau2GoFz12', // Adjust the image path
    imagedirection: 'right',
    textdirection: 'left',
  },
];

const testimonialsData = [
  {
    name: 'Margaret E.',
    quote: 'This is fantastic! Thanks so much guys!',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKxhQhK4Gp_tw40tuXffO8VSMofDbaBBSLEnUeQn6FLm4PmUKl', // Adjust the image path
  },
  {
    name: 'Fred S.',
    quote: 'I\'ve been using it to create lots of super nice landing pages.',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXEWWuKu7oor-be26AkYlanE7Y_bqgQogPhO0Z1G4D_-4rpS8q', // Adjust the image path
  },
  {
    name: 'Sarah W.',
    quote: 'Thanks so much for making these free resources available to us!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCebgFOEfUauTvY9KhtypNEVsOs81Kn37ShT8aNmjWcGXJ8sY', // Adjust the image path
  },
];

function App() {

  return (
    <>
      <Navbar />
      <Hero 
        title={"Generate more leads with a professional landing page!"} 
      />
      <div className='features'>
        <div className="features-section container text-center">
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-md-4" key={index}>
                <Feature
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='details'>
        <div className='containertemp'>
          <Card
            title={sections[0].title}
            description={sections[0].description}
            image={sections[0].image}
          />
        </div>
        <div className='spcontainer'>
          <div className='left'>
            <img
              src={sections[1].image}
              alt='Responsive Design'
              style={{ height: 400, width: 760 }}>
            </img>
          </div>
          <div className='right'>
            <h1>{sections[1].title}</h1>
            <p>{sections[1].description}</p>
          </div>
        </div>
        <div className='containertemp'>
          <Card
            title={sections[2].title}
            description={sections[2].description}
            image={sections[2].image}
          />
        </div>
      </div>
      <div className="testimonials-container">
        <h2>What people are saying...</h2>
        <div className="testimonials">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
      <Hero title={"Ready to get started? Sign up now!"} />
      <Footer />
    </>
  );
}

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='#'>Start BootStrap</a>
      <button>Sign Up</button>
    </div>

  );
};

export default App


