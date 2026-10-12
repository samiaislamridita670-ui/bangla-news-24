const newsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();
  const news = data.data;

  if (!news || Array.isArray(news)) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-600">
          এই নিউজের বিস্তারিত পাওয়া যায়নি।
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-6">
        {news.title}
      </h1>

      <p className="text-lg leading-8">
        {news.text}
      </p>
    </div>
  );
};

export default newsDetails;