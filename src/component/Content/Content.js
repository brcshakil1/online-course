import React from 'react';
import './Content.css'
import profile from '../../images/body-images/body-pic1.png'

const Content = () => {
    return (
        <div className='content'>
            <div className='part1'>
                <h1>Free online courses to achieve your goals</h1>
                <p>Looking to add new skills? Is there a hobby you've wanted to try? We're Udemy, a leading destination for learning and teaching online.</p>
                <p>If you're new to online learning and not sure where to start, you're not alone. We've curated a free collection of courses for professionals. Take one of these courses and learn new skills (on us).</p>
                <button>Take free courses</button>
            </div>
            <div className='part2'>
                <img src={profile} alt="" />
                <div>
                    <h1>Skills that suit you</h1>
                    <p>Learn valuable, practical skills from free online video courses. Explore tech essentials and keep pace with change. Become more focused and productive. Top it off with courses that round out your skills and enrich your day to day.</p>
                    <button>Essential Tech Skills courses</button>
                    <br />
                    <button> Productivity & Professional Skills</button>
                    <br />
                    <button>Personal Growth & Wellness</button>
                </div>
            </div>
        </div>
    );
};

export default Content;