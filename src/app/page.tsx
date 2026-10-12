
import MainNews from "./components/MainNews";
import NewsCard from "./components/newsCard";
import MostRead from "./components/MostRead";

interface IotherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const rest = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await rest.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSection = sections.slice(1);

  return (
    <main className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* News Section */}
        <div className="min-w-0 lg:col-span-2">
          <MainNews news={mainNews} />

          <div className="mt-5 grid gap-5">
            {otherSection.map((os) => (
              <div
                className="border-b-2 border-red-700 pb-3"
                key={os.curationId}
              >
                <h2 className="mb-3 border-b-2 pb-2 font-bold">
                  {os.title}
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Section */}
        <aside className="min-w-0 lg:col-span-1">
          <MostRead />
        </aside>
      </div>
    </main>
  );
}
