import React, { useState } from 'react';
import './service.css';

const Services = () => {
    const [activeTab, setActiveTab] = useState('collaborate'); // Initial active tab is 'collaborate'

    const toggleTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <section id="service">
                <div className="row">
                    <h2 className="section-heading">Our Services</h2>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="card" onClick={() => toggleTab('collaborate')}>
                            <div className="icon-wrapper">
                                <i className="fas fa-quidditch"></i>
                            </div>
                            <h3>Collaboration</h3>
                            {activeTab === 'collaborate' && (
                                <p>
                                    We provide you the best teachers.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" onClick={() => toggleTab('courses')}>
                            <div className="icon-wrapper">
                                <i className="fas fa-tshirt"></i>
                            </div>
                            <h3>Courses</h3>
                            {activeTab === 'courses' && (
                                <p>
                                    Get more then 1000 course on multiple topics
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" onClick={() => toggleTab('club')}>
                            <div className="icon-wrapper">
                                <i className="fas fa-shoe-prints"></i>
                            </div>
                            <h3>Clubs</h3>
                            {activeTab === 'club' && (
                                <p>
                                    Find lot of clubs and group you fit in
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" onClick={() => toggleTab('Prices')}>
                            <div className="icon-wrapper">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3>Prices</h3>
                            {activeTab === 'Prices' && (
                                <p>
                                    We have price for top performers
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" onClick={() => toggleTab('sportsMaterials')}>
                            <div className="icon-wrapper">
                                <i className="fas fa-table-tennis"></i>
                            </div>
                            <h3>Quizes</h3>
                            {activeTab === 'sportsMaterials' && (
                                <p>
                                   We don't wan't to make study boring, quizes are the fun way to learn things!
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" onClick={() => toggleTab('sportsWear')}>
                            <div className="icon-wrapper">
                                <i className="fas fa-tshirt"></i>
                            </div>
                            <h3>24/7</h3>
                            {activeTab === 'sportsWear' && (
                                <p>
                                    Our Team is 24/7 active to make plateform better.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
