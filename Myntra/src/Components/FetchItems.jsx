import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../Store/itemSlice";
import { fetchStatusAction } from "../Store/fetchStatus";

export default function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    //dispatch(fetchStatusAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        //dispatch(fetchStatusAction.markFetchDone());
        //dispatch(fetchStatusAction.markFetchingFinished());

        dispatch(itemAction.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
}
