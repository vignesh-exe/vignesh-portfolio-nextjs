'use client';

import React, { Suspense } from 'react';
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row } from '@/once-ui/components';
import TextPressure from '@/blocks/TextAnimations/TextPressure/TextPressure';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/images/vicky-robot-3d.glb');
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function HeroSection({ home, about, person }) {
  return (
    <Flex fillWidth gap="32" mobileDirection="column">
      <Column maxWidth="s" flex={1}>
        <RevealFx
          translateY="4"
          fillWidth
          horizontal="start"
          paddingBottom="16"
          style={{ marginRight: '30rem', width: '100%', marginTop: '100px' }}
        >
          <Heading wrap="balance" variant="display-strong-l" style={{ alignContent: 'center' }}>
            <TextPressure
              text="Hello!"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={150}
            />
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            {home.subline}
          </Text>
        </RevealFx>
        <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
          <Button id="about" data-border="rounded" href={about.path} variant="secondary" size="m" arrowIcon>
            <Flex gap="8" vertical="center">
              {about.avatar.display && (
                <Avatar style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }} src={person.avatar} size="m" />
              )}
              {about.title}
            </Flex>
          </Button>
        </RevealFx>
        {home.featured && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
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
      <RevealFx flex={2} translateY="8" delay={0.3}>
        <Flex
          fillWidth
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* 3D model with original styling */}
          <div style={{ width: '100%', height: '400px' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <Model />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} enablePan={false} />
              </Suspense>
            </Canvas>
          </div>
        </Flex>
      </RevealFx>
    </Flex>
  );
}
