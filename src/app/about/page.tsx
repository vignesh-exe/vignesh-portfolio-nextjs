import { Button, Column, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import { person, about, social } from '@/app/resources/content';
import React from 'react';
import { Meta, Schema } from '@/once-ui/modules';
import TrueFocus from '@/blocks/TextAnimations/TrueFocus/TrueFocus';
import RotatingText from '@/blocks/TextAnimations/RotatingText/RotatingText';
import TiltedCard from '@/blocks/Components/TiltedCard/TiltedCard';
// Import skill icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiSass,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobeillustrator
} from 'react-icons/si';

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(about.title)}`,
    path: about.path
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: []
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(experience => experience.company)
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(institution => institution.name)
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map(skill => skill.title)
    }
  ];

  // Skills data with icons and colors
  const skills = [
    { icon: <SiReact size={40} />, name: 'React', color: '#61DAFB' },
    { icon: <SiNextdotjs size={40} />, name: 'Next.js', color: '#000000' },
    { icon: <SiTypescript size={40} />, name: 'TypeScript', color: '#3178C6' },
    { icon: <SiJavascript size={40} />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiHtml5 size={40} />, name: 'HTML5', color: '#E34F26' },
    { icon: <SiCss3 size={40} />, name: 'CSS3', color: '#1572B6' },
    { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS', color: '#38B2AC' },
    { icon: <SiBootstrap size={40} />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <SiSass size={40} />, name: 'Sass', color: '#CC6699' },
    { icon: <SiNodedotjs size={40} />, name: 'Node.js', color: '#339933' },
    { icon: <SiGit size={40} />, name: 'Git', color: '#F05032' },
    { icon: <SiDocker size={40} />, name: 'Docker', color: '#2496ED' },
    { icon: <SiFigma size={40} />, name: 'Figma', color: '#F24E1E' },
    { icon: <SiAdobephotoshop size={40} />, name: 'Photoshop', color: '#31A8FF' },
    { icon: <SiAdobeillustrator size={40} />, name: 'Illustrator', color: '#FF9A00' }
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            {/* Replace the Avatar component with TiltedCard */}
            <TiltedCard
              imageSrc="/images/vicky.jpg"
              captionText={person.name}
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text"></p>}
            />
            <RotatingText
              texts={['Frontend Developer', 'UI/UX Designer', 'React Expert', 'Problem Solver']}
              mainClassName="rotating-text-container"
              staggerFrom={'last'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              rotationInterval={3000}
              style={{
                background: 'rgba(205, 212, 222, 0.33)' /* blue-300 with transparency */,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)' /* For Safari */,
                border: '1px solid rgba(16, 153, 183, 0.93)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 16px rgba(31, 38, 135, 0.15)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center'
              }}
            />

            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40} style={{ marginTop: '40px' }}>
          <Column id={about.intro.title} fillWidth minHeight="160" vertical="center" marginBottom="32">
            <Heading style={{ marginLeft: '-10rem', wordSpacing: '30px' }}>
              <TrueFocus
                sentence="VIGNESH ASHOKAN"
                manualMode={false}
                blurAmount={2.5}
                borderColor="#00D8FF"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />
            </Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  item =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    )
                )}
              </Flex>
            )}
          </Column>
          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}
          {about.calendar.display && (
            <Flex
              fitWidth
              border="brand-alpha-medium"
              className={styles.blockAlign}
              style={{
                backdropFilter: 'blur(var(--static-space-1))',
                marginTop: '-50px'
              }}
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
            >
              <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
              <Flex paddingX="8">View Resume</Flex>
              <IconButton href={about.calendar.link} data-border="rounded" variant="secondary" icon="chevronRight" />
            </Flex>
          )}
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={String(experience.company)} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text as="li" variant="body-default-m" key={`${experience.company}-${index}`}>
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.technical.display && (
            <>
              <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="40">
                {about.technical.title}
              </Heading>

              {/* Simple skills grid with hover effects */}
              <div className={styles.skillsIconGrid}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skillIconWrapper}>
                    <div className={styles.skillIcon} style={{ color: skill.color }}>
                      {skill.icon}
                      <div className={styles.skillName}>{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
