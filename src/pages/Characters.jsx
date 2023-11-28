import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CardCharacters from "../components/CardCharacters";
import CircularIndeterminate from "../components/CircularIndeterminate";

const Characters = () => {
  const [listCharacters, setListCharacters] = useState([]);
  const [nameCharacter, setNameCharacter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [infoPage, setInfoPage] = useState();

  const getData = async () => {
    setSpinner(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const { info, results } = await response.json();
      setInfoPage(info.pages);
      setListCharacters(results);
      setSpinner(false);
    } catch (error) {
      console.log(error);
      setSpinner(false);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const handleSubmitName = async (e) => {
    e.preventDefault();
    if (nameCharacter === "") {
      return;
    }
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`);
      const { results } = await response.json();
      setListCharacters(results);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeCaracter = async (e) => {
    const newNameCharacter = e.target.value;
    setNameCharacter(newNameCharacter);
    if (newNameCharacter === "") {
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
      <form className="mt-10 w-full flex justify-center gap-2">
        <input
          type="text"
          placeholder="nombre"
          className="bg-slate-200 px-2 shadow-2xl w-1/2 py-2 rounded-md"
          onChange={onChangeCaracter}
        />
        <button
          type="submit"
          className="p-4 rounded-md bg-slate-200 hover:bg-slate-400"
          onClick={handleSubmitName}
        >
          <CiSearch />
        </button>
      </form>
      <section className="mt-8 flex flex-wrap gap-4 items-center justify-center">
        {listCharacters ? (
          listCharacters.map((character) => (
            <CardCharacters
              key={character.id}
              img={character.image}
              name={character.name}
              gender={character.gender}
              species={character.species}
              status={character.status}
            />
          ))
        ) : (
          <p>No hay resultados</p>
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

export default Characters;
