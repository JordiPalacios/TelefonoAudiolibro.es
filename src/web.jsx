import { Route, Routes } from "react-router";
import { TelefonoAudiolibro } from "./page";

function Web() {
    return (
        <Routes>
            <Route path="/" element={<TelefonoAudiolibro />} />
                {/* La usaré más adelante para cuando tenga dos páginas ya hechas o anidadas */}
                {/* <Route index element={<TelefonoAudiolibro />} /> */}
            <Route path='*' element={<TelefonoAudiolibro />} />
        </Routes>
    );
}
export default Web;
