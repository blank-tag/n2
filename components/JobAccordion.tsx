"use client";

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const JobAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="w-full    relative flex flex-col items-center justify-center">
      <div className="w-full    flex items-center justify-center text-center px-4">
        <div className="text-white z-10 flex flex-col items-center gap-6 max-w-[80%]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Job Listings{' '}
            <span className="relative inline-block text-[#047CFC] font-[900]">
              at Nuerify
              <span
                className="absolute inset-0 blur-[200px] bg-[#047CFC] rounded-full opacity-50 pointer-events-none"
                aria-hidden="true"
              ></span>
            </span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Explore our current job listings to discover exciting career opportunities that match your skill set and
            interests. We offer positions in various digital disciplines, including AI engineer, Full-stack developer,
            digital marketing, project management, and more. Each job listing provides comprehensive details about the
            role, responsibilities, qualifications, and benefits. Whether you are an experienced professional or a fresh
            graduate, we welcome talent from all backgrounds to join our team.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mt-10 mx-auto px-6 py-20 bg-[#040810]/75 text-[#fff] rounded-lg border border-[#14244C]/50 shadow-xl relative">
        {/* Apply Now Button */}
        <button className="absolute top-4 right-4 flex items-center px-4 z-10 py-2 bg-gradient-to-r from-[#0A2B52] to-[#012039] text-sm text-white font-medium rounded-full shadow-md hover:opacity-90 transition">
          Apply Now
          <ArrowForwardIcon className="ml-2 text-white" />
        </button>

        {/* Accordion */}
        <Accordion
          expanded={expanded}
          onChange={handleToggle}
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: '#040810BF',
            color: '#fff',
            borderRadius: '12px',
            '&:before': { display: 'none' },
          }}
        >
          {/* Accordion Summary */}
          <AccordionSummary
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              backgroundColor: '#040810BF',
            }}
            expandIcon={null} // Remove MUI's default expand icon
          >
            {/* Job Title and Location */}
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Web Designer</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.6)' }}>Mumbai, India</p>

              {/* Salary, Experience, and Skills */}
              <div style={{ marginTop: '1rem', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <AttachMoneyIcon sx={{ color: '#fff', fontSize: '1rem' }} />
                  <p style={{ fontSize: '0.875rem' }}>Salary - $45,000 - $60,000 per year (based on experience)</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <WorkIcon sx={{ color: '#fff', fontSize: '1rem' }} />
                  <p style={{ fontSize: '0.875rem' }}>
                    Experience - Minimum 1 year of professional web design experience.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <StarIcon sx={{ color: '#fff', fontSize: '1rem' }} />
                  <p style={{ fontSize: '0.875rem' }}>
                    Skills - Proficiency in Adobe Creative Suite, strong understanding of UI/UX design principles,
                    responsive design expertise.
                  </p>
                </div>
              </div>
            </div>
          </AccordionSummary>

          {/* Accordion Details */}
          <AccordionDetails
            sx={{
              marginTop: '1rem',
              padding: '1rem',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Job Description */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(20, 36, 76, 0.25) 0%, rgba(20, 36, 76, 0) 100%)',
                padding: '1rem',
                borderRadius: '12px',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Job Description</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                As a Web Designer at DigiX, you will be responsible for creating visually stunning and user-friendly
                website designs. Working closely with our development and marketing teams, you will turn creative
                concepts into functional web interfaces that deliver exceptional user experiences.
              </p>
            </div>
            {/* Responsibilities */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(20, 36, 76, 0.25) 0%, rgba(20, 36, 76, 0) 100%)',
                padding: '1rem',
                borderRadius: '12px',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Responsibilities</h3>
              <ul
                style={{
                  fontSize: '0.875rem',
                  listStyle: 'disc',
                  paddingInlineStart: '1rem',
                  lineHeight: 1.5,
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                <li>Design and create visually appealing website layouts.</li>
                <li>
                  Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design
                  elements.
                </li>
                <li>Conduct user research to understand user behaviors for optimized design decisions.</li>
                <li>Stay updated with industry trends and emerging design tools and techniques.</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Show More / Show Less Button */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          {/* Wrapper for full click area */}
          <div onClick={handleToggle} className="flex items-center justify-center space-x-2 cursor-pointer w-fit h-fit">
            {/* Circular Icon Button */}
            <span className="text-sm text-gray-500 font-medium">{expanded ? 'Show Less' : 'Show More'}</span>
            <div className="w-14 h-14 bg-gradient-to-b from-[#14244C] to-[#040810] text-white rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition">
              <ExpandMoreIcon className={`text-white transition-transform ${expanded ? 'rotate-180' : 'rotate-0'}`} />
            </div>

            {/* Button Text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAccordion;
