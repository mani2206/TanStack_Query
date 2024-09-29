import "./App.css";
import Login from "./components/pageComponent/Login";
import Text from "./components/pageComponent/Text";
import Box from "./components/pageComponent/Box";
import Swap from "./components/pageComponent/Swap";
import Swapping from "./components/pageComponent/Swapping";
import ApiQuery from "./components/pageComponent/ApiQuery";
import ApiTwo from "./components/pageComponent/ApiTwo";
import { QueryClientProvider, QueryClient } from "react-query";
function App() {

  const queryClient =new QueryClient()
  return (
    <>
      {/* <Login /> */}
      {/* <Text /> */}
      {/* <Box /> */}
      {/* <Swap />
     <Swapping /> */}
      <QueryClientProvider client={queryClient}>
        {/* <ApiQuery /> */}
        <ApiTwo />
      </QueryClientProvider>
    </>
  )
}

export default App;
