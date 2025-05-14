'use client';
import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import Dock from '@/blocks/Components/Dock/Dock';

const SocialDock: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style = {} }) => {
  const year = new Date().getFullYear();
  const socialItems = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      onClick: () => window.open('mailto:vigneshashokann@gmail.com', '_blank')
    },
    {
      icon: <FaTwitter size={24} />,
      label: 'Twitter',
      onClick: () => window.open('https://x.com/VigneshAsh2610', '_blank')
    },
    {
      icon: <AiFillLinkedin size={24} />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/vignesh-ashokan-08a619276/', '_blank')
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/vignesh-exe', '_blank')
    },
    {
      icon: <AiFillMediumCircle size={24} />,
      label: 'Medium',
      onClick: () => window.open('https://medium.com/@vigneshashokann', '_blank')
    }
  ];

  return (
    <>
      <div>
        <Dock
          items={socialItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className={className}
          //   style={style}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 text-center text-xs text-gray-500 mb-1">
        © {year} Vignesh. All rights reserved.
      </div>
    </>
  );
};

export default SocialDock;
