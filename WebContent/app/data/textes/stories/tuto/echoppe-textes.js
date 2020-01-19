'use strict';
define([], function(){
	var data = {
        "echoppe-texte-1" : {
            fr : "Alors que vous quittez la ville, une drôle d'échoppe attire votre attention.",
            en : "As you leave town, a strange shop attracts your attention."
        },
        "echoppe-texte-2" : {
            fr : "Après tout, pourquoi ne pas faire quelques achats&nbsp;?",
            en : "After all, why not make some purchases?"
        },
        "echoppe-oui-fin-texte-1" : {
            fr : "Satisfait (ou non), de vos emplettes. Vous pouvez désormais continuer votre aventure.",
            en : "Satisfied (or not) with your shopping. You can now continue your adventure."
        },
        "echoppe-non-fin-texte-1" : {
            fr : "Vous continuez votre aventure les poches vides. C'est la crise pour tout le monde après tout...",
            en : "You continue your adventure with empty pockets. It's a crisis for everyone after all..."
        },
	};
	
	return {
        get : function(key) {
            return data[key];
        }
    };
});