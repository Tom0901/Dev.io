import Header from '../../components/Header'
import ContentWrapper from '../../components/ContentWrapper';
import Footer from '../../components/Footer';
import ReactMarkdown from "react-markdown";
import styles from '../../styles/BlogPage.module.css'



const URL =process.env.STRAPIBASEURL;

export async function getStaticPaths() {
    const fetchParams ={
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            query: `
            {
                blogposts{
                    slug
                }
            }
            `
        })
    }

    const res = await fetch(`${URL}/graphql`, fetchParams);
    const posts = await res.json()
    const paths = posts.data.blogposts.map((post)=>{
        return { params: { slug: post.slug }}
    })

    return {
        paths: paths,
        fallback: true
    };
}

export async function getStaticProps({params}) {

    const fetchParams ={
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            query: `
            {
                blogposts(where: {slug: "${params.slug}"}){
                  title
                  description
                  blogbody
                  splash{
                    url
                  }
                }
              }
            `
        })
    }

    const res = await fetch(`${URL}/graphql`, fetchParams);
    const {data} = await res.json();


    return {
        props: data.blogposts[0],
        revalidate: 10
    };
}

function Content({title, blogbody, splash}) {
  
    return (
        <ContentWrapper>
            <Header/>
            <main className={styles.grid}>
                <h1>{title}</h1>
                <ReactMarkdown>{blogbody}</ReactMarkdown>
            </main>
            <Footer/>
        </ContentWrapper>
    )
}

export default Content
