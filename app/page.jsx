import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Share your favorite
        <br className="max-sm:hidden" />
        <span className="orange_blue text-center"> prompts for AI models</span>
      </h1>
      <p className="desc text-center">
        LazyPrompt is a place to get quick inspiration for your next prompt.
        Share you own favorites with the rest of the world!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
