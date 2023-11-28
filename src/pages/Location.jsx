import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CardLocation from '../components/CardLocation';
import { CiSearch } from "react-icons/ci";
import CircularIndeterminate from "../components/CircularIndeterminate";

const Location = () => {
  const [location, setLocation] = useState("");
  const [listLocation, setListLocation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [infoPage, setInfoPage] = useState();

  const getData = async () => {
    setSpinner(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
      const { info, results } = await response.json();

      setInfoPage(info.pages)

      setListLocation(results);
      setSpinner(false);
    } catch (error) {
      console.log(error);
      setSpinner(false);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const handleSubmitLocation = async (e) => {
    e.preventDefault();
    if (location === "") {
      return;
    }
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location/?name=${location}`);
      const { results } = await response.json();
      setListLocation(results);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeLocation = async (e) => {
    const newNameLocation = e.target.value;
    setLocation(newNameLocation);
    if (newNameLocation === "") {
      await getData();
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage <= 0 || newPage > infoPage) {
      return;
    }
    setCurrentPage(newPage);
  };

  return (
    <>
      {spinner && <CircularIndeterminate />}
      <form className='mt-10 w-full flex justify-center gap-2'>
        <input
          type="text"
          placeholder='nombre'
          className='bg-slate-200 px-2 shadow-2xl w-1/2 py-2 rounded-md'
          onChange={onChangeLocation}
        />
        <button
          type="submit"
          className="p-4 rounded-md bg-slate-200 hover:bg-slate-400"
          onClick={handleSubmitLocation}
        >
          <CiSearch />
        </button>
      </form>
      <section className='mt-8 flex flex-wrap gap-4 items-center justify-center'>
        {listLocation ? (
          listLocation.map((episodes) => (
            <CardLocation
              key={episodes.id}
              name={episodes.name}
              type={episodes.type}
              dimension={episodes.dimension}
            />
          ))
        ) : (
          "Cargando...."
        )}
      </section>
      <div className=" shadow-xl w-1/2 flex justify-between p-4 my-4">
        <button
          className="hover:text-gray-400"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiArrowLeft />
        </button>
        <button
          className="hover:text-gray-400"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === infoPage}
        >
          <FiArrowRight />
        </button>
      </div>
    </>
  );
};

export default Location;
