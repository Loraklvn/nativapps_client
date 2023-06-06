import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';

import {
  getPaginationItems,
  PaginationDataType,
} from '../../../utils/pagination';

export type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (data: PaginationDataType) => void;
  defaultPage: number;
  loading: boolean;
};

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  defaultPage,
  loading,
}: PaginationProps): React.ReactElement => {
  const [activePage, setActivePage] = useState<PaginationDataType>({
    page: defaultPage,
  });
  const { previous, next, dotsLeft, dotsRight, pages, paginationData } =
    getPaginationItems(totalItems, itemsPerPage, activePage.page);

  useEffect(() => {
    setActivePage({ page: defaultPage });
  }, [defaultPage]);

  if (loading) {
    return <div />;
  }

  return (
    <div>
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        {previous && (
          <div
            className="relative inline-flex items-center rounded-l-md border cursor-pointer border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            onClick={(): void => {
              if (activePage.page > 1) {
                const data = {
                  page: activePage.page - 1,
                };
                setActivePage(data);
                paginate(data);
              }
            }}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />{' '}
          </div>
        )}
        {dotsLeft && (
          <div
            key={1}
            onClick={(): void => {
              const firstPageData = {
                page: 1,
                offset: 0,
              };
              setActivePage(firstPageData);
              paginate(firstPageData);
            }}
            className="relative inline-flex items-center cursor-pointer border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            1
          </div>
        )}
        {dotsLeft && (
          <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
            ...
          </span>
        )}

        {paginationData.map(({ page }) => {
          return (
            <div
              key={page}
              onClick={(): void => {
                if (page === activePage.page) return;
                setActivePage({ page });
                paginate({ page });
              }}
              className={
                page !== activePage.page
                  ? 'relative hidden items-center border cursor-pointer border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex'
                  : 'relative z-10 inline-flex items-center cursor-pointer border border-green-500 bg-green-50 px-4 py-2 text-sm font-medium text-green-600 focus:z-20'
              }
            >
              {page}
            </div>
          );
        })}

        {dotsRight && (
          <div className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
            ...
          </div>
        )}
        {dotsRight && (
          <div
            key={pages}
            onClick={(): void => {
              const lastPageData = {
                page: pages,
                offset: (pages - 1) * itemsPerPage,
              };
              setActivePage(lastPageData);
              paginate(lastPageData);
            }}
            className="relative hidden items-center cursor-pointer border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
          >
            {pages}
          </div>
        )}

        {next && (
          <div
            className="relative inline-flex items-center cursor-pointer rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            onClick={(): void => {
              if (activePage.page < Math.ceil(totalItems / itemsPerPage)) {
                const data = {
                  page: activePage.page + 1,
                };
                setActivePage(data);
                paginate(data);
              }
            }}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />{' '}
          </div>
        )}
      </nav>
    </div>
  );
};
export default React.memo(Pagination);
