import { FaHome, FaShoppingCart, FaWallet, FaHamburger, FaCalendar,FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
    const [cart] = useCart()
    // const isAdmin = true
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additems"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All User</NavLink></li>

                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart<span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>  Home</NavLink></li>
                    <li><NavLink to="/menu"><FaHamburger></FaHamburger> Menu</NavLink></li>
                    <li><NavLink to="/order/salad"> Shop</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;