import Document, { Html, Head, Main, NextScript } from 'next/document'
import {
    DocumentHeadTags,
    documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';


export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
    return (
        <Html lang="en">
            <Head>
                <DocumentHeadTags {...props} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx) => {
    const finalProps = await documentGetInitialProps(ctx);
    return finalProps;
};