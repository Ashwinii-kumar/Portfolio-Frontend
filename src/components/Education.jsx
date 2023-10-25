import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="w-[75%] mx-auto p-4  ">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-brown-400  "
          date="2022-Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Job Hunt To Start Career in Web Development
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-brown-400 "
          date="2020-2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Drop for GATE Preparation
          </h3>

          <p className="text-black">Varanasi,India</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-brown-400 "
          date="2016 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-black">
            B.E. in Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-black font-bold">
            Birla Institute of Technology,Mesra,Ranchi
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-brown-400  font-bold"
          date="2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-black">XII</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Dalimss Sunbeam School
          </h4>
          <p className="text-black">Varanasi,India</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-brown-400  font-bold"
          date="2014"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-black">X</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Dalimss Sunbeam School
          </h4>
          <p className="text-black">Varanasi,India</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
