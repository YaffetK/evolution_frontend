type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => (
        <button
          onClick={() => setCurrentPage(page)}
          className={`${
            page === currentPage ? "bg-yellow-500 font-bold" : ""
          } p-5 border border-black text-3xl`}
          key={index}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
