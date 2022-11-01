import Button from "../Components/Buttons/Button";
import { DropdownButton } from "../Components/Buttons/DropdownButton";
import { CollectionsList } from "../Components/CollectionsList/CollectionsList";
import Searchbar from "../Components/Searchbar/Searchbar";
import CollectionsLayout from "../Layouts/CollectionsLayout";
import { NextPageWithLayout } from "./_app";

export const CollectionsPage: NextPageWithLayout = () => {
  return (
    <div className="p-4">
      <div className="top-bar flex items-center">
        <h1 className="font-semibold text-xl">Collections</h1>
        <div className="controls flex ml-auto gap-3">
          <Searchbar />
          <DropdownButton>Create</DropdownButton>
        </div>
      </div>
      <CollectionsList className="mt-4" />
    </div>
  );
};

CollectionsPage.getLayout = (page) => {
  return <CollectionsLayout>{page}</CollectionsLayout>;
};
export default CollectionsPage;
