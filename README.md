
<img src="https://dicechampionship.s3-eu-west-1.amazonaws.com/showmaster_title.png" width="70%">

This repository contains a <a href="https://github.com/jovotech/jovo-framework">Jovo framework project</a> that can be used to easily test APL directives - Especially if they contain an `ExecuteCommands` and are better tested on an actual device.

In the current version, this project's Skill demonstrates how a the page of a `Pager` component can be et using a `SetPage` command, and how after setting the page speech SSML and an audio file are played back using a `SpeakItem` command.

Here's how you set up this project in X simple steps:
1. Clone this repo, navigate into it, and install NPM modules (execute `npm install`)
2. Make a copy of `.env.example`, name it `.env`, and replace the value of `ASK_PROFILE` with the name of your own ASK CLI profile (this assumes you have your <a href="https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html">ASK CLI set up</a>)
3. Build and deploy the Skill manifest and language model: `jovo build --deploy`
4. The Jovo CLI will set up a new Skill for you. Copy and paste the new Skill's ID as the value of `SKILL_ID` in your `.env` file
5. Execute `run jovo --watch` and use either your device or the Alexa developer console's test feature to run the SKill and test your APL directives


To test your own APL directives, set up new folders in `src/display` and require your documents and commands as onject literals from according `.js` files.