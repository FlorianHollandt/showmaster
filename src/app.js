'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new FileDb()
);

const display = require('./display');

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {

        let document = display.audioSpeechPager.document;
        document.datasources.data.properties.audioUrl = this.speechBuilder().t('audioUrl').toString();
        document.datasources.data.properties.responseSSML = `<speak>${
            this.speechBuilder().t('page2').toString()
        } ${
            this.speechBuilder().t('prompt').toString()
        }</speak>`;

        this.$alexaSkill
            .addAplDirective(
                document        
            )
            .addAplDirective(
                display.audioSpeechPager.commands
            );

        this.$speech
            .t('welcome-intro')
            .t('page1');
        this.$reprompt.t('prompt');

        this.ask(
            this.$speech,
            this.$reprompt
        );
    },

    YesIntent() {
        this.$speech
            .t('confirm')
            .t('goodbye-short');

        this.tell(
            this.$speech
        );
    },

    END() {
        this.$speech.t('goodbye-negative');

        this.tell(
            this.$speech
        );
    },
});

module.exports.app = app;
