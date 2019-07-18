
module.exports = {
    type: 'Alexa.Presentation.APL.RenderDocument',
    version: '1.0',
    token: 'foo',
    document: {
        type: 'APL',
        version: '1.0',
        mainTemplate: {
            parameters: [
                'payload'
            ],
            items: [
                {
                    type: 'Pager',
                    id: 'myPager',
                    height: '100vh',
                    width: '100vw',
                    navigation: 'none',
                    items: [
                        {
                            type: 'Image',
                            source: '${payload.data.properties.image1}',
                            height: '100%',
                            width: '100%',
                            scale: '${payload.data.properties.scale}'
                        },
                        {
                            type: 'Container',
                            items: [
                                {
                                    type: 'Image',
                                    source: '${payload.data.properties.image2}',
                                    height: '100%',
                                    width: '100%',
                                    scale: '${payload.data.properties.scale}'
                                },
                                {
                                    type: 'Text',
                                    id: 'myAudio',
                                    text: '',
                                    speech: '${payload.data.properties.audioUrl}',
                                    position: 'absolute'
                                },
                                {
                                    type: 'Text',
                                    id: 'mySpeechText',
                                    text: '',
                                    speech: '${payload.data.properties.responseSpeech}',
                                    position: 'absolute'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    datasources: {
        data: {
            transformers: [
                {
                    inputPath: 'responseSSML',
                    outputName: 'responseSpeech',
                    transformer: 'ssmlToSpeech'
                }
            ],
            type: 'object',
            properties: {
                image1: 'https://s3-eu-west-1.amazonaws.com/exampleresources/apl_pager_one_large.png',
                image2: 'https://s3-eu-west-1.amazonaws.com/exampleresources/apl_pager_two_large.png',
                scale: 'best-fit',
                responseSSML: '<speak>And here is page two!</speak>',
                audioUrl: 'audioUrlPlaceholder'
            }
        }
    }
};