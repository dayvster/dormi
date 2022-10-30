import CollectionsLayout from "../Layouts/CollectionsLayout";
import DefaultLayout from "../Layouts/DefaultLayout";
import { NextPageWithLayout } from "./_app";

export const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Home;
