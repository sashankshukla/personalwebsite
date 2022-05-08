import "./Portfolio.css"
import { useState } from "react"; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {School , Work, DeveloperMode} from "@material-ui/icons"


export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
    <VerticalTimeline lineColor="#15023a" animate={true} contentStyle={{outerWidth:'10px'}}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#15023a'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'white', color: '#15023a' , border : '2px solid #15023a'}}
        icon={<DeveloperMode/>}
      >
        <h3 className="vertical-timeline-element-title">Competitive Programming</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
        <br></br>
          <p>Member of the ACM (UBC Competitive Programming Club)</p>
          <p>5th Place in the ICPC Regionals D2 (90+ teams) </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'white', color: '#15023a' , border : '2px solid #15023a'}}
        icon={<School />}
      >
        <h3 className="vertical-timeline-element-title">University of British Columbia</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
        <p>
          Finished my first year towards a degree in Computer Science
        </p>
        <p>Coursework :  Data Structures & Algorithms, Software Construction, Program Design</p>
        <p>4.0 GPA - Faculty of Science's Dean's Honour List</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'white', color: '#15023a' , border : '2px solid #15023a'}}
        icon={<Work />}
      >
        <h3 className="vertical-timeline-element-title">Web Development Intern - 3SR Consultancy Inc.</h3>
        <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
        <br></br>
        <p>Worked on the development of an e-comerce watch website</p>
        <p>Implemented POST method for client-server communication and authentication code for data</p>
        <p>Designed and developed the login and signup pages for the website.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'white', color: '#15023a' , border : '2px solid #15023a'}}
        icon={<School/>}
      >
        <h3 className="vertical-timeline-element-title">High School</h3>
        <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
        <p>
          Executive - Code Club 
        </p>
        <p>Distinction - CEMC Canadian Computing Competition (University of Waterloo)</p>
        <p>Top 7% - CEMC Euclid Math Contest (University of Waterloo)</p>
      </VerticalTimelineElement>
      
      
    </VerticalTimeline>
    </div>
  )
}