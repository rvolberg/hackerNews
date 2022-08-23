import CardContainer from "../../components/CardContainer";
import { getStoriesId, getStoriesItems, compare } from "../../components/utils";

export async function getStaticProps() {
  const topStoriesId = await getStoriesId(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const topStoriesItems = await (
    await getStoriesItems(topStoriesId)
  ).sort(compare);

  return {
    props: { topList: topStoriesItems },
  };
}

const TopStories = ({ topList }) => {
  return (
    <div className="mx-3">
      <h1 className="fs-2 text-center page-title my-5">Top Stories</h1>
      {topList.map((item) => (
        <div key={item.id}>
          <CardContainer item={item} />
        </div>
      ))}
    </div>
  );
};

export default TopStories;
