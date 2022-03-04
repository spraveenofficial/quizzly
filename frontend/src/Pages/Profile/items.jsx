const RecentQuiz = () => {
  return <h1>This is Recent Quiz</h1>;
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
