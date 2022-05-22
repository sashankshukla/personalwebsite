import "./Portfolio.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FiCircle} from 'react-icons/fi';
import React from 'react';


export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
    <VerticalTimeline lineColor="#15023a" animate={true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '', color: '#15023a'}}
        iconStyle={{color: '#15023a'}}
        icon={<FiCircle/>}
      >
        <h6>Jan. 2022 - present</h6>
        <h3 className="vertical-timeline-element-title">Competitive Programming</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
        <h5>Member of the UBC Competitive Programming Club</h5>
        <h5>5th Place in the ICPC Regionals D2 (90+ teams) </h5>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        iconStyle={{color: '#15023a'}}
        icon={<FiCircle/>}
      >
        <h6>Sept. 2021 - present</h6>
        <h3 className="vertical-timeline-element-title">University of British Columbia</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
        <h5>Bachelor of Science - Computer Science</h5>
        <h5>Coursework :  Data Structures & Algorithms, Software Construction and Program Design</h5>
        <h5>Dean's Honor List</h5>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        iconStyle={{color: '#15023a'}}
        icon={<FiCircle/>}
      >
        <h6>June 2021 - August 2021</h6>
        <h3 className="vertical-timeline-element-title">Web Development Intern - 3SR Consultancy</h3>
        <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
        <h5>Was working on an e-commerce watch website</h5>
        <h5>Designed and developed the login and signup pages for the website</h5>
        <h5>Implemented POST request in JavaScript and wrote user PHP authentication code</h5>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        contentArrowStyle={{background:"blue" }}
        iconStyle={{ color: '#15023a'}}
        icon={<FiCircle/>}>
        <h6>Oct. 2019 - June 2021</h6>
        <h3 className="vertical-timeline-element-title">High School</h3>
        <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
        <h5>  Executive - Code Club  </h5>
        <h5>Distinction - CEMC Canadian Computing Competition</h5>
        <h5>Top 8% - CEMC Euclid Math Contest</h5>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    </div>
  )
}