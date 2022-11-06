import Router, { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import DefaultLayout from "../../Layouts/DefaultLayout";
import { ICollection } from "../../models/models";
import { GetCollectionByUID } from "../../services/db";
import { useAppStore } from "../../store/AppStore";
import { NextPageWithLayout } from "../_app";

export interface ICollectionUIDProps {}
export const CollectionUID: NextPageWithLayout = (
  props: ICollectionUIDProps
) => {
  const router = useRouter();
  const { slug } = router.query;
  const [collection, setCollection] = React.useState<ICollection>(null);
  const appState = useAppStore((state) => state);

  useEffect(() => {
    if (slug) {
      GetCollectionByUID(slug as string).then((res) => {
        setCollection(res);
        appState.setCurrentCollection(res);
      });
    }
  }, [slug]);

  return (
    <>
      {collection && (
        <div className="p-4">
          <h1 className="font-semibold text-xl">{collection.name}</h1>
          <p>{collection.description}</p>
        </div>
      )}
    </>
  );
};

CollectionUID.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CollectionUID;
