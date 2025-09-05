import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Front from "./pages/Front";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileForm from "./components/ProfileForm";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Privateroutes from "./routes/Privateroutes";
import OrdersPage from "./pages/OrdersPage";
import OrderSuccess from "./pages/OrderSuccess";
import PaymentMethod from "./pages/PaymentMethod";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Privateroutes><Home /></Privateroutes>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order-success" element={<OrderSuccess/>}/>
          <Route path="/home/category/:category" element={<Privateroutes><Product /></Privateroutes>} />
          <Route path="/home/:productId" element={<Privateroutes><ProductPage /></Privateroutes>} />
          <Route
            path="/cart"
            element={
              <Privateroutes>
                <Cart />
              </Privateroutes>
            }
          />
          <Route
            path="/checkout/:productId"
            element={
              <Privateroutes>
                <CheckoutPage />
              </Privateroutes>
            }
          />
          <Route
            path="/account"
            element={
              <Privateroutes>
                <Account />
              </Privateroutes>
            }
          >
            <Route index element={<ProfileForm />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="myorders" element={<OrdersPage />} />
            <Route path="paymentmethod" element={<PaymentMethod />} />
          </Route>
          <Route
            path="/account/mprofile"
            element={
              <Privateroutes>
                <ProfileForm />
              </Privateroutes>
            }
          />
          <Route
            path="/account/mwishlist"
            element={
              <Privateroutes>
                <WishlistPage />
              </Privateroutes>
            }
          />
            <Route
            path="/account/mpaymentmethod"
            element={
              <Privateroutes>
                <PaymentMethod />
              </Privateroutes>
            }
          />
          <Route
            path="/account/myorder"
            element={
              <Privateroutes>
                <OrdersPage />
              </Privateroutes>
            }
          />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
