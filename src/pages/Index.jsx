import { Container, VStack, Heading, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    answer: "George Washington",
  },
  // Add more questions here
];

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {showScore ? (
          <Box>
            <Heading as="h2" size="xl">You scored {score} out of {questions.length}</Heading>
          </Box>
        ) : (
          <Box>
            <Heading as="h2" size="xl">{questions[currentQuestionIndex].question}</Heading>
            <VStack spacing={4} mt={4}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <Button key={index} onClick={() => handleAnswerOptionClick(option === questions[currentQuestionIndex].answer)}>
                  {option}
                </Button>
              ))}
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;