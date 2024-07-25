import { usePagination } from './usePagination';

export default function Pagination(props: any) {
  const pageSize = props.skip;
  const siblingCount = 1;
  const paginationRange = usePagination({
    currentPage: props.pageIndex,
    totalCount: props.totalCount,
    siblingCount,
    pageSize,
  });
  const pageActivite = (index: number) => {
    props.setPageIndex(index);
  };
  const onNext = () => {
    pageActivite(props.pageIndex + 1);
  };

  const onPrevious = () => {
    pageActivite(props.pageIndex - 1);
  };
  const lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <div className="flex justify-center ">
      <nav aria-label="Page navigation">
        <ul className='flex justify-center items-center gap-1'>
            {
              props.totalCount > 0 &&
              <li className={props.pageIndex === 1 ? 'bg-transparent border-1 border-white opacity-80' : 'bg-transparent border-1 border-white'}>
                <button
                  className='bg-transparent border-1 border-white focus:outline-none'
                  disabled={props.pageIndex === 1 ? true : false}
                  onClick={onPrevious}
                >
                  &laquo; PREVIOUS
                </button>
              </li>
            }
            {
              paginationRange?.map((pageNumber, index) => {
                if (pageNumber === 'DOTS') {
                  return <li key={index} className=" border-1 border-white disabled"><a className="text-white">&#8230;</a></li>;
                }
                return (
                  <li key={index} className={props.pageIndex === pageNumber ? 'border-1 border-white outline-none bg-[#5250d9a6] rounded-md' : 'border-1 border-white'}>
                    <button
                      onClick={() => pageActivite(pageNumber as number)}
                      className='border-1 border-white bg-transparent outline-none hover:border-white focus-within:outline-none'
                    >
                      {pageNumber}
                    </button>
                  </li>
                );
              })
            }
            {
              props.totalCount > 0 &&
              <li className={props.pageIndex === lastPage ? 'border-1 border-white bg-transparent disabled' : 'border-1 border-white bg-transparent'}>
                <button
                  disabled={props.pageIndex === lastPage ? true : false}
                  className='border-1 border-white bg-transparent'
                  onClick={onNext}
                >
                  NEXT &raquo;
                </button>
              </li>
            }
        </ul>
      </nav>
    </div>
  );
};