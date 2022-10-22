import { useEffect } from "react";
import { useDispatch } from "react-redux"
import Content from "../../components/home/content/content";
import LeftBar from "../../components/leftBar/LeftBar";
import { getMuviesList } from "../../service/getMuviesList";
import "./homePage.scss";

function HomePage() {
  const dispatch = useDispatch()


  useEffect(() => {
    const data = getMuviesList()
    dispatch({
      type: "set-muvies-list",
      payload: data
    })
  }, [dispatch])


  return (
    <div className="HomePageContainer">
      <LeftBar />
      <Content />
    </div>
  );
}

export default HomePage;
