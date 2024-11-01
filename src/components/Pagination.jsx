export const PaginatioComponent = ({
  personaPerPage,
  currentPage,
  setCurrentPage,
  total,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / personaPerPage); i++) {
    pageNumbers.push(i);
  }

  const previosPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
              href="#"
              onClick={previosPage}
            >
              Previous
            </a>
          </li>

          {pageNumbers.map((noPage) => (
            <li key={noPage} className="page-item flex flex-col border">
              <button
                className={`btn btn-${
                  currentPage === noPage ? "primary" : "btn-outline-secondary"
                }`}
                onClick={() => onSpecificPage(noPage)}
              >
                {noPage}
              </button>{" "}
            </li>
          ))}

          <li className="page-item">
            <a
              className={`page-link ${
                currentPage >= pageNumbers.length ? "disabled" : ""
              }`}
              onClick={onNextPage}
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
