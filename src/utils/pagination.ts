export type PaginationDataType = {
  page: number;
};

export type PaginationItemsWrapper<T> = {
  next: boolean;
  previous: boolean;
  dotsRight: boolean;
  dotsLeft: boolean;
  pages: number;
  paginationData: PaginationDataType[];
  genericValue: T[];
};

export const getPaginationItems = <T>(
  totalItems: number,
  itemsPerPage: number,
  page: number
): PaginationItemsWrapper<T> => {
  const paginationData: PaginationDataType[] = [];
  const pages = Math.ceil(totalItems / itemsPerPage);

  if (pages - page > 3 && page > 3) {
    for (let i = page - 1; i <= page + 2; i++) {
      paginationData.push({
        page: i,
      });
    }

    return {
      next: true,
      previous: true,
      dotsLeft: true,
      dotsRight: true,
      pages,
      paginationData,
      genericValue: [],
    };
  }

  if (page <= 3 && pages > 5) {
    for (let i = 1; i <= 5; i++) {
      paginationData.push({
        page: i,
      });
    }

    return {
      previous: page > 1,
      next: true,
      dotsLeft: false,
      dotsRight: true,
      pages,
      paginationData,
      genericValue: [],
    };
  }

  if (pages - page <= 3 && pages > 5) {
    for (let i = pages - 4; i <= pages; i++) {
      paginationData.push({
        page: i,
      });
    }

    return {
      next: page < pages,
      previous: true,
      dotsRight: false,
      dotsLeft: true,
      pages,
      paginationData,
      genericValue: [],
    };
  }

  for (let i = 1; i <= pages; i++) {
    paginationData.push({
      page: i,
    });
  }

  return {
    dotsLeft: false,
    dotsRight: false,
    next: pages > 1 && page !== pages,
    previous: page > 1,
    pages,
    paginationData,
    genericValue: [],
  };
};
