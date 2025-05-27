import { Carousel, Flex, RevealFx } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import { gallery, person } from '@/app/resources/content';
import { Meta, Schema } from '@/once-ui/modules';
import { Heading, Column, Text } from '@/once-ui/components';

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
  // Stack component configuration
  const stackImages = [
    { id: 1, img: '/images/gallery/puppy.jpg' },
    { id: 2, img: '/images/gallery/river.jpg' },
    { id: 3, img: '/images/gallery/beach.jpg' },
    { id: 4, img: '/images/gallery/field.jpg' },
    { id: 5, img: '/images/gallery/ganesha.jpg' }
  ];

  return (
    <Flex maxWidth="xl" direction="column" fillWidth gap="xl">
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
      <RevealFx>
        <Heading wrap="balance" variant="display-strong-l" style={{ textAlign: 'center', marginTop: '30px' }}>
          Gallery: The Visual Side of Code
        </Heading>
      </RevealFx>

      {/* Stack Section - Replace BounceCards */}
      <Flex direction="column" gap="m" style={{ alignItems: 'center' }}>
        <Carousel
          style={{
            maxWidth: '800px', // Decrease from default
            height: '700px' // Set specific height
          }}
          images={[
            { src: '/images/gallery/beach.jpg', alt: 'Beach' },
            { src: '/images/gallery/puppy.jpg', alt: 'Puppy' },
            { src: '/images/gallery/river.jpg', alt: 'River' },
            { src: '/images/gallery/field.jpg', alt: 'Field' },
            { src: '/images/gallery/ganesha.jpg', alt: 'Ganesha' },
            { src: '/images/gallery/mahabs.jpg', alt: 'Mahabs' },
            { src: '/images/gallery/me.jpg', alt: 'Me' },
            { src: '/images/gallery/moon.png', alt: 'Moon' },
            { src: '/images/gallery/postoffice.jpg', alt: 'Post Office' },
            { src: '/images/gallery/skeleton.jpg', alt: 'Skeleton' },
            { src: '/images/gallery/vandalur.jpg', alt: 'Vandalur' }
          ]}
        />
      </Flex>
    </Flex>
  );
}
