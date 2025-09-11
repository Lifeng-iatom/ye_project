import StartupCard, { StartupCardType }  from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import {client} from "@/sanity/lib/client"
import { STARTUPS_QUERY } from "@/lib/queries";


export default async function Home({searchParams}: {searchParams: Promise<{query: string}>}){
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);
  console.log(JSON.stringify(posts,null,2));



  return(
    <>
      <section className="pink_container pattern">
        <h1 className="heading">Pitch Your Startup, <br />Connect with us</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, vote pn pitches and get noticed in virtual competitions</p>
        <SearchForm query={query} />

      </section>
      <section className="section_container">
        <p className="text-30 font-semibold">{query ? `Search Results for "${query}"` : "All Startups"}</p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
            <StartupCard key={post?._id} post={post} />
          ))) : (<p>No posts found</p>

          )}
        </ul>

      </section>
      
    </>
  )
}