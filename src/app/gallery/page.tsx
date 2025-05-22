import { Flex } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import { gallery, person } from '@/app/resources/content';
import { Meta, Schema } from '@/once-ui/modules';
import CircularGallery from '@/blocks/Components/CircularGallery/CircularGallery';

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="xl" direction="column" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`
        }}
      />

      <div style={{ height: '900px', position: 'relative', width: '100%' }}>
        <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.08} />
      </div>
    </Flex>
  );
}
