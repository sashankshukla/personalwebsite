import "./Portfolio.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BlurCircularOutlined} from "@material-ui/icons"


export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
    <VerticalTimeline lineColor="lightgray" animate={true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#15023a'}}
        iconStyle={{color: 'lightgray'}}
        icon={<BlurCircularOutlined/>}
      >
        <h6>Jan. 2022 - present</h6>
        <h3 className="vertical-timeline-element-title">Competitive Programming</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
          <h5>Member of the ACM (UBC Competitive Programming Club)</h5>
          <h5>5th Place in the ICPC Regionals D2 (90+ teams) </h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        iconStyle={{color: 'lightgray'}}
        icon={<BlurCircularOutlined />}
      >
        <h6>Sept. 2021 - present</h6>
        <h3 className="vertical-timeline-element-title">University of British Columbia</h3>
        <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
        <h5>
          Finished my first year towards a degree in Computer Science
        </h5>
        <h5>Coursework :  Data Structures & Algorithms, Software Construction, Program Design</h5>
        <h5>4.0 GPA - Faculty of Science's Dean's Honour List</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        iconStyle={{color: 'lightgray'}}
        icon={<BlurCircularOutlined/>}
      >
        <h6>June 2021 - August 2021</h6>
        <h3 className="vertical-timeline-element-title">Web Development Intern - 3SR Consultancy</h3>
        <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
        <h5>Implemented POST method for client-server communication</h5>
        <h5>Wrote authentication code for client data</h5>
        <h5>Designed and developed the login and signup pages for the website.</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white',  color: '#15023a'}}
        contentArrowStyle={{background:"blue" }}
        iconStyle={{ color: 'lightgray'}}
        icon={<BlurCircularOutlined/>}
      >
        <h6>Oct. 2019 - June 2021</h6>
        <h3 className="vertical-timeline-element-title">High School</h3>
        <h4 className="vertical-timeline-element-subtitle">Mississauga, ON</h4>
        <h5>
          Executive - Code Club 
        </h5>
        <h5>Distinction - Canadian Computing Competition (University of Waterloo)</h5>
        <h5>Top 7% - CEMC Euclid Math Contest (University of Waterloo)</h5>
      </VerticalTimelineElement>
      
      
    </VerticalTimeline>
    </div>
  )
}