import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/auth-context';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Device from './pages/Device';
import Services from './pages/Services';
import AccountManagement from './pages/AccountManagement';
import Report from './pages/Report';
import NumberLevel from './pages/NumberLevel';
// import AddDevice from './pages/AddDevice';
import AddUser from './pages/AddUser';
import UserLogs from './pages/UserLogs';
import RoleManagement from './pages/RoleManagement';
import AddService from './pages/AddService';
import ServiceManagement from './pages/ServiceManagement';
import DeviceManagement from './pages/DeviceManagement';
import AccountInfo from './pages/AccountInfo';
import TableDevices from './components/DeviceDashboard/TableDevice';
import DevicePage from './pages/DevicePage';
import ModalFormDevice from './components/DeviceDashboard/ModalFormDevice';
import DeviceDashboard from './components/DeviceDashboard';
import UpdateDevice from './components/DeviceDashboard/UpdateDevice';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute page={<Login/>}/>
  },
  {
    path: "/Dashboard",
    element: <PrivateRoute page={<Dashboard/>}/>
  },
  {
    path: "/Device",
    element: <PrivateRoute page={<Device/>}/>
  },
  {
    path: "/Services",
    element: <PrivateRoute page={<Services/>}/>
  },
  {
    path: "/NumberLevel",
    element: <PrivateRoute page={<NumberLevel/>}/>
  },
  {
    path: "/Report",
    element: <PrivateRoute page={<Report/>}/>
  },
  //Nhật ký người dùng
  {
    path: "/UserLogs",
    element: <PrivateRoute page={<UserLogs/>}/>
  },
 //Table tài khoản
  {
    path: "/AccountManagement",
    element: <PrivateRoute page={<AccountManagement/>}/>
  },
  {
    path: "/AccountInfo/:userid",
    element: <PrivateRoute page={<AccountInfo/>}/>
  },
  //thêm thiết bị
  // {
  //   path: "/AddDevice",
  //   element: <PrivateRoute page={<AddDevice/>}/>
  // },
    //Thêm tài khoản  
  {
    path: "/AddUser",
    element: <PrivateRoute page={<AddUser/>}/>
  }, 
  {
    path: "/AddService",
    element: <PrivateRoute page={<AddService/>}/>
  },
  {
    path: "/RoleManagement",
    element: <PrivateRoute page={<RoleManagement/>}/>
  },
  {
    path: "/ServiceManagement",
    element: <PrivateRoute page={<ServiceManagement/>}/>
  },
  {
    path: "/DevicePage",
    element: <PrivateRoute page={<DevicePage/>}/>,
    children: [
      {
        path: "AddDevice",
        element: <PrivateRoute page={<ModalFormDevice/>}/>
      },

      {
        path: "Table",
        element: <PrivateRoute page={<TableDevices/>}/>
      },
      {
        path: "Update",
        element: <PrivateRoute page={<UpdateDevice/>}/>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <RouterProvider router={router}/>
);


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//      <BrowserRouter>
//         <AuthProvider>
//           <App />
//         </AuthProvider>
//       </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
