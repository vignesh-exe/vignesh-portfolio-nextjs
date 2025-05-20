'use client';

import { mailchimp } from '@/app/resources';
import { Button, Flex, Heading, Input, Text, Background, Column } from '@/once-ui/components';
import { opacity, SpacingToken } from '@/once-ui/types';
import { useState } from 'react';

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [touched, setTouched] = useState<{
    email: boolean;
    name: boolean;
  }>({ email: false, name: false });

  const validateEmail = (email: string): boolean => {
    if (email === '') {
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateName = (name: string): boolean => {
    return name.trim() !== '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (!validateName(value)) {
      setNameError('Please enter your name.');
    } else {
      setNameError('');
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const debouncedHandleEmailChange = debounce(handleEmailChange, 2000);

  const handleEmailBlur = () => {
    setTouched({ ...touched, email: true });
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleNameBlur = () => {
    setTouched({ ...touched, name: true });
    if (!validateName(name)) {
      setNameError('Please enter your name.');
    }
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color
        }}
      />
      <Heading style={{ position: 'relative' }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: 'relative',
          maxWidth: 'var(--responsive-width-xs)',
          fontWeight: 900
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
        action={mailchimp.action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <Column id="mc_embed_signup_scroll" fillWidth maxWidth={24} gap="16">
          <Input
            formNoValidate
            labelAsPlaceholder
            id="mce-NAME"
            name="NAME"
            type="text"
            label="Name"
            required
            onChange={e => {
              handleNameChange(e);
            }}
            onBlur={handleNameBlur}
            errorMessage={nameError}
          />

          <Input
            formNoValidate
            labelAsPlaceholder
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            label="Email"
            required
            onChange={e => {
              if (emailError) {
                handleEmailChange(e);
              } else {
                debouncedHandleEmailChange(e);
              }
            }}
            onBlur={handleEmailBlur}
            errorMessage={emailError}
          />

          <Input
            formNoValidate
            labelAsPlaceholder
            id="mce-DESCRIPTION"
            name="DESCRIPTION"
            type="text"
            label="Description"
            onChange={handleDescriptionChange}
          />

          <div style={{ display: 'none' }}>
            <input type="checkbox" readOnly name="group[3492][1]" id="mce-group[3492]-3492-0" value="" checked />
          </div>

          <div id="mce-responses" className="clearfalse">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>

          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" readOnly name="b_c1a5a210340eb6c7bff33b2ba_0462d244aa" tabIndex={-1} value="" />
          </div>

          <Button id="mc-embedded-subscribe" value="Send" size="m" fillWidth>
            Send
          </Button>
        </Column>
      </form>
    </Column>
  );
};
