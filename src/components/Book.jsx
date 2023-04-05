import React from 'react';

const Book = ({book}) => {
    return (
        <div className='relative overflow-hidden transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img
                src={book.image}
                alt=""
                className='object-cover w-full h-56 md:h-64 xl:h-80'
            />
            <div className='bg-black bg-opacity-75 absolute opacity-0 hover:opacity-100 inset-0 transition-opacity duration-200 text-gray-100 p-6 flex flex-col'>
                <p>{book.title}</p>
                <p>{book.subtitle.substring(0, 45)}...</p>
                <br />
                <p className='btn mt-auto'>Price: {book.price}</p>
            </div>
        </div>
    );
};

export default Book;