import SearchForm from "../components/SearchForm";

export default function Home(){
  return(
    <>
      <section className="pink_container pattern">
        <h1 className="heading">Pitch Your Startup, <br />Connect with us</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, vote pn pitches and get noticed in virtual competitions</p>
        <SearchForm />

      </section>
      
    </>
  )
}