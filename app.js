const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-hmJJpgOMccrqaRD3BrEN7yJ6",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async() => { 
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Describe ONE department in the President's cabinet and its functions.",
      max_tokens: 2048,
      temperature: 2,
    });
    
    console.log(response.data.choices);

})();
