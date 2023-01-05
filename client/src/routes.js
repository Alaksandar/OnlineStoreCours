import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Bascket from "./pages/Bascket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASCKET_ROUTE, DEVICE_ROUTE, 
        LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/constants"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASCKET_ROUTE,
        Component: Bascket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]
