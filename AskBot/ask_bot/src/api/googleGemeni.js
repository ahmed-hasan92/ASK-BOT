import instance from ".";

const generateAnswer = async (question) => {
  const response = await instance.post("/generate", {
    question,
  });
  return response.data;
};

export default generateAnswer;
