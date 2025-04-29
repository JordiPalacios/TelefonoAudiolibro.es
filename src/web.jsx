import { Navigate, Route, Routes } from "react-router";
import { AvisoLegal, PoliticaPrivacidad, TelefonoAudiolibro, TerminosCondiciones } from "./page";
import { Layout } from "./page/layout";

function Web() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<TelefonoAudiolibro />} />
                <Route path="aviso-legal" element={<AvisoLegal />} />
                <Route path="terminos-condiciones" element={<TerminosCondiciones />} />
                <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
            </Route>
            <Route path='*'  element={<Navigate to="/" replace />} />
        </Routes>
    );
}
export default Web;
