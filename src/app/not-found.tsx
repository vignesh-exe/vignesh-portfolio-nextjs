'use client';

import { Suspense } from 'react';
import { Column, Heading, Text } from '@/once-ui/components';

// Content component that might use hooks internally
function NotFoundContent() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
    </Column>
  );
}

// Main component with Suspense boundary
export default function NotFound() {
  return (
    <Suspense
      fallback={
        <Column as="section" fill center paddingBottom="160">
          <Text>Loading...</Text>
        </Column>
      }
    >
      <NotFoundContent />
    </Suspense>
  );
}

// Disable static generation for this page
export const dynamic = 'force-dynamic';
