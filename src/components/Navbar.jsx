import { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom'
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Cart } from '../Context'

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoFont = styled.h1`
  font-weight: bold;
  text-align: left;
  margin: 0;
  color: black;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Navbar = () => {
  const { cart } = useContext(Cart)
  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink to="/">
          <LogoFont>COMPIS</LogoFont>
          </StyledLink>
        </Left>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
