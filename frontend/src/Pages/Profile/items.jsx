import { requestRecentQuiz } from "../../Redux/Actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Lists from "../LeaderBoard/items";
import Loader from "../../Components/Loader";
const RecentQuiz = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.user);
  console.log(data);
  useEffect(() => {
    dispatch(requestRecentQuiz());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    data && (
      <>
        <div className="leaderboard-items m-10">
          <AnimateSharedLayout>
            {/* <motion.ul layout initial={{ borderRadius: 25 }}> */}
              {data.map((item) => (
                <Lists thumbnail={item.thumbnail} name={item.title} />
              ))}
            {/* </motion.ul> */}
          </AnimateSharedLayout>
        </div>
      </>
    )
  );
};
const PersonalDetail = () => {
  return <h1>This is Personal Detail</h1>;
};
const UserSettings = () => {
  return <h1>This is User Setting</h1>;
};
export const allItems = [
  { icon: "⏰", label: "Recent Quiz", component: <RecentQuiz /> },
  { icon: "👨", label: "Personal", component: <PersonalDetail /> },
  { icon: "⚙️", label: "Settings", component: <UserSettings /> },
];
const [Recent, Personal, Settings] = allItems;
export const initialTabs = [Recent, Personal, Settings];
