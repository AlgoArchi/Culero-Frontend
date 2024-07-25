import { ReactNode, createContext } from 'react'
import { IContents, contents } from '@/contents'
export const contentsContext = createContext<IContents>(contents)
// import { Provider } from "react-redux";
// import { wrapper, persistor } from '@/store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

export const ContentsProvider = ({ children }: { children: ReactNode }) => {
  // const { store, props } = wrapper.useWrappedStore(rest);
  // const { pageProps } = props;

  return < contentsContext.Provider value={contents} >
  {children}</contentsContext.Provider >
  // (
    // <QueryClientProvider client={queryClient}>
    //   <Hydrate state={pageProps.dehydratedState}>
    //     <Provider store={store}>
    //       <PersistGate loading={null} persistor={persistor}>
            
          {/* </PersistGate>
        </Provider>
      </Hydrate>
    </QueryClientProvider> */}
  // )

}
