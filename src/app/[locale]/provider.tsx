'use client';

import { MuiReactProvider } from '@/libraries/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

type RootProviderProps = {
  children?: React.ReactNode;
};

const client = new QueryClient({
  defaultOptions: {
    queries: {}
  }
});

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <MuiReactProvider themeOptions={{}} defaultMode='light'>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <QueryClientProvider client={client}>
          <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientProvider>
      </LocalizationProvider>
    </MuiReactProvider>
  );
};

export default RootProvider;
