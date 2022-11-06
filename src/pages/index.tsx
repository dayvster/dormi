import { useEffect, useState } from "react";
import { DropdownButton } from "../Components/Buttons/DropdownButton";
import { CollectionsList } from "../Components/CollectionsList/CollectionsList";
import Searchbar from "../Components/Searchbar/Searchbar";
import CollectionsLayout from "../Layouts/CollectionsLayout";
import { ICollection } from "../models/models";
import { Database } from "../services/db";
import { NextPageWithLayout } from "./_app";

export const CollectionsPage: NextPageWithLayout = () => {
  const { collections } = Database;
  const [_collections, _setCollections] = useState<ICollection[]>([]);

  useEffect(() => {
    collections
      .orderBy("updated")
      .reverse()
      .toArray()
      .then((collections) => {
        _setCollections(collections);
      });
  }, [collections]);

  const [search, setSearch] = useState("");
  const [filteredCollections, setFilteredCollections] = useState<ICollection[]>(
    [] as ICollection[]
  );
  useEffect(() => {
    if (search.length > 0) {
      const filtered = _collections.filter((collection) =>
        collection.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCollections(filtered);
    } else {
      setFilteredCollections(_collections);
    }
  }, [search, _collections]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="top-bar flex items-center">
        <h1 className="font-semibold text-xl">Collections</h1>
        <div className="controls flex ml-auto gap-3">
          <Searchbar onChange={handleSearch} />
          <DropdownButton>Create</DropdownButton>
        </div>
      </div>
      <CollectionsList collections={filteredCollections} className="mt-4" />
    </div>
  );
};

CollectionsPage.getLayout = (page) => {
  return <CollectionsLayout>{page}</CollectionsLayout>;
};
export default CollectionsPage;
