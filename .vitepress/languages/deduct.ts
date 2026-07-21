import type { LanguageRegistration } from 'shiki'

const deduct: LanguageRegistration = {
  id: 'deduct',
  name: 'Deductrium Deduct',
  scopeName: 'source.deduct',
  aliases: ['deduct', 'deductrium'],
  patterns: [
    { include: '#comment' },
    { include: '#placeholder' },
    { include: '#keyword' },
    { include: '#dollarvar' },
    { include: '#metaprefix' },
    { include: '#rulename' },
    { include: '#metasep' },
    { include: '#variable' },
    { include: '#number' },
    { include: '#operator' },
    { include: '#paren' }
  ],
  repository: {
    comment: {
      name: 'comment.line.number-sign.deduct',
      match: '(?<=^|\\s)#.*$'
    },
    placeholder: {
      name: 'keyword.other.deduct',
      match: '#'
    },
    keyword: {
      name: 'keyword.other.deduct',
      match: '(?<=^)hyp(?![a-zA-Z0-9_])'
    },
    dollarvar: {
      name: 'keyword.other.deduct',
      match: '\\$[0-9]+'
    },
    metaprefix: {
      name: 'keyword.control.meta.deduct',
      match: '(?:(?<=^)|(?<=[vcue><:,]))([vcue><:]+)(?![a-zA-Z0-9.])'
    },
    rulename: {
      match: '(?:(?<=^)|(?<=[vcue><:,]))([vcue><:]*)((?:[a-zA-Z]|\\.)[a-zA-Z0-9&|<>+=*@.]*)',
      captures: {
        '1': { name: 'keyword.control.meta.deduct' },
        '2': { name: 'entity.name.function.deduct' }
      }
    },
    metasep: {
      name: 'keyword.control.meta.deduct',
      match: ':'
    },
    variable: {
      name: 'variable.other.deduct',
      match: '([$]\\d+|[a-wyzA-WYZ]\\w*)'
    },
    number: {
      name: 'constant.numeric.deduct',
      match: '\\b\\d+\\b'
    },
    operator: {
      name: 'constant.character.deduct',
      match: '->|<>|:=|[><~&|⊢→↔¬∧∨]'
    },
    paren: {
      name: 'punctuation.deduct',
      match: '[(){}\\[\\],]'
    }
  }
}

export default deduct
