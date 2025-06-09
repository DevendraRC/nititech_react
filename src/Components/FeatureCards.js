import React from 'react';
import '../styles/FeatureCards.css';
import { FaCloud, FaMobileAlt, FaChartLine, FaLaptop, FaSearch, FaLightbulb } from 'react-icons/fa';


const features = [
  { icon: <FaMobileAlt />, title: 'Mobile App Development', description: ' At GSS, our Xamarin mobile app development services are designed to help businesses create high-quality, cross-platform apps that deliver tangible results. Whether you need a new app developed from scratch or an existing app updated and improved, we have the expertise and experience to deliver outstanding results using Xamarin.', color: '#FFD166' },
  { icon: <FaLaptop />, title: 'Web Development', description: 'We specialize in website development services that utilize a range of cutting-edge technologies to deliver customized solutions to our clients. We work with CMS systems, Dotnet, and Angular to develop websites that are visually stunning, highly functional, and user-friendly.', color: '#06D6A0' },
  { icon: <FaChartLine />, title: 'Data Analytics', description: ' we believe in the adage Data is the new oil that helps run businesses effectively and efficiently. But we also believe that Data is the new soil from which we can nurture and grow hitherto unforeseen insights. We offer a wide range of capabilities like Marketing Analytics, Customer Analytics, Sales Analytics, We help businesses leverage data for smarter decision-making.', color: '#EF476F' },
  { icon: <FaSearch />, title: 'Search Engine Optimization (SEO) ', description: 'SEO involves making sure that the website is structured in a way that search engines can easily crawl and index the sitess pages, and that the site is optimized for performance and user experience. Technical SEO includes Site Structure, Page Speed, Mobile responsiveness, HTTPS & Security.', color: '#118AB2' },
  { icon: <FaCloud />, title: ' Cloud Services', description: ' Cloud services are infrastructure, platforms, or software that are hosted by third-party providers and made available to users through the internet through the internet, to the provider’s systems, and back. We provide secure and scalable cloud solutions.', color: '#8338EC' },
  { icon: <FaLightbulb />, title: 'IT Consulting', description: ' IT consulting services help clients evaluate different technology strategies and align them with your business. These services provide strategic, operational, and architectural planning to support customers’ IT initiatives. Strategic planning involves advisory services that allow clients to gauge their IT needs before formulating implementation plans..', color: '#FB5607' },
];

const FeatureCards = () => {
  return (
    <div className="features-section">
      <h2 className="features-title">Elevate Your Initiatives with Pune Top Information Technology Firm</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ backgroundColor: feature.color }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
