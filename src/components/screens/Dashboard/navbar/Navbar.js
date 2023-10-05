import styled from 'styled-components';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
const Navbar = () => {
  return (
    <NavbarStyle>
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
         
          <input type="text" placeholder="search......" />
          <div className="item">
          <FindInPageRoundedIcon  className="icon"/>
          </div>
        </div>
        <div className="items">
               <div className="item">
                        <VpnKeyRoundedIcon className="icon"/>
                        <br/>
                        <span> Signup</span>
                    </div>
            <div className="item">
                    <AccountCircleIcon className="icon"/> 
                    <br/>
                    <span>Login</span>
                    </div>
            {/* <div className="item">
              <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  className="avatar"/>
            </div> */}

        </div>
      </div>
    </div>
    </NavbarStyle>
  )
}

export default Navbar

const NavbarStyle=styled.div`
.navbar{
  height: 70px;
  border-bottom: 1px solid rgb(231,228,228);
  display: flex;
  align-items: center;
  font-style: 14px;
  color: #8e1d90;

  .wrapper{
      width: 100%;
      padding: 70px;
      display: flex;
      font-weight:bold ;
      align-items: center;
      justify-content: space-between;
      // background-color: rebeccapurple;

      .search{
          width: 200px;
          display: flex;
          align-items: right;
          border: 0.5px solid lightgrey;
          padding: 3px;
          background-color: whitesmoke;
      }
      input{
          border: none;
          outline: none;
          background: transparent;

          &::placeholder{
              font-size: 12px;
              font-weight: bold;
          }
      }
      .items{
          display: flex;
          align-items: center;
          padding: 3px;

          .item{
              // display: flex;
              align-items: center;
              margin-right: 20px;
              position: relative;
              padding: 3px;

              .icon{
                  font-size:30px ;
                  color: #8e1d90;
              }
          }
      }
  }
}
`;