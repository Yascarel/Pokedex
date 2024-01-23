import '../pagination/pagination.css'

const Pagination = ({pokemonsPage, currentPage, setCurrentPage, toltalProducts} ) => {
  const visiblePageLimit = 7;

  // Generar la lista de números de página
  const generatePageNumbers = () => {
    const pages = [];
    const totalPages = Math.ceil(toltalProducts / pokemonsPage);//5

    let startPage;
    let endPage;

    if (totalPages <= visiblePageLimit) {//5 mayor o igual 7
      startPage = 1;
      endPage = totalPages;//5
    } else {
      if (currentPage <= Math.ceil(visiblePageLimit / 2)) {//1 es menor o igual que 4
        startPage = 1;
        endPage = visiblePageLimit;//7
      } else if (currentPage + Math.floor(visiblePageLimit / 2) >= totalPages) { //1 mas 3 es mayor o igual que //5
        startPage = totalPages - visiblePageLimit + 1;//3
        endPage = totalPages;//5
      } else {
        startPage = currentPage - Math.floor(visiblePageLimit / 2);//2
        endPage = currentPage + Math.floor(visiblePageLimit / 2);//4
      }
    }

    for (let i = startPage; i <= endPage; i++) {//i = valor de starPage, 1 mayor igual valor de endPage si es falso sumale 1
      pages.push(i);// i valor sumado si i es menor que endPage
    }

    return pages;//valor de i
  };

  const pageNumbers = generatePageNumbers();
  
  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }
 
  return (
    <nav className="Container" role="navigation">
  <ul>
  <div>
  <a className={`aOne ${currentPage === 1 ? 'disabled' : ''}`} onClick={onPreviusPage}>Previous</a>
    {
      pageNumbers.map(noPage => (
        <li key={noPage}>
          <a className={`aTwo ${noPage === currentPage ? 'active' : ''}`} 
            onClick={() => onSpecificPage(noPage)}>
            {noPage}
            </a>
            </li> 
      ))
    }
    <li><span className="pagination-ellipsis">&hellip;</span></li>
   <a className={`aThree ${currentPage >= Math.ceil(toltalProducts / pokemonsPage) ? 'disabled' : ''}`} onClick={onNextPage}>Next page</a>
   </div>
  </ul>
  
</nav>
  )
}

export default Pagination