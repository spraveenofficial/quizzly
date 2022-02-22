const categoryVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      staggerChildren: 0.2,
    },
  },
};
const categoryItemVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export { categoryVariant, categoryItemVariants };
