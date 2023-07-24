export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 1,
      },
    },
  },
};

export const heroVariants = (
  direction: string,
  rightVal: string,
  leftVal: string,
  rotate: number,
  delay?: number
) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? leftVal : rightVal,
    rotate: rotate,
  },
  show: {
    opacity: 1,
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay: delay ? delay : 0.5,
    },
  },
});

export const shapesVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2.5,
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
