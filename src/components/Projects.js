import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import './Projects.css';

const projects = [
  {
    title: "ATM Simulator",
    description: "A simulation of ATM functionalities using C language.",
  },
  {
    title: "Online Library System",
    description: "A library management system built in Java.",
  },
  {
    title: "E-Commerce Website",
    description: "An online shopping platform created with Python and Django.",
  },
  {
    title: "Smart Glasses for Accessibility",
    description: "A project aimed at making smart glasses for visually impaired individuals.",
  },
];

const Projects = () => {
  return (
    <Box className="projects-container">
      <Typography variant="h3" className="section-title">
        My Projects
      </Typography>
      <Box className="projects-list">
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            <CardContent>
              <Typography variant="h5" className="project-title">
                {project.title}
              </Typography>
              <Typography className="project-description">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
