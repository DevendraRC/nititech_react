import React from 'react';
import '../styles/FocusSection.css';
import webdevGif from '../assets/webdev.gif';
import appdevGif from '../assets/appdev.gif';
import dataanaGif from '../assets/dataana.gif';
import cloudcompGif from '../assets/cloudcomp.gif';
import softtestGif from '../assets/softest.gif';


const features = [
  {
    img: webdevGif,
    alt: 'Web Development',
    title: 'Web Development',
    desc: 'Niti Technologies offers comprehensive web development services tailored to meet diverse business needs. With a focus on innovation and cutting-edge technology, we deliver robust and scalable web solutions. Our team of experienced developers ensures high-quality, user-friendly websites that enhance digital presence and drive business growth. From front-end design to back-end development and maintenance, we provide end-to-end services. Leveraging industry best practices and agile methodologies, we strive to exceed client expectations and deliver projects on time and within budget. Whether its e-commerce platforms, custom web applications, or CMS solutions, Niti Technologies is your trusted partner for successful digital transformation.',
  },
  {
    img: appdevGif,
    alt: 'App Development',
    title: 'App Development',
    desc: 'Niti Technologies offers top-tier app development services designed to bring your ideas to life. Our skilled team specializes in creating high-performance, user-friendly mobile applications for both iOS and Android platforms. We focus on delivering custom solutions that align with your business goals, ensuring a seamless user experience and robust functionality. Utilizing the latest technologies and agile methodologies, we ensure timely delivery and superior quality. From concept to launch, we provide end-to-end services including design, development, testing, and support. Partner with Niti Technologies for innovative app solutions that drive engagement and growth.',
  },
  {
    img: dataanaGif,
    alt: 'Data Analytics',
    title: 'Data Analytics',
    desc: 'Niti Technologies provides expert data analytics services to help businesses make informed decisions. Our team of data scientists and analysts harness the power of big data, transforming raw information into actionable insights. We offer comprehensive solutions including data mining, predictive analytics, and data visualization, tailored to your specific needs. Utilizing advanced tools and techniques, we ensure data accuracy and relevance, driving strategic growth and operational efficiency. Our end-to-end services encompass data collection, processing, analysis, and reporting. Trust Niti Technologies to unlock the potential of your data and gain a competitive edge.',
  },
  {
    img: cloudcompGif,
    alt: 'Cloud computing',
    title: 'Cloud computing',
    desc: 'Niti Technologies offers cutting-edge cloud computing services designed to enhance business agility and scalability. Our expert team provides comprehensive solutions including cloud migration, infrastructure management, and cloud-native application development. We ensure secure and seamless integration with leading cloud platforms like AWS, Azure, and Google Cloud. By leveraging advanced technologies, we help businesses reduce costs, improve efficiency, and stay competitive. Our services include ongoing support and optimization to ensure peak performance and reliability. Partner with Niti Technologies for a successful cloud transformation that drives innovation and growth.',
  },
  {
    img:softtestGif,
    alt: 'Software Testing',
    title: 'Software Testing',
    desc: 'Niti Technologies provides robust software testing services to ensure the highest quality and reliability of your applications. Our experienced QA team offers comprehensive testing solutions, including functional, performance, security, and automation testing. We employ the latest tools and methodologies to identify and resolve issues early, ensuring your software meets industry standards and user expectations. Our end-to-end services cover test planning, execution, and reporting, delivering thorough and accurate results. With a focus on minimizing risks and enhancing performance, Niti Technologies helps you achieve flawless software releases. Trust us for rigorous testing that guarantees success.',
  },
];

const FocusSection = () => {
  return (
    <div className="focus-section">
      <h2 className="focus-title">Technologies we offered</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.img} alt={feature.alt} className="feature-image" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusSection;
