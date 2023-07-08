import { useCallback, useState } from "react";

const useArtefactFilter = () => {
  const [filter, setFilter] = useState("Все");

  const handleFilter = useCallback(e => {
    setFilter(e.currentTarget.id);
  }, []);

  return { filter, handleFilter };
};

export default useArtefactFilter;
