import { motion } from "framer-motion";
import "./style.css";
export default function Items({ name, score, thumbnail }) {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li className="leaderboard-item-li" initial={{ borderRadius: 10 }}>
      <motion.div className="leaderboard-item-parent">
        {thumbnail ? (
          <div class="badge">
            <img class="avatar" src={thumbnail}></img>
          </div>
        ) : (
          <motion.div className="avatar" layout>
            <p>1</p>
          </motion.div>
        )}
        {name ? name : <h2>Mohit Kumar</h2>}
        {score ? score : <p>mohxxxx@gmail.com</p>}
        <h2>940</h2>
      </motion.div>
      {/* <AnimatePresence>{isOpen && <Content />}</AnimatePresence> */}
    </motion.li>
  );
}

// function Content() {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="row" />
//       <div className="row" />
//       <div className="row" />
//     </motion.div>
//   );
// }
