import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">কোনো সংবাদ পাওয়া যায়নি।</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

      <Link href={`/${firstNews.id}`}>
        {/* Main News */}
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              height={600}
              width={600}
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
            />
          </figure>

          <div className="card-body">
            <p className="text-red-600 font-semibold">
              {firstNews.category}
            </p>

            <h2 className="card-title">
              {firstNews.title}
            </h2>

            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

      {/* Other News */}
      <div className="grid gap-2">
        {otherNews.slice(0, 4).map((on) => (
          <Link key={on.id} href={`/${on.id}`}>
            <div className="card bg-base-100 border border-gray-300 p-3">
              <p className="text-red-600 font-semibold">
                {on.category}
              </p>

              <h2 className="font-semibold">
                {on.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default MainNews;