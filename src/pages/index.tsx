import CollectionsLayout from "../Layouts/CollectionsLayout";
import { NextPageWithLayout } from "./_app";

export const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

Home.getLayout = (page) => {
  return <CollectionsLayout>{page}</CollectionsLayout>;
};
export default Home;
