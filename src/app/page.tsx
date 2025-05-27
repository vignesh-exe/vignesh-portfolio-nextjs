import React from 'react';
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, mailchimp, routes } from '@/app/resources';
import { home, about, person, newsletter, blog, work } from '@/app/resources/content';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { Meta, Schema } from '@/once-ui/modules';
import ThemedTextPressure from '@/app/ThemedTextPressure'; // Import the new component
import ModelViewerSection from '@/blocks/Components/ModelViewerSection';
import Magnet from '@/blocks/Animations/Magnet/Magnet';
import SkillSection from '@/components/SkillSection';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path
  });
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`
        }}
      />
      {/* TextPressure Hello! section */}
      <Column fillWidth paddingY="24" gap="m" horizontal="center" align="center">
        <RevealFx
          translateY="4"
          fillWidth
          horizontal="center"
          paddingBottom="16"
          // speed="medium"
          style={{ width: '200%', marginTop: '60px' }}
        >
          <Heading wrap="balance" variant="display-strong-l" style={{ textAlign: 'center' }}>
            <ThemedTextPressure text="Hello!!!" minFontSize={450} />
          </Heading>
        </RevealFx>

        {/* Subline text */}
        <RevealFx
          translateY="8"
          delay={0.2}
          fillWidth
          horizontal="center"
          paddingBottom="32"
          style={{ marginTop: '-20px' }}
        >
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-xl"
            style={{ textAlign: 'center', maxWidth: '800px', fontWeight: 900, marginTop: '2px', fontSize: '30px' }}
          >
            {home.subline}
          </Text>
        </RevealFx>

        {/* About button */}
        <RevealFx paddingTop="12" delay={0.4} horizontal="center" style={{ marginTop: '-30px' }}>
          <Button id="about" data-border="rounded" href={about.path} variant="secondary" size="m" arrowIcon>
            <Flex gap="8" vertical="center">
              {about.avatar.display && (
                <img
                  src="/images/vicky-gif.gif"
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '-0.75rem'
                    // marginRight: '0.rem'
                  }}
                />
              )}
              {about.title}
            </Flex>
          </Button>
        </RevealFx>

        {/* Featured badge */}
        {home.featured && (
          <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" style={{ marginTop: '-30px' }}>
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={true}
              href={home.featured.href}
            >
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
        )}
      </Column>
      {/* Headline */}
      <RevealFx
        translateY="4"
        fillWidth
        horizontal="start"
        paddingBottom="16"
        style={{ width: '100%', alignItems: 'center', textAlign: 'center' }}
      >
        <Heading wrap="balance" variant="display-strong-l">
          {home.headline}
        </Heading>
      </RevealFx>
      <div style={{ marginTop: '-135px', marginBottom: '-230px' }}>
        <ModelViewerSection />
      </div>
      <Column fillWidth paddingY="24" gap="xl" horizontal="center" align="center">
        <div style={{ width: '200%' }}>
          <SkillSection />
        </div>
      </Column>
      {/* Blog Section */}
      {routes['/blog'] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      {/* Projects Section */}
      <Projects range={[2]} />
      {/* Contact Badge with Magnet Effect */}
      {newsletter.display && (
        <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" style={{ width: '200%' }}>
          <Magnet padding={50} magnetStrength={3}>
            <Badge
              background="brand-alpha-weak"
              paddingX="32"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={true}
              href={blog.path}
            >
              <Row paddingY="2">CONTACT - VIGNESH</Row>
            </Badge>
          </Magnet>
        </RevealFx>
      )}
    </Column>
  );
}
