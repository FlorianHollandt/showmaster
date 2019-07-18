
module.exports = {
    type: 'Alexa.Presentation.APL.ExecuteCommands',
    token: 'foo',
    commands: [
        {
            type: 'Sequential',
            commands: [
                {
                    type: 'Parallel',
                    commands: [
                        {
                            type: 'SetPage',
                            componentId: 'myPager',
                            position: 'absolute',
                            value: 1
                        },
                        {
                            type: 'SpeakItem',
                            componentId: 'myAudio'
                        }
                    ]
                },
                {
                    type: 'SpeakItem',
                    componentId: 'mySpeechText'
                } 
            ]
        }
    ]
};
