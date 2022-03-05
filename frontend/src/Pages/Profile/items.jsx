import { requestRecentQuiz, setUsertoNull } from "../../Redux/Actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Lists from "../LeaderBoard/items";
import Loader from "../../Components/Loader";
const RecentQuiz = () => {
  const dispatch = useDispatch();
  const { data, loading, success } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(requestRecentQuiz());
    return () => {
      dispatch(setUsertoNull());
    };
  }, []);
  return loading ? (
    <div className="loader_center">
      <Loader />
    </div>
  ) : (
    <div className="leaderboard-items m-10">
      <AnimateSharedLayout>
        {!data ? (
          <div className="loader_center">
            <h3>You have Not Played Any Quiz Yet.</h3>
          </div>
        ) : (
          !loading &&
          success &&
          data.map((item, index) => (
            <Lists
              key={index}
              thumbnail={item.thumbnail}
              name={item.title}
              scored={`${item.scored}/${item.totalMarks}`}
              timeTook={`${item.timeTaken / 60} Minute`}
            />
          ))
        )}
      </AnimateSharedLayout>
    </div>
  );
};
const UserSettings = () => {
  return (
    <div className="loader_center">
      <Loader />
    </div>
  );
};
export const allItems = [
  { icon: "⏰", label: "Recent Quizs", component: <RecentQuiz /> },
  { icon: "⚙️", label: "Settings", component: <UserSettings /> },
];
const [Recent, Settings] = allItems;
export const initialTabs = [Recent, Settings];
