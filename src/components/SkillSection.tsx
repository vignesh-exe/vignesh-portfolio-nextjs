'use client';

import React from 'react';
import { useTheme, RevealFx } from '@/once-ui/components';
import ScrollVelocity from '@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSap
} from 'react-icons/si';

export default function SkillsSection() {
  const { theme } = useTheme();

  // Determine mask color based on theme
  const maskColor = theme === 'light' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)';
  const transparentColor = theme === 'light' ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)';

  return (
    <RevealFx translateY="4" fillWidth horizontal="center" paddingTop="40" paddingBottom="40">
      <div className="skills-section" style={{ width: '200%', marginTop: '-34px', position: 'relative' }}>
        {/* Left alpha mask with theme-aware gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '15%',
            background: `linear-gradient(to right, ${maskColor}, ${transparentColor})`,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>

        <ScrollVelocity
          items={[
            <div key="icons-row" style={{ display: 'flex', alignItems: 'center', margin: '0 20px' }}>
              <SiReact
                key="react"
                size={80}
                color="rgba(97, 218, 251, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(97, 218, 251, 0.3))'
                }}
              />

              <SiNextdotjs
                key="nextjs"
                size={80}
                color="rgba(255, 255, 255, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                }}
              />

              <SiTypescript
                key="typescript"
                size={80}
                color="rgba(49, 120, 198, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(49, 120, 198, 0.3))'
                }}
              />

              <SiJavascript
                key="javascript"
                size={80}
                color="rgba(247, 223, 30, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(247, 223, 30, 0.3))'
                }}
              />

              <SiHtml5
                key="html5"
                size={80}
                color="rgba(227, 79, 38, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(227, 79, 38, 0.3))'
                }}
              />

              <SiCss3
                key="css3"
                size={80}
                color="rgba(21, 114, 182, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(21, 114, 182, 0.3))'
                }}
              />

              <SiTailwindcss
                key="tailwind"
                size={80}
                color="rgba(56, 178, 172, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(56, 178, 172, 0.3))'
                }}
              />

              <SiBootstrap
                key="bootstrap"
                size={80}
                color="rgba(121, 82, 179, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(121, 82, 179, 0.3))'
                }}
              />

              <SiSass
                key="sass"
                size={80}
                color="rgba(204, 102, 153, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(204, 102, 153, 0.3))'
                }}
              />

              <SiNodedotjs
                key="nodejs"
                size={80}
                color="rgba(51, 153, 51, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(51, 153, 51, 0.3))'
                }}
              />

              <SiGit
                key="git"
                size={80}
                color="rgba(240, 80, 50, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(240, 80, 50, 0.3))'
                }}
              />

              <SiDocker
                key="docker"
                size={80}
                color="rgba(36, 150, 237, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(36, 150, 237, 0.3))'
                }}
              />

              <SiFigma
                key="figma"
                size={80}
                color="rgba(242, 78, 30, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(242, 78, 30, 0.3))'
                }}
              />

              <SiAdobephotoshop
                key="photoshop"
                size={80}
                color="rgba(49, 168, 255, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(49, 168, 255, 0.3))'
                }}
              />

              <SiAdobeillustrator
                key="illustrator"
                size={80}
                color="rgba(255, 154, 0, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(255, 154, 0, 0.3))'
                }}
              />
              <SiSap
                key="SAP"
                size={80}
                color="rgba(49, 168, 255, 0.7)"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 20px',
                  filter: 'drop-shadow(0 0 8px rgba(49, 168, 255, 0.3))'
                }}
              />
            </div>
          ]}
          velocity={50}
          className="skill-item"
        />

        {/* Right alpha mask with theme-aware gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '15%',
            background: `linear-gradient(to left, ${maskColor}, ${transparentColor})`,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>
      </div>
    </RevealFx>
  );
}
