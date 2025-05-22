import { Flex, Spinner, Text } from '@/once-ui/components';

export default function Loading() {
  return (
    <Flex fillWidth fillHeight vertical="center" horizontal="center" gap="l" style={{ minHeight: '100vh' }}>
      <Spinner size="xl" />
      <Text size="xl">Loading your experience...</Text>
    </Flex>
  );
}
