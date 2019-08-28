import styled from "styled-components";
import { motion } from "framer-motion";

export const Bear = styled(motion.img)`
  position: relative;
  top: -260px;
`;

export const SubText = styled.span`
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Walter = styled(motion.img)`
  position: relative;
  z-index: 5;
  flex: 1;
  max-height: 400px;
  margin: 0 40px;
  border-radius: 20px;
`;

export const Text = styled(motion.h1)`
  margin: 40px;
  color: #000;
  margin-bottom: 80px;
  font-size: 50px;
`;
