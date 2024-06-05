import { Container, List, ListItem } from '@mui/material';
import fs from 'fs/promises';
import type { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

export default function Page({ pages }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Container>
            <List
                sx={{
                    width: 'fit-content',
                    margin: '40px auto',
                }}
            >
                {pages.map((page) => (
                    <ListItem key={page}>
                        <Link href={`/${page}`}>{page}</Link>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export async function getServerSideProps() {
    const pages = await fs.readdir('pages');

    return {
        props: {
            pages: pages
                .filter(
                    (page) =>
                        !new Set(['_app.tsx', '_document.tsx', '_error.tsx']).has(page) &&
                        page.endsWith('.tsx' || page.endsWith('.mdx')),
                )
                .map((page) => page.replace(/\.tsx$/, '')),
        },
    };
}
