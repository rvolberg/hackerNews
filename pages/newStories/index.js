import CardContainer from "../../components/CardContainer";
import { getStoriesId, getStoriesItems } from "../../components/utils";

export async function getStaticProps() {
  const newStoriesId = await getStoriesId(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  const newStoriesItems = await getStoriesItems(newStoriesId);

  return {
    props: { newList: newStoriesItems },
  };
}

const NewStories = ({ newList }) => {
  return (
    <div className="mx-3">
      <h1 className="fs-2 text-center page-title my-5">New Stories</h1>
      {newList.map((item) => (
        <div key={item.id}>
          <CardContainer item={item} />
        </div>
      ))}
    </div>
  );
};

export default NewStories;
