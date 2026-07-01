const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

exports.planProject = async (prompt)=>{

const completion = await groq.chat.completions.create({

model:"llama-3.3-70b-versatile",

messages:[

{

role:"system",

content:`

You are a Senior Software Architect.

Given a project idea,

return ONLY JSON.

Example:

{

"projectName":"",

"pages":[],

"components":[]

}

`

},

{

role:"user",

content:prompt

}

]

});

const response=completion.choices[0].message.content;

return JSON.parse(

response

.replace(/```json/g,"")

.replace(/```/g,"")

.trim()

);

};