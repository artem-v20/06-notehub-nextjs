'use client';

import { fetchNotes } from '@/lib/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const NotesClient = () => {
  const { data } = useQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(1, ''),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });
  return <div>NotesClient</div>;
};

export default NotesClient;
