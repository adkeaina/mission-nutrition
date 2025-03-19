import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar: React.FC = () => {
  return (
    <Navbar fixed="bottom" bg="light" variant="light">
      <Nav className="mx-auto">
        <Nav.Item>
          <Link to="/search" className="nav-link">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/906f5b4d8e52029e9ea132cc943c28ac50b092aaac526fd3a50bdfbaa598113d?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
                className="nav-icon"
                alt="Search"
            />
            <div className="nav-label">Search</div>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/today" className="nav-link">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8aae7716343d1d16f5c47d632daffab16f446ec30ad6d6ce9eed0816c340b7?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
                className="nav-icon"
                alt="Calendar"
            />
            <div className="nav-label">Calendar</div>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/home" className="nav-link">
             <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4fe0b3905ab78eb8ce507b02c035aab6117090c948f9755b060e990e76b239?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
                className="nav-icon"
                alt="Home"
            />
            <div className="nav-label">Home</div>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/stats" className="nav-link">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc2eeba73a0b0e12e7a98747c4f59fa6c3842ed2eb6b03944f3bff5b93b21663?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
                className="nav-icon"
                alt="Stats"
            />
            <div className="nav-label">Stats</div>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/settings" className="nav-link">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/38fcfd4cef327d2ae712f874b5d633c019c29ebc019ad8e6bad257c17c822df4?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
                className="nav-icon"
                alt="Settings"
            />
            <div className="nav-label">Settings</div>
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

// export default function NavBar() {
//     return (
//         <>
//             <nav className="nav-bar">
//                 <div className="nav-button">
//                 <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/906f5b4d8e52029e9ea132cc943c28ac50b092aaac526fd3a50bdfbaa598113d?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
//                     className="nav-icon"
//                     alt="Search"
//                 />
//                 <div className="nav-label">Search</div>
//                 </div>
//                 <div className="nav-button">
//                 <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8aae7716343d1d16f5c47d632daffab16f446ec30ad6d6ce9eed0816c340b7?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
//                     className="nav-icon"
//                     alt="Calendar"
//                 />
//                 <div className="nav-label">Calendar</div>
//                 </div>
//                 <div className="nav-button active">
//                 <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4fe0b3905ab78eb8ce507b02c035aab6117090c948f9755b060e990e76b239?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
//                     className="nav-icon"
//                     alt="Home"
//                 />
//                 <div className="nav-label">Home</div>
//                 </div>
//                 <div className="nav-button">
//                 <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc2eeba73a0b0e12e7a98747c4f59fa6c3842ed2eb6b03944f3bff5b93b21663?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
//                     className="nav-icon"
//                     alt="Stats"
//                 />
//                 <div className="nav-label">Stats</div>
//                 </div>
//                 <div className="nav-button">
//                 <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/38fcfd4cef327d2ae712f874b5d633c019c29ebc019ad8e6bad257c17c822df4?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
//                     className="nav-icon"
//                     alt="Settings"
//                 />
//                 <div className="nav-label">Settings</div>
//                 </div>
//             </nav>

//         </>
//     );
// }