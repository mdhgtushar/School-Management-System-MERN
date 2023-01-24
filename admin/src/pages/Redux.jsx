import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, counterSliceData } from '../slices/counterSlice';

const Redux = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(counterSliceData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      Data:{' '}
      {data &&
        data.map((data) => {
          return (
            <div className="py-10">
              <h1>{data.title}</h1>
              <h1>{data.body}</h1>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default Redux;
