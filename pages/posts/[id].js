import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
import Head from "next/head";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.postContent}>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        </article>

        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
