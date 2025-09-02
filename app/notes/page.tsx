import { fetchNotes } from '@/lib/api';
import { QueryClient } from '@tanstack/react-query';
import NotesClient from './Notes.client';

const Notes = () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(1, ''),
  });
  return <NotesClient />;
};

export default Notes;
