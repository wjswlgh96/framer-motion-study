import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

const Circle = styled(motion.div)`
  background: white;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
  place-self: center;
`;

const boxVariants: Variants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants: Variants = {
  start: { opacity: 0, y: 30 },
  end: { opacity: 1, y: 0 },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial={"start"} animate={"end"}>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
