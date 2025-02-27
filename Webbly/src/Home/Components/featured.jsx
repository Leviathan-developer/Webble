import React from 'react';
import './about.css'; // Link to your CSS file (you can rename it or style directly in the component)

const AboutUs = () => {
    return (
        <div>

            <section className="hero" id="edafa">
                <div className="container">
                    <h1 >About Us</h1>
                    <p>Revolutionizing education, one simple concept at a time</p>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Our Vision</h2>
                            <p>At Learn Gurushala, we believe that education should be accessible, engaging, and effortless for everyone. Our vision is to transform complex concepts into easily digestible content, empowering learners to achieve their goals with confidence and ease.</p>
                            <p>Through innovative teaching methods and cutting-edge technology, we're reshaping the learning experience to make it more intuitive, interactive, and enjoyable for students of all ages and backgrounds.</p>
                            <a href="middle.html" className="cta-button">Join the Revolution</a>
                        </div>
                        <div className="about-image">
                            <div className="instructor-info">
                                <h3>Meet Our Instructor</h3>
                                <h4>Mr. Kishor Khanal</h4>
                                <p>With a passion for simplifying education and years of experience in teaching field for 35 years of teaching experience, Mr. Kishor Khanal is the driving force behind Learn Eassy. His innovative approach to learning and dedication to student success have revolutionized the way we think about education in the digital age.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </section>

            
        </div>
    );
}

export default AboutUs;
