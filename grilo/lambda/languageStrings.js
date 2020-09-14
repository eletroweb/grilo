/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    pt: {
        translation: {
            SKILL_NAME: 'Fatos Espaciais',
            GET_FACT_MESSAGE: 'Aqui vai: ',
            HELP_MESSAGE: 'Você pode me perguntar por um fato interessante sobre o espaço, ou, fexar a skill. Como posso ajudar?',
            HELP_REPROMPT: 'O que vai ser?',
            FALLBACK_MESSAGE: 'A skill fatos espaciais não tem uma resposta para isso. Ela pode contar informações interessantes sobre o espaço, é só perguntar. Como posso ajudar?',
            FALLBACK_REPROMPT: 'Eu posso contar fatos sobre o espaço. Como posso ajudar?',
            ERROR_MESSAGE: 'Desculpa, algo deu errado.',
            STOP_MESSAGE: 'Tchau!',
            FACTS:
            [
                'Um ano em Mercúrio só dura 88 dias.',
                'Apesar de ser mais distante do sol, Venus é mais quente que Mercúrio.',
                'Visto de marte, o sol parece ser metade to tamanho que nós vemos da terra.',
                'Júpiter tem os dias mais curtos entre os planetas no nosso sistema solar.',
                'O sol é quase uma esfera perfeita.',
            ],
        }
    },
    
}