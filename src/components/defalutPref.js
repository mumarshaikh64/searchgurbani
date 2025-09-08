const initialFormState = {
    translation: {
      ggs: {
        eng_mms: false,
        punj_mms: false,
        ggd: false,
        ft: false,
        fth: false,
        ss: false,
      },
      bgv: {
        teeka: false,
        teeka_roman: false,
        teeka_hindi: false,
      },
      dg: {
        teeka: false,
      },
      ks: {
        teeka: false,
        teeka_roman: false,
        teeka_hindi: false,
      },
      bnl: {
        teeka: false,
        teekahindi: false,
      },
      english: true,
    },
    transliteration: {
      roman: true,
      english: false,
      hindi: false,
      shahmukhi: false,
      main_lang: true,
      lareevar: false,
      lareevar_assist: false,
      punctuation: false,
      punctuation_assist: false,
    },
    displayMode: {
      split_view: false,
      center_align: false,
      dark_mode: false,    
    },
    font: {
      gurmukhi: {
        name: 'RaajaaMediumMedium', 
        color: '#333333',
        size: 24,
      },
      english: {
        name: 'arial',
        color: '#366732',
        size: 18,
      },
      hindi: {
        name: 'arial',
        color: '#880808',
        size: 18,
      },
      phonetic: {
        name: 'AndikaBasicRegular',
        color: '#06035b',
        size: 18,
      },
      attributes: {
        name: 'AnmolUniBani',
        color: '#670464',
        size: 16,
      },
      englishTranslit: {
        name: 'arial',
        color: '#0882BF',
        size: 18,
      },
      shahmukhi: {
        name: 'arial',
        color: '#BF6008',
        size: 18,
      }
    },
    mouseover_gurmukhi_dic: false,
    show_attributes: true,
    social_flag: false,
    share: {
      translation: {
        english: true,
      },
      transliteration: {
        roman: true,
        english: false,
        hindi: false,
        shahmukhi: false
      }
    },
    ggs_audio: {
      audio1: false,
      audio2: false,
      audio3: false,
      audio4: true,
  }
  };
  export default initialFormState;