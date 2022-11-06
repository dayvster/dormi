import { useEffect, useState } from "react";
import { ICollection } from "../../models/models";
import { Database } from "../../services/db";
import {} from "dexie-react-hooks";
import Link from "next/link";

export interface ICollectionsListProps {
  className?: string;
  collections?: ICollection[];
}

export const CollectionsList = (props: ICollectionsListProps) => {
  const { className, collections } = props;
  if (!collections) {
    return <></>;
  }

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {collections.map((collection) => (
        <Link href={`/collections/${collection.uid}`} key={collection.uid}>
          <div
            className={`cursor-pointer flex flex-col p-4 border rounded-xl xs:w-full mobile:w-full tablet:w-[300px] h-[300px]`}
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
        </Link>
      ))}
    </div>
  );
};
