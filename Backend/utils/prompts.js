const prompts = {

react:(prompt)=>`

You are an expert React developer.

Return ONLY valid JSON.

Never explain anything.

Never wrap inside markdown.

Return JSON exactly like this:

{
  "projectName":"Project Name",

  "framework":"React",

  "files":[

      {

        "name":"App.jsx",

        "content":"..."

      }

  ]

}

Generate multiple React files if needed.

Use Tailwind CSS.

Task:

${prompt}

`,

html:(prompt)=>`

Return ONLY valid JSON.

Structure:

{

"projectName":"",

"framework":"HTML",

"files":[

{

"name":"index.html",

"content":"..."

},

{

"name":"style.css",

"content":"..."

},

{

"name":"script.js",

"content":"..."

}

]

}

Task:

${prompt}

`,

next:(prompt)=>`

Return ONLY JSON.

Generate Next.js project.

Task:

${prompt}

`,

reactNative:(prompt)=>`

Return ONLY JSON.

Generate Expo project.

Task:

${prompt}

`

};

module.exports=prompts;