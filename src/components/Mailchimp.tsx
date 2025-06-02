'use client';
import emailjs from '@emailjs/browser';
import { Button, Flex, Heading, Input, Text, Background, Column } from '@/once-ui/components';
import { opacity, SpacingToken } from '@/once-ui/types';
import { useState, useEffect } from 'react';

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_unzhg96',
  TEMPLATE_ID: 'template_gqunqh5',
  PUBLIC_KEY: '2auxZ3JcwAulM_gik'
};

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

import { mailchimp } from '@/app/resources';

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [touched, setTouched] = useState<{
    email: boolean;
    name: boolean;
  }>({ email: false, name: false });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

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

  // Simplified email validation function
  const validateEmailField = (value: string) => {
    if (touched.email && !validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  // Debounced email validation
  const debouncedEmailValidation = debounce(validateEmailField, 500);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Only validate if field has been touched
    if (touched.email) {
      debouncedEmailValidation(value);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (touched.name) {
      if (!validateName(value)) {
        setNameError('Please enter your name.');
      } else {
        setNameError('');
      }
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleEmailBlur = () => {
    setTouched({ ...touched, email: true });
    validateEmailField(email);
  };

  const handleNameBlur = () => {
    setTouched({ ...touched, name: true });
    if (!validateName(name)) {
      setNameError('Please enter your name.');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ email: true, name: true });

    // Validate form before submission
    const isEmailValid = validateEmail(email);
    const isNameValid = validateName(name);

    if (!isEmailValid) {
      setEmailError('Please enter a valid email address.');
    }
    if (!isNameValid) {
      setNameError('Please enter your name.');
    }

    if (!isEmailValid || !isNameValid) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        message: description || 'No additional message provided',
        to_email: 'vigneshashokann@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        // Reset form
        setName('');
        setEmail('');
        setDescription('');
        setTouched({ email: false, name: false });
        setEmailError('');
        setNameError('');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
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

      {submitMessage && (
        <Text
          style={{
            position: 'relative',
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: submitMessage.includes('error') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
            color: submitMessage.includes('error') ? 'rgb(239, 68, 68)' : 'rgb(34, 197, 94)',
            border: `1px solid ${submitMessage.includes('error') ? 'rgba(239, 68, 68, 0.3)' : 'rgba(34, 197, 94, 0.3)'}`
          }}
          marginBottom="m"
        >
          {submitMessage}
        </Text>
      )}

      <form
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
        onSubmit={handleSubmit}
      >
        <Column fillWidth maxWidth={24} gap="16">
          <Input
            formNoValidate
            labelAsPlaceholder
            id="contact-name"
            name="name"
            type="text"
            label="Name"
            required
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            errorMessage={nameError}
            disabled={isSubmitting}
          />
          <Input
            formNoValidate
            labelAsPlaceholder
            id="contact-email"
            name="email"
            type="email"
            label="Email"
            required
            value={email}
            onChange={handleEmailChange} // Simplified - just use the main handler
            onBlur={handleEmailBlur}
            errorMessage={emailError}
            disabled={isSubmitting}
          />
          <Input
            formNoValidate
            labelAsPlaceholder
            id="contact-description"
            name="description"
            type="text"
            label="Message (Optional)"
            value={description}
            onChange={handleDescriptionChange}
            disabled={isSubmitting}
          />
          <Button type="submit" size="m" fillWidth disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </Column>
      </form>
    </Column>
  );
};
