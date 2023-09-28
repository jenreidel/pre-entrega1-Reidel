import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Categorias, Contacto } from "../pages";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const Navigation = () => {
    const routes = createBrowserRouter ([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/categorias/:idCategorias",
            element: <Categorias />
        },
        {
            path: "/producto/:idProducto",
            element: <ItemDetailContainer />
        },
        {
            path: "/contacto",
            element: <Contacto />
        }
    ])
    return <RouterProvider router={routes}/>
};

export default Navigation;