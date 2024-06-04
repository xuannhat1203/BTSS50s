import { useNavigate } from "react-router-dom";

export default function BT02() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <button onClick={handleHome}>Home</button>
      <button onClick={handleAbout}>About</button>
      <button onClick={handleContact}>Contact</button>
    </>
  );
}
