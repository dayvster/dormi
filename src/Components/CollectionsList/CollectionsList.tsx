import { useEffect, useState } from "react";
import { ICollection } from "../../models/models";
import { Database } from "../../services/db";
import {} from "dexie-react-hooks";

export interface ICollectionsListProps {
  className?: string;
}

export const CollectionsList = (props: ICollectionsListProps) => {
  const { className } = props;
  const { collections } = Database;
  const [_collections, _setCollections] = useState<ICollection[]>([]);
  const boxSize = "250px";
  useEffect(() => {
    collections
      .orderBy("updated")
      .toArray()
      .then((collections) => {
        _setCollections(collections);
      });
  }, [collections]);

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {_collections.map((collection) => (
        <div
          className={`cursor-pointer flex flex-col p-4 border rounded-xl xs:w-full mobile:w-full tablet:w-[300px] h-[300px]`}
          key={collection.uid}
        >
          <div className="name font-semibold">{collection.name}</div>
          <div className="description flex-1">
            <h3>{collection.description}</h3>
          </div>
          <footer>
            <div className="updated text-xs">
              {new Date(collection.updated).toLocaleDateString()}
            </div>
          </footer>
        </div>
      ))}
    </div>
  );
};
