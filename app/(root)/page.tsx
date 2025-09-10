import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query: string}>}){
  const query = (await searchParams).query;
  const posts =[
    {
      _createdAt: new Date(),
      views: 100,
      author: {_id:1, name: 'John Doe'},
      _id:1,
      description: 'This is a description of the startup',
      image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357',
      category: 'Technology',
      title: 'We robots',
    },
    {
      _createdAt: new Date(),
      views: 100,
      author: {_id:2, name: 'Lim'},
      _id:2,
      description: 'This is a description of the startup',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppRaCxS9tzH6NC3wA0_haqm8tt06WV4g4MA&s',
      category: 'Health',
      title: 'Couscous',
    },   
    {
      _createdAt: new Date(),
      views: 100,
      author: {_id:3,name: 'McDonalds'},
      _id:3,
      description: 'This is a description of the startup',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppRaCxS9tzH6NC3wA0_haqm8tt06WV4g4MA&s',
      category: 'Health',
      title: 'KFC',
    }
  ]


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
            posts.map((post:StartupCardType, index: number) => (
            <StartupCard key={post?._id} post={post} />
          ))) : (<p>No posts found</p>

          )}
        </ul>

      </section>
      
    </>
  )
}