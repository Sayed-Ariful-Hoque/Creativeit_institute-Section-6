import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductItem from '../../Layer/ProductItem';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <ProductItem />
                    </div>
                ))}
        </>
    );
}


function Pagination({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='flex flex-wrap gap-x-10 gap-y-[50px]   text-white'>
                <Items currentItems={currentItems} />

            </div>
          <div className=' flex items-center justify-between'>
          <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                containerClassName="ul flex items-center gap-x-4"
                pageClassName="li  border border-[##F0F0F0] w-9 h-9  px-[14px] py-[9px] flex justify-center items-center"
                pageLinkClassName="atag text-[#767676] text-sm font-DMSans"
                activeClassName="active bg-[#262626] text-white"
                nextClassName="page-item hidden"
                previousClassName="page-item hidden"

            />
            <div className=' font-DMSans text-xs text-[#767676]'>
                <p>Products from {itemOffset + 1} to {endOffset > items.length ? items.length : endOffset} of{items.length}</p>
            </div>
          </div>
        </>
    );
}

export default Pagination