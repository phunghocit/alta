import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Role, UserInfo, Username } from './styles';
import LoginFormUser from '../../../components/LoginFormUser';
const AuthUser = () => {
    const navigate = useNavigate();
    // const id:string = "qu1hRepnC3eQh9y06UOW";

    const info = () => {
        // localStorage.removeItem('token')
        navigate(`/AccountInfo`)
    }


    const items = [
        {
          label: (
              <div>
                <a onClick={info}>
                    Thông tin cá nhân
                </a>
              </div>
          ),
          key: '0',
        }
      ];

      // const location = useLocation()
      // console.log(location);
      
    return(
        <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
            <UserInfo>
              <img src="https://haycafe.vn/wp-content/uploads/2022/12/hinh-anh-avatar-dep-nam-ngau-chat.jpg"/>
              <div>
                <Role>Xin chào</Role>
                <Username ></Username>
              </div>
              
            </UserInfo>
        </a>
      </Dropdown>
    );
}

export default AuthUser;