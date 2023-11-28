import { CiSearch } from "react-icons/ci";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CardEpisodes from '../components/CardEpisodes'
import { useState, useEffect } from "react";
import CircularIndeterminate from "../components/CircularIndeterminate";

const Episodes = () => {
  const [episode, setEpisode] = useState("");
  const [listEpisodes, setListEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [infoPage, setInfoPage] = useState();

  const getData = async () => {
    setSpinner(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
      const { info, results } = await response.json();
    
      setInfoPage(info.pages);
      setListEpisodes(results);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const handleSubmitEpisode = async (e) => {
    e.preventDefault();
    if (episode === "") {
      return;
    }
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/?name=${episode}`);
      const { results } = await response.json();
      setListEpisodes(results);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeEpisode = async (e) => {
    const newNameEpisode = e.target.value;
    setEpisode(newNameEpisode);
    if (newNameEpisode === "") {
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
          onChange={onChangeEpisode}
        />
        <button
          type="submit"
          className="p-4 rounded-md bg-slate-200 hover:bg-slate-400"
          onClick={handleSubmitEpisode}
        >
          <CiSearch />
        </button>
      </form>
      <section className='mt-8 flex flex-wrap gap-4 items-center justify-center'>
        {listEpisodes ? (
          listEpisodes.map((episodes) => (
            <CardEpisodes
              key={episodes.id}
              name={episodes.name}
              airDate={episodes.air_date}
              episode={episodes.episode}
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

export default Episodes;
