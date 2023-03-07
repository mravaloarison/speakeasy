const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-hmJJpgOMccrqaRD3BrEN7yJ6",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async() => { 

    console.log("✅ Waiting for response ...");
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "write same code react and django and tell which one is faster",
      max_tokens: 2048,
      temperature: 0,
    });
    
    // \033[32m + TERMINAL MESSAGE + \033[0m => Gives green color to output in terminales
    console.log('\033[32m' + response.data.choices[0].text.slice(2) + '\033[0m');
})();






