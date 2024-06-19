import { Button, List, ListItem } from '@mui/material';
import router, { useRouter } from 'next/router';

export default function NextRouter() {
    const touter = useRouter();
    return (
        <List>
            <ListItem>
                <Button
                    onClick={() => {
                        router.push('/', undefined, { shallow: true });
                    }}
                >
                    push new page
                </Button>

                <Button
                    onClick={() => {
                        router.query.tab = 'album';
                        router.replace(router, undefined, { shallow: true });
                    }}
                >
                    update query by replace
                </Button>

                <Button
                    onClick={() => {
                        router.query.tab = 'album';
                        router.push(router, undefined, { shallow: true });
                    }}
                >
                    update query by push
                </Button>

                <Button
                    onClick={() => {
                        router.push(
                            {
                                pathname: router.pathname,
                                query: {
                                    tab: 'album',
                                },
                            },
                            undefined,
                            { shallow: true },
                        );
                    }}
                >
                    update query
                </Button>
            </ListItem>
        </List>
    );
}

export async function getServerSideProps() {
    return { props: {} };
}
