import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./src/screens/HomeScreen";

<>
<BrowserRouter>
    <Routes>
        <Route path="" element={<HomeScreen/>}/>
    </Routes>
</BrowserRouter>
</>