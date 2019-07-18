// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa',
		 skillId: process.env.SKILL_ID,
       askProfile: process.env.ASK_PROFILE,
       manifest: {
         apis: {
           custom: {
             interfaces: [
               {
                 type: 'ALEXA_PRESENTATION_APL'
               }
             ]
           }
         },
         manifestVersion: '1.0',
         privacyAndCompliance: {
           locales: {
             'en-US': {}
           },
           allowsPurchases: false,
           usesPersonalInfo: false,
           isChildDirected: false,
           isExportCompliant: true,
           containsAds: false
         },
         publishingInformation: {
           locales: {
             'de-DE': {
               name: 'Showmaster',
               smallIconUri: 'https://dicechampionship.s3-eu-west-1.amazonaws.com/showmaster_icon_small.png',
               largeIconUri: 'https://dicechampionship.s3-eu-west-1.amazonaws.com/showmaster_icon_large.png',
               summary: 'Beispielskill für ausgewählte APL-Features',
               description: 'Beispielskill für ausgewählte APL-Features',
               examplePhrases: [
                 'Starte Showmaster'
               ],
               keywords: []
             },
             'en-US': {
               name: 'Showmaster',
               smallIconUri: 'https://dicechampionship.s3-eu-west-1.amazonaws.com/showmaster_icon_small.png',
               largeIconUri: 'https://dicechampionship.s3-eu-west-1.amazonaws.com/showmaster_icon_large.png',
               summary: 'Sample Skill for selected APL feature',
               description: 'Sample Skill for selected APL features',
               examplePhrases: [
                 'Open Showmaster'
               ],
               keywords: [
                  'test'
               ]
             }
           },
           isAvailableWorldwide: true,
           testingInstructions: 'test',
           category: 'FASHION_AND_STYLE',
           distributionCountries: []
         }
       }
    },
    endpoint: '${JOVO_WEBHOOK_URL}',
    deploy: {
      target: [
         'info',
         'model'
      ],
   },
};
 