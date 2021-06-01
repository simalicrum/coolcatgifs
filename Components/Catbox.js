import useSWR from 'swr';
import fetch from '../lib/fetch';

import Catgif from './Catgif';

export default function Catbox() {
  const { data, mutate, isValidating } = useSWR('/api/refresh', fetch);
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
