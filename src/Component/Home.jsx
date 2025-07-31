import Model from "./Model";
import Nav from "./Nav";
import Overview from "./Overview";
import Text from "./text";

const Home = () => {
  return (
    <>
      <div
        className="bg-gradient-to-t from-black via-gray-800 to-white h-screen w-full overflow-x-hidden overflow-y-hidden"
        style={{ position: "relative", zIndex: 9999 }}
      >
        <Nav />
        <Model />
        <Text />
      </div>
    </>
  );
};

export default Home;
