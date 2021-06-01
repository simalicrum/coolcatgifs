import useSWR from 'swr';
import fetcher from '../lib/fetcher';

import Catgif from './Catgif';

export default function Catbox() {
  const { data, mutate, isValidating } = useSWR('/api/refresh', fetcher);
  return (
    <div
      role="img"
      onClick={() => {
        mutate();
      }}
      onKeyPress={() => {
        mutate();
      }}
      className="h-screen flex flex-col items-center justify-center"
    >
      <Catgif data={data} isValidating={isValidating} />
    </div>
  );
}
