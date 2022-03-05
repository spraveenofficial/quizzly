import { Helmet } from "react-helmet";
import Container from "../../Components/Container";
import "./style.css";
import { useSelector } from "react-redux";
import animation from "../../helpers/animation";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./items";
import { useState } from "react";
import Button from "../../Components/Button";
export default function Profile({ onNext }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const { user } = useSelector((state) => state.auth);
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
  let initials = [...user.name.matchAll(rgx)] || [];
  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile - Quizzly</title>
      </Helmet>
      <motion.div
        className="leaderboard"
        initial="hidden"
        animate="show"
        variants={animation}
        exit="hidden"
      >
        <div className="top-on-leaderboard">
          <div className="top-left profile-left">
            <div className="badges">{initials}</div>
          </div>
          <div className="top-right">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="window">
          {user.isAdmin && (
            <Button onClick={onNext} className="mb-10">
              Create Quiz
            </Button>
          )}
          <nav>
            <ul className="flex">
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={item === selectedTab ? "selected flex" : "flex"}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.icon} ${item.label}`}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {selectedTab ? selectedTab.component : "😋"}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </motion.div>
    </Container>
  );
}
