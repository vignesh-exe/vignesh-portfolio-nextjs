import { Button, Column, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import { person, about, social } from '@/app/resources/content';
import React from 'react';
import { Meta, Schema } from '@/once-ui/modules';
import TrueFocus from '@/blocks/TextAnimations/TrueFocus/TrueFocus';
// Import the TiltedCard component
import TiltedCard from '@/blocks/Components/TiltedCard/TiltedCard';

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

  // Frontend skills data with logos
  const frontendSkills = [
    {
      name: 'React',
      logo: '/images/skills/react.svg',
      description: 'Building interactive UIs with React and its ecosystem including Redux, React Router, and Hooks.'
    },
    {
      name: 'Next.js',
      logo: '/images/skills/nextjs.svg',
      description: 'Creating server-rendered React applications with Next.js for optimal performance and SEO.'
    },
    {
      name: 'TypeScript',
      logo: '/images/skills/typescript.svg',
      description: 'Writing type-safe code to improve development experience and reduce runtime errors.'
    },
    {
      name: 'Tailwind CSS',
      logo: '/images/skills/tailwind.svg',
      description: 'Implementing responsive designs efficiently with utility-first CSS framework.'
    },
    {
      name: 'JavaScript',
      logo: '/images/skills/javascript.svg',
      description: 'Proficient in modern JavaScript (ES6+) features and best practices.'
    },
    {
      name: 'HTML5 & CSS3',
      logo: '/images/skills/html5.svg',
      description: 'Creating semantic markup and responsive layouts with modern CSS techniques.'
    }
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
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
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
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column id={about.intro.title} fillWidth minHeight="160" vertical="center" marginBottom="32">
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: 'blur(var(--static-space-1))'
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton href={about.calendar.link} data-border="rounded" variant="secondary" icon="chevronRight" />
              </Flex>
            )}
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
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
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

              {/* New Technical Skills Section with Logos */}
              <Column fillWidth gap="xl" marginBottom="xl">
                <div className={styles.skillsGrid}>
                  {frontendSkills.map((skill, index) => (
                    <Flex
                      key={`skill-${index}`}
                      direction="column"
                      background="brand-alpha-weak"
                      border="brand-alpha-medium"
                      radius="l"
                      padding="l"
                      gap="m"
                      className={styles.skillCard}
                      style={{
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        backdropFilter: 'blur(8px)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        className={styles.skillLogo}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '80px',
                          marginBottom: '16px'
                        }}
                      >
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          style={{
                            height: '60px',
                            width: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))'
                          }}
                        />
                      </div>
                      <Text variant="heading-strong-m" style={{ textAlign: 'center' }}>
                        {skill.name}
                      </Text>
                      <Text variant="body-default-s" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
                        {skill.description}
                      </Text>

                      {/* Add a subtle gradient overlay */}
                      <div
                        className={styles.skillOverlay}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          zIndex: 1
                        }}
                      />
                    </Flex>
                  ))}
                </div>
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
