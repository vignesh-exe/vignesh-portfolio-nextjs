import { Column, Heading } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL } from '@/app/resources';
import { blog, person, newsletter } from '@/app/resources/content';
import { Meta, Schema } from '@/once-ui/modules';

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
    path: blog.path
  });
}

export default function Blog() {
  return (
    <Column maxWidth="l" style={{ marginTop: '40px' }}>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
