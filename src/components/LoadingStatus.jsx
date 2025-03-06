import { useSelector } from 'react-redux';
import { AiOutlineLoading } from 'react-icons/ai';

function LoadingStatus() {
  const isLoading = useSelector((store) => store.weather.isLoading);
  const error = useSelector((store) => store.weather.error);
  return (
    <>
      {isLoading && (
        <AiOutlineLoading className="my-10 animate-spin w-full py-10 h-60" />
      )}
      {error && (
        <div className="px-2 my-10 flex place-items-center h-60">
          <p className="w-full text-lg text-white bg-red-500/50 py-5 text-center rounded-lg shadow-lg">
            {error}
          </p>
        </div>
      )}
    </>
  );
}

export default LoadingStatus;
