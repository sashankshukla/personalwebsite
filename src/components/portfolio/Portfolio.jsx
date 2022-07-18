import "./Portfolio.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FiCircle} from 'react-icons/fi';
import React from 'react';


export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
    <VerticalTimeline lineColor="#ccd6f6" animate={true}>

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#0b192f', color: '#ccd6f6'}}
        iconStyle={{color: '#0b192f'}}
      >
        <h6>June. 2022 - present</h6>
        <h3 className="vertical-timeline-element-title">Web Developer - UBC Open Robotics</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
        <h5>Developed a modern React website utilizing TailwindCSS</h5>
        <h5>Created responsive,reusable web-based UI components with improved functionality to reduce redundancy</h5>
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#0b192f', color: '#ccd6f6'}}
        iconStyle={{color: '#0b192f'}}
      >
        <h6>Jan. 2022 - present</h6>
        <h3 className="vertical-timeline-element-title">Competitive Programming</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
        <h5>UBC Competitive Programming Club (ACM)</h5>
        <h5>Winner - CodeSprint UCLA 2022 D2 (80+ teams)</h5>
        <h5>5th Place - ICPC Regionals D2 (90+ teams) </h5>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#0b192f',  color: '#ccd6f6'}}
        iconStyle={{color: '#0b192f'}}
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
        contentStyle={{ background: '#ccd6f6',  color: '#0b192f'}}
        iconStyle={{color:'#0b192f'}}
      >
        <h6>June 2021 - August 2021</h6>
        <h3 className="vertical-timeline-element-title">Software Development Intern - 3SR Consultancy</h3>
        <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
        <h5>Designed and developed several dynamic interfaces using Bootstrap for an e-commerce watch website</h5>
        <h5>Used XMLHttpRequests to allow for background data exchange and asynchronous web page updation</h5>
      </VerticalTimelineElement>      
    </VerticalTimeline>
    </div>
  )
}