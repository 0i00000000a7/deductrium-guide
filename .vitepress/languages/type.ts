import type { LanguageRegistration } from 'shiki'

const typeLang: LanguageRegistration = {
  id: 'dtype',
  name: 'Deductrium Type',
  scopeName: 'source.deductrium-type',
  aliases: ['type', 'dtype'],
  patterns: [
    { include: '#comment' },
    { include: '#tactic' },
    { include: '#constructor' },
    { include: '#inductor' },
    { include: '#type' },
    { include: '#function' },
    { include: '#operator' },
    { include: '#variable' },
    { include: '#number' },
    { include: '#string' },
    { include: '#paren' }
  ],
  repository: {
    comment: {
      name: 'comment.line.number-sign.type',
      match: '#.*$'
    },
    tactic: {
      name: 'keyword.control.tactic.type',
      match: '\\b(intro|intros|exact|apply|destruct|simpl|expand|rfl|qed|ex|left|right|case|rwb?|fnext|sup|trunc|hyp|eq)\\b'
    },
    constructor: {
      name: 'support.function.constructor.type',
      match: '\\b(true|false|0b|1b|0I|1I|refl|rfl|inl|inr|pair|pr[01]|prd1|succ|succZ|predZ|pos|neg|0Z|none|some|nil|cons|base|base2|loop|segI|North|South|inveq|compeq)\\b'
    },
    inductor: {
      name: 'support.function.inductor.type',
      match: '\\b(ind_(True|False|Bool|nat|Prod|Sum|eq|S1|Sus|LiftU|Empty|Unit|List|Option|Even|Ord|Trunc|W|Pushout)|rec_S1)\\b'
    },
    type: {
      name: 'storage.type.type',
      match: '\\b(Uz?|U\\d*|True|False|Bool|nat|I|Z|S[12]|Ord|Sum|Prod|List|Option|Even|Empty|Unit|Sus|Pushout|Trunc|W|Type)\\b'
    },
    function: {
      name: 'entity.name.function.type',
      match: '\\b(add|mul|addZ|mulZ|addO|mulO|leqO|not|eq|ua|liftU|LiftU|lowerU|trans|transconst|transleft|transright|transleftright|transeq|ap|apd|apconst|apid|happly|fnext|funext|pairEq|isContr|isProp|isSet|isGrpd|contr|LEM|id2eqv|eqv|pol|por|halve|Double|rightrfl|rightinveq|leftinveq|compinveq|invinveq|compeqassoc)\\b'
    },
    operator: {
      name: 'constant.character.type',
      match: '->|→|=|≡|~|:=|===|<|>|<=|>='
    },
    variable: {
      name: 'variable.other.type',
      match: '\\b[a-wyzA-WYZ_]\\w*\\b'
    },
    number: {
      name: 'constant.numeric.type',
      match: '\\b\\d+\\b'
    },
    string: {
      name: 'string.quoted.double.type',
      match: '"[^"]*"'
    },
    paren: {
      name: 'punctuation.type',
      match: '[(){}\\[\\],.:×▪+*×]'
    }
  }
}

export default typeLang
