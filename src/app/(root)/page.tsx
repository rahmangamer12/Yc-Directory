import { STARTUPS_QUERY } from "@/src/sanity/lib/queries";
import SearchForm from "../../../components/SearchForm";
import StartupCard from "@components/StartupCard";
import { client } from "@/src/sanity/lib/client";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query || "";

  const posts = await client.fetch(STARTUPS_QUERY);
  console.log("Fetched posts:", JSON.stringify(posts, null, 2)); // Debugging fetched data

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
