import React from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  SmartImage,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import type { Metadata } from "next";
import { Meta, Schema } from "@/once-ui/modules";

type Params = { slug: string };

// Polyfill for Next 15 PageProps type (params/searchParams as Promises)
type PageProps<
  P = Record<string, string>,
  S = Record<string, string | string[] | undefined>
> = {
  params: Promise<P>;
  searchParams?: Promise<S>;
};

export async function generateStaticParams(): Promise<Params[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<Params>): Promise<Metadata> {
  const { slug } = await params;

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image: post.metadata.image
      ? `${baseURL}${post.metadata.image}`
      : `${baseURL}/og?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({ params }: PageProps<Params>) {
  const { slug } = await params;

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (p) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({
      src: member.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="xs" gap="16">
        <Button
          data-border="rounded"
          href="/work"
          variant="tertiary"
          weight="default"
          size="s"
          prefixIcon="chevronLeft"
        >
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>

      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}

      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && (
            <AvatarGroup reverse avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>

        <CustomMDX source={post.content} />
      </Column>

      <ScrollToHash />
    </Column>
  );
}

// Avoid edge/static conflict
export const dynamic = "force-dynamic";
