import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import "./Timeline.css";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent className="timelineDate">
              {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>
            <TimelineSeparator className="timelineSeparate">
              <TimelineConnector className="timelineconnect" />
              <TimelineDot className="timelineDot">
                <Event />
              </TimelineDot>
              <TimelineConnector className="timelineconnect" />
            </TimelineSeparator>
            <TimelineContent className="timelineContent">
              <Typography variant="h6" className="timelinetitle">
                {item.title}
              </Typography>
              <Typography className="timelineDesc">
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
