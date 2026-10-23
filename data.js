/**
 * BANC D'ACTIVITATS CATALÀ C1
 * Inclou:
 * 1. Examen Oficial CAT-C1-39 (Govern d'Andorra)
 * 2. Nou Model d'Examen C1 (Govern d'Andorra)
 * 3. Text de Comprensió Lectora Oficial C1 ("El sucre de la fruita")
 * 4. Gran Banc d'Activitats Complementàries C1 per àrees temàtiques
 */

window.C1_DATA = {
  metadata: {
    title: "Entrenador Oficial C1 Català - Proves de Llengua Catalana",
    author: "Govern d'Andorra & Banc de Pràctica C1",
    version: "2.0",
    description: "Plataforma interactiva amb desenes d'activitats oficials i d'entrenament C1 amb autocorrecció i explicacions."
  },

  categories: [
    { id: "all", name: "Totes les activitats", icon: "📚" },
    { id: "exam1", name: "Examen CAT-C1-39", icon: "📝" },
    { id: "exam2", name: "Nou Model d'Examen C1", icon: "📄" },
    { id: "derivacio", name: "Derivació i Lèxic", icon: "🌱" },
    { id: "frases_fetes", name: "Frases Fetes i Modismes", icon: "💡" },
    { id: "precisio", name: "Precisió Lèxica i Parònims", icon: "🎯" },
    { id: "cloze", name: "Textos amb buits (Connectors)", icon: "🧩" },
    { id: "flexio", name: "Flexió Verbal i Nominal", icon: "⚙️" },
    { id: "transformacio", name: "Transformacions i Pronoms", icon: "🔄" },
    { id: "comprensio", name: "Comprensió Lectora", icon: "📖" }
  ],

  activities: [
    // =========================================================================
    // EXAMEN 1: CAT-C1-39
    // =========================================================================

    // EX1 - 1. Derivació (W.G. Sebald, Austerlitz)
    {
      id: "ex1_der_1",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (1/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Durant el sermó havia anat de poc que els feligresos no es quedessin {{BLANK}} (de PEDRA).",
      answers: ["petrificats", "PETRIFICATS"],
      hint: "Adjectiu participial masculí plural a partir de pedra.",
      explanation: "De «pedra» deriva el verb «petrificar» i el participi/adjectiu «petrificats» (quedar-se de pedra, immòbils d'estupor o terror)."
    },
    {
      id: "ex1_der_2",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (2/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "On el pastor havia de presidir la {{BLANK}} (PREGAR) aquell mateix vespre...",
      answers: ["pregària", "PREGÀRIA"],
      hint: "Substantiu femení amb accent obert sobre la 'a' que expressa l'acció de pregar.",
      explanation: "«Pregària» s'escriu amb accent greu/obert sobre la 'a' (pre-gà-ri-a), mot esdrúixol acabat en diftong creixent/hiat segons la norma."
    },
    {
      id: "ex1_der_3",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (3/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Les ruïnes encara {{BLANK}} (treien FUM) quan vam arribar al centre de la vila.",
      answers: ["fumejaven", "FUMEJAVEN"],
      hint: "Pretèrit imperfet d'indicatiu de fumejar, 3a persona del plural.",
      explanation: "El verb que significa 'treure fum' és «fumejar». En imperfet de la tercera persona del plural: «fumejaven»."
    },
    {
      id: "ex1_der_4",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (4/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Una mena de mitologia inspirada en les {{BLANK}} (REPRESALIAR) de l'Antic Testament...",
      answers: ["represàlies", "REPRESÀLIES"],
      hint: "Substantiu femení plural amb 's' sonora i accent obert.",
      explanation: "Del verb represaliar deriva el substantiu femení «represàlia» / «represàlies» (mesura de rigor presa contra algú en venjança)."
    },
    {
      id: "ex1_der_5",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (5/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "La màxima expressió de la qual va ser sempre la submersió del municipi de Llanwddyn sota les aigües de l'{{BLANK}} (BASSA) de Vyrnwy.",
      answers: ["embassament", "EMBASSAMENT"],
      hint: "Gran acumulació d'aigua retinguda per una presa.",
      explanation: "De «bassa» -> «embassar» -> «embassament» (pantà o dipòsit artificial d'aigua)."
    },
    {
      id: "ex1_der_6",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (6/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Enfilats al mur de {{BLANK}} (CONTENIR) de Vyrnwy...",
      answers: ["contenció", "CONTENCIÓ"],
      hint: "Substantiu acabat en -ció amb accent agut.",
      explanation: "De «contenir» deriva «contenció» (acció i efecte de contenir: mur de contenció)."
    },
    {
      id: "ex1_der_7",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (7/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Va deixar que donés una llambregada a la {{BLANK}} (ÍNTIM) del seu cor clerical...",
      answers: ["intimitat", "INTIMITAT"],
      hint: "Qualitat d'íntim; vida privada o profunda.",
      explanation: "D'«íntim» deriva «intimitat» amb el sufix de qualitat -itat."
    },
    {
      id: "ex1_der_8",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (8/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Els seus pares, els seus germans, els seus parents, els veïns i la resta de {{BLANK}} (VILA)...",
      answers: ["vilatans", "VILATANS"],
      hint: "Gent o habitants que viuen a la vila (plural masculí).",
      explanation: "D'«vila» tenim «vilatà» / «vilatans» (habitants d'una vila)."
    },
    {
      id: "ex1_der_9",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (9/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Vivint encara a les {{BLANK}} (PROFUND) del pantà...",
      answers: ["profunditats", "PROFUNDITATS"],
      hint: "Substantiu femení plural amb el sufix -itat.",
      explanation: "De «profund» s'obté «profunditat» i en plural «profunditats»."
    },
    {
      id: "ex1_der_10",
      exam: "exam1",
      category: "derivacio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 1: Paraules derivades (10/10)",
      instruction: "Ompliu l'espai buit amb una paraula derivada de la que hi ha en majúscules entre parèntesis.",
      contextText: "Asseguts a casa seva o deambulant pels carrers, però {{BLANK}} (sense CAPACITAT) de parlar...",
      answers: ["incapaços", "INCAPAÇOS"],
      hint: "Adjectiu plural en -ços amb prefix de negació in-.",
      explanation: "«Incapaç» té com a forma plural «incapaços» (amb ce trencada 'ç' canviada a 'ç' davant 'o', no pas 'ss')."
    },

    // EX1 - 2. Frases fetes
    {
      id: "ex1_ff_1",
      exam: "exam1",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 2: Frases fetes (2.1)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Diem que algú està «tocat del bolet» si...",
      options: [
        "està atabalat.",
        "no té el cap prou bé.",
        "és un amant de la micologia."
      ],
      correctIndex: 1,
      explanation: "«Estar tocat del bolet» vol dir no tenir el cap a lloc, estar una mica boig o perdre el seny."
    },
    {
      id: "ex1_ff_2",
      exam: "exam1",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 2: Frases fetes (2.2)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Si algú «es fot de lloros»...",
      options: [
        "salta molt amunt.",
        "es riu dels ocells.",
        "cau a terra."
      ],
      correctIndex: 2,
      explanation: "«Fotre's de lloros» (o caure de lloros) significa caure de bocaterrosa o caure a terra estrepitosament."
    },
    {
      id: "ex1_ff_3",
      exam: "exam1",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 2: Frases fetes (2.3)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Quan algú «s'enfila per les parets»...",
      options: [
        "s'ha tornat boig.",
        "pretén demostrar la seva agilitat.",
        "està molt enfadat."
      ],
      correctIndex: 2,
      explanation: "«Enfilar-se per les parets» significa estar molt irritat, enutjat o enfadat davant d'una situació."
    },
    {
      id: "ex1_ff_4",
      exam: "exam1",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 2: Frases fetes (2.4)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Quan algú «ha begut oli»...",
      options: [
        "ha perdut el seny.",
        "està perdut, no té remei.",
        "s'ha empassat una mentida."
      ],
      correctIndex: 1,
      explanation: "«Haver begut oli» s'aplica a qui està irremeiablement perdut, condemnat al fracàs o sense possibilitat de salvació."
    },
    {
      id: "ex1_ff_5",
      exam: "exam1",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 2: Frases fetes (2.5)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Algú «explica sopars de duro» quan...",
      options: [
        "recomana restaurants casolans.",
        "recorda les experiències de la joventut.",
        "exagera els fets per provocar admiració."
      ],
      correctIndex: 2,
      explanation: "«Explicar sopars de duro» és explicar coses inversemblants, exagerades o fantàstiques per presumir o impressionar els altres."
    },

    // EX1 - 3. Trieu l'opció adequada
    {
      id: "ex1_tri_1",
      exam: "exam1",
      category: "precisio",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 3: Opció adequada (3.1)",
      instruction: "Trieu l'opció adequada en cada cas.",
      question: "Es va aprimar tant que, al final, es va haver d'________ els pantalons.",
      options: [
        "estremir",
        "estrènyer"
      ],
      correctIndex: 1,
      explanation: "«Estrènyer» significa fer més estret o cenyir (la roba). «Estremir» vol dir fer tremolar o esglaiar."
    },
    {
      id: "ex1_tri_2",
      exam: "exam1",
      category: "precisio",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 3: Opció adequada (3.2)",
      instruction: "Trieu l'opció adequada.",
      question: "El defensa li va ________ la pilota sense fer-li falta.",
      options: [
        "treure",
        "prendre",
        "esmunyir"
      ],
      correctIndex: 1,
      explanation: "En català precís, arrabassar o furtar quelcom a algú s'expressa amb el verb «prendre» («prendre la pilota»)."
    },
    {
      id: "ex1_tri_3",
      exam: "exam1",
      category: "precisio",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 3: Opció adequada (3.3)",
      instruction: "Trieu l'opció adequada.",
      question: "La Cèlia és una noia ben ________; mai no pren precaucions.",
      options: [
        "enjogassada",
        "agosarada",
        "enrevessada"
      ],
      correctIndex: 1,
      explanation: "«Agosarada» significa que té gosadia, atrevida, que no té por ni pren precaucions. «Enjogassada» vol dir que té ganes de jugar; «enrevessada» vol dir complicada."
    },
    {
      id: "ex1_tri_4",
      exam: "exam1",
      category: "precisio",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 3: Opció adequada (3.4)",
      instruction: "Trieu l'opció adequada.",
      question: "No tenim prou diners per comprar material ________ i ja no podem fer ni fotocòpies.",
      options: [
        "fungicida",
        "fungible"
      ],
      correctIndex: 1,
      explanation: "«Fungible» és el material que es gasta o es consumeix amb l'ús (folis, tinta, bolígrafs). «Fungicida» és una substància per destruir fongs."
    },
    {
      id: "ex1_tri_5",
      exam: "exam1",
      category: "precisio",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 3: Opció adequada (3.5)",
      instruction: "Trieu l'opció adequada.",
      question: "Sempre acabem discutint; és un ________.",
      options: [
        "cerca-raons",
        "cercatòfones"
      ],
      correctIndex: 0,
      explanation: "«Cerca-raons» és una persona que busca motius per discutir o barallar-se. «Cercatòfones» és un boletaire que busca tòfones."
    },

    // EX1 - 4. Encercleu la resposta correcta per a cada espai (Updike, The Paris Review)
    {
      id: "ex1_cloze_1",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 1)",
      instruction: "Trieu la resposta correcta per a l'espai (1) del text.",
      question: "«Si és bona, ressorgirà en un parell de generacions i perdurarà. _(1)_, s'enfonsarà.»",
      options: ["Sinó", "En canvi", "Si no"],
      correctIndex: 2,
      explanation: "«Si no» (condicional + negació) equival a 'en cas contrari' o 'si no ho és'. «Sinó» és la conjunció adversativa."
    },
    {
      id: "ex1_cloze_2",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 2)",
      instruction: "Trieu la resposta correcta per a l'espai (2) del text.",
      question: "«Però, _(2)_, m’haurà proporcionat un mitjà de vida...»",
      options: ["mentre estant", "mentre", "mentrestant"],
      correctIndex: 2,
      explanation: "«Mentrestant» és l'adverbi temporal adequat ('durant aquest temps'). «Mentre» és conjunció subordinant temporal que necessita una oració."
    },
    {
      id: "ex1_cloze_3",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 3)",
      instruction: "Trieu la resposta correcta per a l'espai (3) del text.",
      question: "«...m’haurà proporcionat un _(3)_ de vida, certes ocasions d’oci...»",
      options: ["mitjan", "medi", "mitjà"],
      correctIndex: 2,
      explanation: "«Mitjà de vida» és l'expressió correcta (instrument, manera de subsistir). «Medi» es refereix a l'ambient biològic o social."
    },
    {
      id: "ex1_cloze_4",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 4)",
      instruction: "Trieu la resposta correcta per a l'espai (4) del text.",
      question: "«O almenys es contradeia, _(4)_ en la mateixa entrevista, per il·lustrar el seu cèlebre allunyament...»",
      options: ["per què", "doncs", "perquè"],
      correctIndex: 2,
      explanation: "«Perquè» funciona com a conjunció causal ('ja que es contradeia, atès que...'). «Doncs» és consecutiu, mai causal!"
    },
    {
      id: "ex1_cloze_5",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 5)",
      instruction: "Trieu la resposta correcta per a l'espai (5) del text.",
      question: "«...per il·lustrar el seu cèlebre allunyament del _(5)_ literari, afirmava...»",
      options: ["gènere", "univers", "món"],
      correctIndex: 2,
      explanation: "L'expressió habitual és «el món literari» (l'àmbit dels escriptors, editorials i crítics)."
    },
    {
      id: "ex1_cloze_6",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 6)",
      instruction: "Trieu la resposta correcta per a l'espai (6) del text.",
      question: "«Un adolescent _(6)_ campestre els troba i descobreix que tenen coses a dir-li.»",
      options: ["gaire bé", "quasi bé", "més aviat"],
      correctIndex: 2,
      explanation: "«Més aviat campestre» matisa una qualitat ('més aviat / tirant a campestre'). Recordem a més que 'gairebé' s'escriu junt."
    },
    {
      id: "ex1_cloze_7",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 7)",
      instruction: "Trieu la resposta correcta per a l'espai (7) del text.",
      question: "«El bagatge _(7)_ trucava a aquella porta no està a l’abast de tothom...»",
      options: ["en què", "amb el qual", "en el que"],
      correctIndex: 1,
      explanation: "Relatiu precedit de preposició que denota instrument: «amb el qual» (o «amb què»). «En el que» és incorrecte."
    },
    {
      id: "ex1_cloze_8",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 8)",
      instruction: "Trieu la resposta correcta per a l'espai (8) del text.",
      question: "«...no està a l'abast de _(8)_: un domini del llenguatge que li permetia escriure...»",
      options: ["molts", "masses", "tothom"],
      correctIndex: 2,
      explanation: "«No està a l'abast de tothom» és la locució fixa que denota que és quelcom exclusiu i d'alta vàlua."
    },
    {
      id: "ex1_cloze_9",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 9)",
      instruction: "Trieu la resposta correcta per a l'espai (9) del text.",
      question: "«No és d’estranyar, doncs, que de petit _(9)_ ser dibuixant.»",
      options: ["volia", "volgués", "voldria"],
      correctIndex: 1,
      explanation: "L'expressió que expressa judici o emoció («No és d'estranyar que...») exigeix subjuntiu: «volgués» (imperfet de subjuntiu)."
    },
    {
      id: "ex1_cloze_10",
      exam: "exam1",
      category: "cloze",
      type: "multiple_choice",
      title: "CAT-C1-39 · Exercici 4: Text amb buits (Espai 10)",
      instruction: "Trieu la resposta correcta per a l'espai (10) del text.",
      question: "«Un dels seus grans orgulls professionals va ser que The New Yorker _(10)_ publiqués una.»",
      options: ["l’hi", "li’n", "li"],
      correctIndex: 1,
      explanation: "Combinació de pronoms: a ell (CI: li) + una tira còmica (CD quantificat: en/ne) -> «li'n publiqués una»."
    },

    // EX1 - 5. Flexió (J.K. Rowling, Les rondalles del bard Gallard)
    {
      id: "ex1_flex_1",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (1/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "Fa molt i molt de temps, en un {{BLANK}} (PAÏSOS) llunyà...",
      answers: ["país", "PAÍS"],
      hint: "Singular amb accent gràfic sobre la i.",
      explanation: "El singular de 'països' (amb dièresi) és «país» (amb accent agut per ser aguda acabada en -s)."
    },
    {
      id: "ex1_flex_2",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (2/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "Hi vivia un rei {{BLANK}} (NÈCIA) que va decidir que tindria poders màgics...",
      answers: ["neci", "NECI"],
      hint: "Masculí singular acabat en -i.",
      explanation: "El masculí de «nècia» és «neci» (sense accent, pla acabat en vocal)."
    },
    {
      id: "ex1_flex_3",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (3/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "Va manar al cap del seu exèrcit que {{BLANK}} (FORMAR) una brigada de caçadors de bruixes...",
      answers: ["formés", "FORMÉS"],
      hint: "Passat subjuntiu (imperfet de subjuntiu, 3a persona singular) amb accent tancat.",
      explanation: "Subjuntiu després d'ordre en passat («va manar que...»): «formés» (amb accent agut a la 'e')."
    },
    {
      id: "ex1_flex_4",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (4/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "Els va proporcionar una canilla de {{BLANK}} (FEROÇ) gossos negres de caça.",
      answers: ["feroços", "FEROÇOS"],
      hint: "Masculí plural conservant la ç trencada.",
      explanation: "Els adjectius acabats en -ç formen el masculí plural afegint -os i mantenint la ç: «feroços» (com audaços, capaços)."
    },
    {
      id: "ex1_flex_5",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (5/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "No hi va haver cap bruixa ni cap bruixot de veritat que {{BLANK}} (ATREVIR-SE) a oferir-se...",
      answers: ["s'atrevís", "s’atrevís", "S'ATREVÍS"],
      hint: "Pronom reflexiu apostrofat + imperfet de subjuntiu amb accent agut.",
      explanation: "Imperfet de subjuntiu 3a persona singular de verb de la 3a conjugació: «s'atrevís» (accent agut a la 'í')."
    },
    {
      id: "ex1_flex_6",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (6/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "Un xarlatà molt astut, però amb capacitats màgiques {{BLANK}} (NUL)...",
      answers: ["nul·les", "nul·la", "NUL·LES"],
      hint: "Femení plural de nul amb ela geminada (l·l).",
      explanation: "L'adjectiu «nul» fa el femení «nul·la» i en plural concorda amb capacitats: «nul·les»."
    },
    {
      id: "ex1_flex_7",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (7/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "Assegurant que era bruixot de mestria {{BLANK}} (EXTRAORDINARI)...",
      answers: ["extraordinària", "EXTRAORDINÀRIA"],
      hint: "Femení singular amb accent obert sobre la 'a'.",
      explanation: "«Extraordinària» concorda amb 'mestria'. Porta accent obert en la penúltima síl·laba."
    },
    {
      id: "ex1_flex_8",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (8/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "Van convèncer el rei ximple que {{BLANK}} (POSSEIR) poders màgics...",
      answers: ["posseïa", "POSSEÏA"],
      hint: "Pretèrit imperfet d'indicatiu amb dièresi a la ï.",
      explanation: "L'imperfet d'indicatiu de posseir requereix dièresi per no fer diftong amb la vocal anterior: «posseïa»."
    },
    {
      id: "ex1_flex_9",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (9/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "També li va demanar uns quants {{BLANK}} (ROBÍ) grossos...",
      answers: ["robins", "ROBINS"],
      hint: "Plural masculí de paraula aguda acabada en vocal tònica afegint -ns.",
      explanation: "Els mots masculins aguts d'origen etimològic acabats en vocal tònica formen el plural afegint -ns: «robins» (com coixins, camins)."
    },
    {
      id: "ex1_flex_10",
      exam: "exam1",
      category: "flexio",
      type: "fill_in",
      title: "CAT-C1-39 · Exercici 5: Flexió (10/10)",
      instruction: "Completeu l'espai buit amb la flexió de la paraula entre parèntesis.",
      contextText: "I altres pedres {{BLANK}} (PRECIÓS)...",
      answers: ["precioses", "PRECIOSES"],
      hint: "Femení plural de preciós.",
      explanation: "El femení de preciós és preciosa; en plural: «precioses»."
    },

    // EX1 - 6. Transformació d'oracions
    {
      id: "ex1_trans_1",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (1/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit que la primera sense repetir les paraules clau.",
      originalSentence: "1.a. Jo crec que l’hauries d’avisar.",
      promptTemplate: "1.b. Jo, si no {{BLANK}}, trauria foc pels queixals.",
      answers: ["m'avisessis", "m’avisessis", "m'avisessiu", "m’avisessiu"],
      hint: "Pronom feble de 1a persona + verb avisar en imperfet de subjuntiu.",
      explanation: "Construcció condicional irreal de present: «si no m'avisessis, trauria foc pels queixals»."
    },
    {
      id: "ex1_trans_2",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (2/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit.",
      originalSentence: "2.a. El client li va dir si li podia donar una bossa de plàstic.",
      promptTemplate: "2.b. El client li va dir que li {{BLANK}} una bossa de plàstic.",
      answers: ["donés", "dones"],
      hint: "Verb donar en imperfet de subjuntiu amb accent tancat.",
      explanation: "Subjuntiu en estil indirecte d'ordre/petició: «li donés una bossa» (amb accent agut a la 'é')."
    },
    {
      id: "ex1_trans_3",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (3/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit.",
      originalSentence: "3.a. T’ho vaig dir fa dies, que anessis a fer els papers.",
      promptTemplate: "3.b. Així mateix t’ho vaig dir: “{{BLANK}} de seguida, a fer-los”.",
      answers: ["ves-hi", "Ves-hi", "VES-HI"],
      hint: "Imperatiu del verb anar + pronom de lloc hi unit amb guionet.",
      explanation: "L'imperatiu segona persona de anar és «ves». Afegint el pronom hi postverbal: «ves-hi»."
    },
    {
      id: "ex1_trans_4",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (4/10)",
      instruction: "Completeu els espais de la segona oració (separeu-los amb una coma o escriviu 'm'ho ... sàpiga').",
      originalSentence: "4.a. Doncs no; encara no sé on vas anar l’altre dia.",
      promptTemplate: "4.b. Si no {{BLANK1}} expliques, com vols que ho {{BLANK2}}.",
      answers: ["m'ho, sàpiga", "m'ho / sàpiga", "m’ho, sàpiga", "m'ho sàpiga"],
      hint: "Primer buit: CI 1a persona + CD neutre. Segon buit: verb saber en present de subjuntiu.",
      explanation: "Respostes: «m'ho» (CI me + CD ho) i «sàpiga» (present de subjuntiu de saber)."
    },
    {
      id: "ex1_trans_5",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (5/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit.",
      originalSentence: "5.a. Si vols fer-ho, fes-ho ara.",
      promptTemplate: "5.b. Si no ho fas, {{BLANK}} penediràs.",
      answers: ["te'n", "te’n", "TE'N"],
      hint: "Combinació de pronom reflexiu de 2a persona + pronom partitiu/preposicional en.",
      explanation: "Penedir-se de quelcom: «te'n penediràs» (te + en -> te'n)."
    },
    {
      id: "ex1_trans_6",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (6/10)",
      instruction: "Completeu els espais buits (escriviu les dues respostes separades per coma, ex: hi, s'hi).",
      originalSentence: "6.a. Has d’anar al restaurant del Manel perquè cuinen molt bé.",
      promptTemplate: "6.b. De veritat, {{BLANK1}} has d’anar perquè {{BLANK2}} menja molt bé.",
      answers: ["hi, s'hi", "hi / s'hi", "hi, s’hi", "hi s'hi"],
      hint: "Primer buit: pronom locatiu. Segon buit: pronom reflexiu/impersonal + locatiu.",
      explanation: "Primer buit: «hi» (al restaurant). Segon buit: «s'hi» (impersonal 'es' + locatiu 'hi' = s'hi menja molt bé)."
    },
    {
      id: "ex1_trans_7",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (7/10)",
      instruction: "Completeu els dos buits (escriviu les dues respostes separades per coma, ex: per què, me'l).",
      originalSentence: "7.a. Per què no em deixes el cotxe per anar a la feina?",
      promptTemplate: "7.b. Si no el necessites, no entenc {{BLANK1}} no {{BLANK2}} deixes.",
      answers: ["per què, me'l", "per què / me'l", "per què, me’l", "per que, me'l"],
      hint: "Primer buit: interrogatiu indirecte separat amb accent. Segon buit: pronom me + el.",
      explanation: "Interrogativa indirecta de causa: «per què» (separat i amb accent obert). Pronoms: «me'l» (a mi el cotxe)."
    },
    {
      id: "ex1_trans_8",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (8/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit.",
      originalSentence: "8.a. Es va ofendre tant perquè et vas encarar amb ell.",
      promptTemplate: "8.b. Si no {{BLANK}} encarat, no s'hauria ofès tant.",
      answers: ["t'hi haguessis", "t’hi haguessis", "t'hi haguéssiu"],
      hint: "Pronom te + hi + plusquamperfet de subjuntiu d'haver.",
      explanation: "Encarar-se amb algú: te + hi -> «t'hi» + «haguessis» (o 't'hi haguéssiu')."
    },
    {
      id: "ex1_trans_9",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (9/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit.",
      originalSentence: "9.a. Ahir no vaig agafar el paraigua i vaig acabar ben xop.",
      promptTemplate: "9.b. Doncs {{BLANK}} agafat.",
      answers: ["l'hauries d'haver", "l’hauries d’haver"],
      hint: "Pronom l' + condicional d'haver de + infinitiu haver.",
      explanation: "Perífrasi d'obligació/retret en el passat: «l'hauries d'haver agafat»."
    },
    {
      id: "ex1_trans_10",
      exam: "exam1",
      category: "transformacio",
      type: "sentence_transform",
      title: "CAT-C1-39 · Exercici 6: Transformació d'oracions (10/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit.",
      originalSentence: "10.a. El client ens ha reclamat el paquet.",
      promptTemplate: "10.b. Agafa’l i porta-{{BLANK}}.",
      answers: ["l'hi", "l’hi", "L'HI"],
      hint: "Combinació de pronoms CD determinat masculí + CI singular de 3a persona.",
      explanation: "Portar el paquet (el -> l') al client (li -> hi): la combinació normativa de CD determinat + CI de 3a persona és «l'hi»."
    },

    // =========================================================================
    // EXAMEN 2: NOU MODEL D'EXAMEN C1
    // =========================================================================

    // EX2 - 1. Derivació (Sergi Zauner, La música)
    {
      id: "ex2_der_1",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (1/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "La música i l’{{BLANK}} (ALFABET): Escriure sobre la música.",
      answers: ["alfabetització", "alfabetitzacio", "ALFABETITZACIÓ"],
      hint: "Substantiu femení que designa el procés d'ensenyar a llegir i escriure.",
      explanation: "D'«alfabet» deriva el verb «alfabetitzar» i el substantiu acabat en -ció «alfabetització»."
    },
    {
      id: "ex2_der_2",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (2/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "És molt {{BLANK}} (REPRESENTAR) el vell costum dels nostres pensadors de fixar les seves reflexions...",
      answers: ["representatiu", "REPRESENTATIU"],
      hint: "Adjectiu masculí acabat en -iu.",
      explanation: "De «representar» deriva l'adjectiu «representatiu» (que serveix per representar o és típic)."
    },
    {
      id: "ex2_der_3",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (3/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "L'afany plurisecular per desxifrar la naturalesa de la música s'ha {{BLANK}} (MATERIAL) en un corpus...",
      answers: ["materialitzat", "MATERIALITZAT"],
      hint: "Participi masculí del verb derivat de material.",
      explanation: "De «material» deriva el verb «materialitzar» i aquí el participi passat és «materialitzat»."
    },
    {
      id: "ex2_der_4",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (4/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "En un corpus {{BLANK}} (TEXT) d'extensió vastíssima...",
      answers: ["textual", "TEXTUAL"],
      hint: "Adjectiu de la família de text.",
      explanation: "De «text» deriva l'adjectiu «textual» (pertanyent al text o fet de textos: corpus textual)."
    },
    {
      id: "ex2_der_5",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (5/10)",
      instruction: "Completeu el text amb la forma demanada entre parèntesis.",
      contextText: "D'extensió {{BLANK}} (superlatiu de VAST).",
      answers: ["vastíssima", "VASTÍSSIMA"],
      hint: "Superlatiu femení en -íssima amb accent obert a la í/i.",
      explanation: "El superlatiu de vast concorda amb extensió (femení): «vastíssima» (amb accent agut a la 'í')."
    },
    {
      id: "ex2_der_6",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (6/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "Quines han estat les implicacions històriques de l'{{BLANK}} (EXISTIR) d'aquesta literatura?",
      answers: ["existència", "existencia", "EXISTÈNCIA"],
      hint: "Substantiu femení amb accent obert sobre la 'e'.",
      explanation: "D'«existir» deriva el substantiu femení «existència» (amb 'è' oberta)."
    },
    {
      id: "ex2_der_7",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (7/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "Allò que de forma més evident ha permès l'{{BLANK}} (ESCRIURE) incidir en la nostra música...",
      answers: ["escriptura", "ESCRIPTURA"],
      hint: "Substantiu femení que fa referència a l'acció i el sistema d'escriure.",
      explanation: "D'«escriure» deriva el nom culte «escriptura»."
    },
    {
      id: "ex2_der_8",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (8/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "És el seu enorme {{BLANK}} (POTENT) com a instrument...",
      answers: ["potencial", "POTENCIAL"],
      hint: "Substantiu masculí que indica capacitat o força disponible.",
      explanation: "De «potent» tenim el substantiu masculí «potencial» (enorme potencial)."
    },
    {
      id: "ex2_der_9",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (9/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "Com a instrument de {{BLANK}} (DIFONDRE) de les idees.",
      answers: ["difusió", "difusio", "DIFUSIÓ"],
      hint: "Substantiu femení amb accent agut a la o.",
      explanation: "De «difondre» deriva «difusió» (amb una sola essa sonora)."
    },
    {
      id: "ex2_der_10",
      exam: "exam2",
      category: "derivacio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 1: Paraules derivades (10/10)",
      instruction: "Completeu el text amb una paraula derivada de la que hi ha entre parèntesis.",
      contextText: "El text escrit facilita la {{BLANK}} (TRANSMETRE) fidedigna de missatges complexos...",
      answers: ["transmissió", "transmissio", "TRANSMISSIÓ"],
      hint: "Substantiu femení amb dues esses i accent a la o.",
      explanation: "De «transmetre» deriva «transmissió» (amb doble essa 'ss' per representar el so sord entre vocals)."
    },

    // EX2 - 2. Frases fetes
    {
      id: "ex2_ff_1",
      exam: "exam2",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 2: Frases fetes (2.1)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Algú «demana la lluna en un cove» quan...",
      options: [
        "demana alguna cosa impossible.",
        "és un amant de la lluna.",
        "fa tot el que es proposa."
      ],
      correctIndex: 0,
      explanation: "«Demanar la lluna en un cove» significa demanar pretensions inassolibles o coses del tot impossibles."
    },
    {
      id: "ex2_ff_2",
      exam: "exam2",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 2: Frases fetes (2.2)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "«Viu amb l'esquena dreta» qui...",
      options: [
        "té mal d'esquena sovint.",
        "viu sense treballar.",
        "va sempre amb l'esquena recta."
      ],
      correctIndex: 1,
      explanation: "«Viure amb l'esquena dreta» vol dir viure còmodament sense doblegar l'esquena per treballar."
    },
    {
      id: "ex2_ff_3",
      exam: "exam2",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 2: Frases fetes (2.3)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Algú «fa l'ànec» quan...",
      options: [
        "fa bromes.",
        "neda de forma extraordinària.",
        "mor."
      ],
      correctIndex: 2,
      explanation: "«Fer l'ànec» és una expressió col·loquial catalana que significa morir o sucumbir."
    },
    {
      id: "ex2_ff_4",
      exam: "exam2",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 2: Frases fetes (2.4)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Algú «ensenya l'orella» si...",
      options: [
        "no sap guardar un secret.",
        "sap escoltar.",
        "té les orelles molt grosses."
      ],
      correctIndex: 0,
      explanation: "«Ensenyar l'orella» significa delatar-se inconscientment, deixar entreveure les intencions reals o no saber guardar un secret."
    },
    {
      id: "ex2_ff_5",
      exam: "exam2",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 2: Frases fetes (2.5)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Algú «agafa el rave per les fulles» si...",
      options: [
        "és un pagès pèssim.",
        "és poc destre.",
        "és molt malpensat."
      ],
      correctIndex: 2,
      explanation: "«Agafar el rave per les fulles» vol dir interpretar malament o malpensadament les paraules o intencions d'algú."
    },
    {
      id: "ex2_ff_6",
      exam: "exam2",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 2: Frases fetes (2.6)",
      instruction: "Marqueu el significat correcte per a cada frase feta.",
      question: "Es diu «brams d'ase no pugen al cel» quan...",
      options: [
        "no s'ha de fer cas dels mals consells o paraules ofensives.",
        "un infant plora desesperat per aconseguir el que vol.",
        "algú no fa cas de res."
      ],
      correctIndex: 0,
      explanation: "«Brams d'ase no pugen al cel» expressa que les injúries, amenaces o queixes absurdes de qui no té seny no han de preocupar ni tenir efecte."
    },

    // EX2 - 3. Trieu l'opció adequada
    {
      id: "ex2_tri_1",
      exam: "exam2",
      category: "precisio",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 3: Precisió lèxica (3.1)",
      instruction: "Trieu quina frase utilitza correctament el mot GABINET.",
      question: "Trieu l'oració correcta amb «gabinet»:",
      options: [
        "S'ha de portar el gabinet a esmolar.",
        "El canari s'ha escapat perquè s'ha deixat el gabinet obert.",
        "Va cada dia al gabinet de lectura."
      ],
      correctIndex: 2,
      explanation: "«Gabinet» és una habitació petita destinada a l'estudi o despatx privat (o conjunt de ministres). Per tallar és «ganivet», i per a ocells és «gàbia»."
    },
    {
      id: "ex2_tri_2",
      exam: "exam2",
      category: "precisio",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 3: Precisió lèxica (3.2)",
      instruction: "Trieu quina frase utilitza correctament el mot FONS.",
      question: "Trieu l'oració correcta amb «fons»:",
      options: [
        "Respira fons abans de començar.",
        "En el fons és una bona persona.",
        "Li va caure la pilota al pou i no la va poder recuperar perquè era molt fons."
      ],
      correctIndex: 1,
      explanation: "«En el fons» és la locució correcta ('en realitat, essencialment'). L'adjectiu o adverbi és «profund» («respira profundament», «el pou era molt profund»)."
    },
    {
      id: "ex2_tri_3",
      exam: "exam2",
      category: "precisio",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 3: Precisió lèxica (3.3)",
      instruction: "Trieu quina frase utilitza correctament la forma de CONFÓS.",
      question: "Trieu l'oració amb la forma correcta:",
      options: [
        "Aquest matí he confós les bessones.",
        "Tinc les idees confoses.",
        "Quina situació tan confosa!"
      ],
      correctIndex: 2,
      explanation: "L'adjectiu femení singular de confús/confusa és «confosa» («Quina situació tan confosa!»). En català el participi de confondre és «confós» (he confós), però com a adjectiu té 'confús, confusa, confusos, confuses'."
    },
    {
      id: "ex2_tri_4",
      exam: "exam2",
      category: "precisio",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 3: Precisió lèxica (3.4)",
      instruction: "Trieu el parònim adequat.",
      question: "Aquesta decisió serà en ________ de tots.",
      options: [
        "perjudici",
        "prejudici"
      ],
      correctIndex: 0,
      explanation: "«Perjudici» és dany material o moral («en perjudici de»). «Prejudici» és un judici preconcebut sense coneixement de causa."
    },
    {
      id: "ex2_tri_5",
      exam: "exam2",
      category: "precisio",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 3: Precisió lèxica (3.5)",
      instruction: "Trieu el verb adequat.",
      question: "Sempre ________ el pagament dels impostos i mai l’enxampen.",
      options: [
        "al·ludeix",
        "eludeix"
      ],
      correctIndex: 1,
      explanation: "«Eludir» significa esquivar, evitar o defugir amb habilitat. «Al·ludir» significa fer referència a alguna cosa."
    },
    {
      id: "ex2_tri_6",
      exam: "exam2",
      category: "precisio",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 3: Precisió lèxica (3.6)",
      instruction: "Trieu el terme adequat.",
      question: "Fa dies que està de baixa. No es troba bé i té una febre ________.",
      options: [
        "recorrent",
        "recurrent"
      ],
      correctIndex: 1,
      explanation: "«Recurrent» és l'adjectiu que indica que es repeteix periòdicament (medicina: febre recurrent). «Recorrent» és el gerundi del verb recórrer."
    },

    // EX2 - 4. Text amb buits (El cant de les balenes)
    {
      id: "ex2_cloze_1",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 1)",
      instruction: "Trieu l'opció correcta per a l'espai (1).",
      question: "«...després d’espiar-__(1)__ en diferents llocs del món...» (les balenes)",
      options: ["les-hi", "les", "los-hi"],
      correctIndex: 1,
      explanation: "Pronominalització de CD femení plural determinat (les balenes) darrere verb acabat en consonant/diftong: «espiar-les»."
    },
    {
      id: "ex2_cloze_2",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 2)",
      instruction: "Trieu l'opció correcta per a l'espai (2).",
      question: "«...gairebé tots els dofins i balenes dentades fan __(2)__ semblen espetecs i xiulets.»",
      options: ["el que", "que", "el qual"],
      correctIndex: 0,
      explanation: "«El que» és el relatiu amb antecedent no expressat que equival a 'allò que' en funció substantivada."
    },
    {
      id: "ex2_cloze_3",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 3)",
      instruction: "Trieu l'opció correcta per a l'espai (3).",
      question: "«...i __(3)__ també les polars, entonen cançons complexes...»",
      options: ["pot ser que", "és possible que", "potser"],
      correctIndex: 2,
      explanation: "«Potser» és l'adverbi de dubte ('tal vegada'). «Pot ser que» requeriria verb en subjuntiu darrere."
    },
    {
      id: "ex2_cloze_4",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 4)",
      instruction: "Trieu l'opció correcta per a l'espai (4).",
      question: "«...permeten que l’individu dominant __(4)__ la llista de cançons...»",
      options: ["triï", "triés", "triarà"],
      correctIndex: 0,
      explanation: "El verb principal és present («permeten que...»), per tant exigeix present de subjuntiu: «triï» (amb dièresi a la 'ï')."
    },
    {
      id: "ex2_cloze_5",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 5)",
      instruction: "Trieu l'opció correcta per a l'espai (5).",
      question: "«Però encara és un misteri __(5)__ i com les balenes emeten fragments...»",
      options: ["per què", "perquè", "per"],
      correctIndex: 0,
      explanation: "Interrogativa indirecta de causa: «per què» s'escriu separat i amb accent obert a la 'è'."
    },
    {
      id: "ex2_cloze_6",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 6)",
      instruction: "Trieu l'opció correcta per a l'espai (6).",
      question: "«...al llarg de centenars de quilòmetres __(6)__ milers d’animals.»",
      options: ["per", "amb", "per a"],
      correctIndex: 2,
      explanation: "Preposició de destinatari / finalitat davant substantiu: «per a milers d'animals»."
    },
    {
      id: "ex2_cloze_7",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 7)",
      instruction: "Trieu l'opció correcta per a l'espai (7).",
      question: "«__(7)__ queda clar per quin motiu els patrons musicals de les balenes amb gep...»",
      options: ["També", "Tampoc", "Ø"],
      correctIndex: 1,
      explanation: "«Tampoc» introdueix la continuació negativa de la incògnita anterior ('encara és un misteri... tampoc queda clar...')."
    },
    {
      id: "ex2_cloze_8",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 8)",
      instruction: "Trieu l'opció correcta per a l'espai (8).",
      question: "«...tenien __(8)__ èxit a l'hora d'aparellar-se que...»",
      options: ["tan", "tant", "molt"],
      correctIndex: 1,
      explanation: "Davant del substantiu 'èxit' cal el quantificador «tant» (tant èxit que...). «Tan» només s'usa davant adjectius o adverbis."
    },
    {
      id: "ex2_cloze_9",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 9)",
      instruction: "Trieu l'opció correcta per a l'espai (9).",
      question: "«...tenien tant èxit __(9)__ d’aparellar-se que van adquirir un avantatge...»",
      options: ["alhora", "per", "a l’hora"],
      correctIndex: 2,
      explanation: "«A l'hora de» significa 'en el moment de' (dues paraules). «Alhora» d'un sol mot vol dir 'al mateix temps'."
    },
    {
      id: "ex2_cloze_10",
      exam: "exam2",
      category: "cloze",
      type: "multiple_choice",
      title: "Nou Model C1 · Exercici 4: Text amb buits (Espai 10)",
      instruction: "Trieu l'opció correcta per a l'espai (10).",
      question: "«Tot plegat va donar __(10)__ resultat uns animals molt grossos...»",
      options: ["com a", "com", "per"],
      correctIndex: 0,
      explanation: "La construcció idiomàtica és «donar com a resultat» (expressant consideració o estatus de resultat)."
    },

    // EX2 - 5. Flexió (L'Eva és una reconeguda...)
    {
      id: "ex2_flex_1",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (1/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "L’Eva és una reconeguda {{BLANK}} (sociòleg)...",
      answers: ["sociòloga", "SOCIÒLOGA"],
      hint: "Femení singular de la professió acabada en -leg.",
      explanation: "Els substantius acabats en -leg fan el femení regular en -loga: «sociòloga»."
    },
    {
      id: "ex2_flex_2",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (2/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "Per les seves teories poc {{BLANK}} (ambigu)...",
      answers: ["ambigües", "AMBIGÜES"],
      hint: "Femení plural amb dièresi a la u per sonar davant la e.",
      explanation: "El femení plural d'«ambigu» és «ambigües» (amb dièresi a la 'ü' perquè la 'u' es pronuncia davant 'e')."
    },
    {
      id: "ex2_flex_3",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (3/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "Sobre les {{BLANK}} (raça) més estranyes del món.",
      answers: ["races", "RACES"],
      hint: "Plural femení de raça.",
      explanation: "El plural de raça canvia la ç a c davant e: «races»."
    },
    {
      id: "ex2_flex_4",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (4/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "Les publicacions que ha tret al mercat són uns {{BLANK}} (reflex) clars...",
      answers: ["reflexos", "REFLEXOS"],
      hint: "Plural masculí de paraula acabada en -x afegint -os.",
      explanation: "Els mots masculins acabats en -x afegixen -os en plural: «reflexos»."
    },
    {
      id: "ex2_flex_5",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (5/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "Del caràcter obert d’aquesta {{BLANK}} (cèlebre) mestra.",
      answers: ["cèlebre", "CÈLEBRE"],
      hint: "Adjectiu invariable pel que fa al gènere.",
      explanation: "«Cèlebre» és un adjectiu d'una sola terminació per al masculí i femení singular."
    },
    {
      id: "ex2_flex_6",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (6/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "De petita era una nena exemplar i sempre {{BLANK}} (complaure) els que l’envoltaven.",
      answers: ["complaïa", "COMPLAÏA"],
      hint: "Pretèrit imperfet d'indicatiu de complaure amb dièresi.",
      explanation: "L'imperfet d'indicatiu de complaure és «complaïa» (la i porta dièresi per marcar l'hiat)."
    },
    {
      id: "ex2_flex_7",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (7/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "Era més alegre que unes {{BLANK}} (Pasqua)!",
      answers: ["pasqües", "PASQÜES"],
      hint: "Frase feta en plural amb dièresi a la u.",
      explanation: "«Més alegre que unes pasqües»: el plural de Pasqua canvia 'qua' per 'qüe', amb dièresi sobre la ü."
    },
    {
      id: "ex2_flex_8",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (8/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "Va presentar un estudi sobre el comportament d’una {{BLANK}} (llop) del zoo.",
      answers: ["lloba", "LLOBA"],
      hint: "Femení de llop.",
      explanation: "El femení de llop és «lloba»."
    },
    {
      id: "ex2_flex_9",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (9/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "I com que era molt {{BLANK}} (prudent), s’amagava pertot arreu...",
      answers: ["prudent", "PRUDENT"],
      hint: "Adjectiu femení d'una sola terminació.",
      explanation: "«Prudent» és un adjectiu d'una sola terminació tant per al masculí com per al femení singular."
    },
    {
      id: "ex2_flex_10",
      exam: "exam2",
      category: "flexio",
      type: "fill_in",
      title: "Nou Model C1 · Exercici 5: Flexió (10/10)",
      instruction: "Completeu l'espai buit mitjançant la flexió de la paraula entre parèntesis.",
      contextText: "L’Eva va dir: «-Jo, aquí, no hi {{BLANK}} (cabre)!»",
      answers: ["cabo", "quepo", "CABO"],
      hint: "1a persona singular del present d'indicatiu del verb cabre.",
      explanation: "La 1a persona singular del present d'indicatiu de «cabre» és «jo cabo» (en balear també 'cap'). En cap cas 'quepo'."
    },

    // EX2 - 6. Transformació d'oracions
    {
      id: "ex2_trans_1",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (1/10)",
      instruction: "Completeu els espais de la segona oració (separeu-los amb una coma: ex. pot ser, hi hagi).",
      originalSentence: "1.a. Aquest vespre potser hi haurà més gent a l’exposició.",
      promptTemplate: "1.b. Aquest vespre {{BLANK1}} que {{BLANK2}} més gent a l’exposició.",
      answers: ["pot ser, hi hagi", "pot ser / hi hagi", "pot ser, hagi", "pot ser que hi hagi"],
      hint: "Perífrasi de probabilitat 'pot ser' + subjuntiu del verb haver-hi.",
      explanation: "Equivalència entre l'adverbi 'potser' i l'expressió verbal «pot ser que» + subjuntiu «hi hagi»."
    },
    {
      id: "ex2_trans_2",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (2/10)",
      instruction: "Completeu la segona oració de manera que tingui el mateix sentit.",
      originalSentence: "2.a. Sempre vaig al cinema amb un amic, però avui està malalt.",
      promptTemplate: "2.b. L’amic {{BLANK}} sempre vaig al cinema, avui està malalt.",
      answers: ["amb qui", "amb el qual"],
      hint: "Relatiu preposicional referit a persona.",
      explanation: "Preposició 'amb' + relatiu de persona «amb qui» o el compost «amb el qual»."
    },
    {
      id: "ex2_trans_3",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (3/10)",
      instruction: "Completeu els dos espais (escriviu les dues respostes separades per coma, ex: hagués, hi hauria).",
      originalSentence: "3.a. No tinc temps d’anar al gimnàs perquè tinc molta feina.",
      promptTemplate: "3.b. Si {{BLANK1}} fet la feina abans, {{BLANK2}} pogut anar.",
      answers: ["hagués, hi hauria", "hagués / hi hauria", "hagués, hauria", "hagues, hi hauria"],
      hint: "Condicional de passat irreal: plusquamperfet de subjuntiu + condicional compost.",
      explanation: "«Si hagués fet la feina abans, hi hauria pogut anar» (cal incloure el pronom locatiu «hi» per al gimnàs)."
    },
    {
      id: "ex2_trans_4",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (4/10)",
      instruction: "Completeu la frase en estil indirecte.",
      originalSentence: "4.a. El Pep va dir al Joan: «Demà anirem a veure el partit de bàsquet?».",
      promptTemplate: "4.b. El Pep va preguntar al Joan {{BLANK}}.",
      answers: [
        "si l'endemà anirien a veure el partit de bàsquet",
        "si l’endemà anirien a veure el partit de bàsquet",
        "si l'endemà anirien a veure el partit de basquet"
      ],
      hint: "Interrogativa indirecta: conjunció 'si' + 'l'endemà' (demà en passat) + verb en condicional 'anirien'.",
      explanation: "Passatge a l'estil indirecte: 'demà' -> 'l'endemà', 'anirem' -> condicional 'anirien': «si l'endemà anirien a veure el partit de bàsquet»."
    },
    {
      id: "ex2_trans_5",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (5/10)",
      instruction: "Completeu la segona oració amb els pronoms adequats.",
      originalSentence: "5.a. El Miquel m’ha trucat perquè s’ha deixat les claus de casa.",
      promptTemplate: "5.b. D’aquí una estona passaré per la seva feina i {{BLANK}} portaré.",
      answers: ["les hi", "les-hi"],
      hint: "CD femení plural determinat (les claus) + CI de 3a persona singular (al Miquel).",
      explanation: "La combinació normativa de CD determinat femení plural (les) + CI 3a persona (li -> hi) és «les hi» (o 'les-hi' si va darrere verb acabat en consonant)."
    },
    {
      id: "ex2_trans_6",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (6/10)",
      instruction: "Completeu els espais buits (separats per coma: connector, verb).",
      originalSentence: "6.a. Tot i que li fa mal el genoll, ha decidit que anirà a esquiar.",
      promptTemplate: "6.b. Ha decidit que anirà a esquiar {{BLANK1}} li {{BLANK2}} mal el genoll.",
      answers: ["encara que, faci", "encara que / faci", "malgrat que, faci"],
      hint: "Connector concessiu + verb fer en present de subjuntiu.",
      explanation: "Substitució de 'tot i que' per «encara que» + subjuntiu «faci»."
    },
    {
      id: "ex2_trans_7",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (7/10)",
      instruction: "Completeu els espais (connector de relatiu neutre, verb en subjuntiu).",
      originalSentence: "7.a. Com que no van respondre totes les preguntes, l’enquesta no era vàlida.",
      promptTemplate: "7.b. No van respondre totes les preguntes, {{BLANK1}} va provocar que l’enquesta no {{BLANK2}} vàlida.",
      answers: [
        "cosa que, fos",
        "fet que, fos",
        "la qual cosa, fos",
        "cosa que / fos",
        "la qual cosa / fos"
      ],
      hint: "Relatiu que reprèn tota l'oració anterior + imperfet de subjuntiu de ser.",
      explanation: "Relatius oracionals neutres correctes: «cosa que», «fet que» o «la qual cosa» + «fos»."
    },
    {
      id: "ex2_trans_8",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (8/10)",
      instruction: "Completeu amb l'imperatiu en estil directe.",
      originalSentence: "8.a. La Dolors ha dit als convidats que encenguin la calefacció perquè fa molt fred.",
      promptTemplate: "8.b. La Dolors ha dit als seus convidats: «Si teniu fred, {{BLANK}} la calefacció».",
      answers: ["enceneu", "ENCENEU"],
      hint: "Imperatiu de 2a persona del plural (vosaltres) del verb encendre.",
      explanation: "L'imperatiu de 2a persona del plural de «encendre» és «enceneu» (sense accent)."
    },
    {
      id: "ex2_trans_9",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (9/10)",
      instruction: "Completeu els dos espais de la condicional (separats per coma: imperfet subjuntiu, condicional).",
      originalSentence: "9.a. Per poder guanyar la cursa, has de córrer més.",
      promptTemplate: "9.b. Si {{BLANK1}} més, {{BLANK2}} la cursa.",
      answers: ["correguessis, guanyaries", "correguessis / guanyaries", "correguéssiu, guanyaríeu"],
      hint: "Verb córrer en imperfet de subjuntiu i guanyar en condicional simple.",
      explanation: "Oració condicional de possibilitat: «Si correguessis més, guanyaries la cursa»."
    },
    {
      id: "ex2_trans_10",
      exam: "exam2",
      category: "transformacio",
      type: "sentence_transform",
      title: "Nou Model C1 · Exercici 6: Transformació d'oracions (10/10)",
      instruction: "Completeu amb un connector adversatiu o concessiu adient.",
      originalSentence: "10.a. M’agraden molts els pastissos, però durant un temps no en menjaré perquè he de perdre alguns quilos.",
      promptTemplate: "10.b. M’agraden molt els pastissos, {{BLANK}}, durant un temps no en menjaré perquè he de perdre alguns quilos.",
      answers: ["tanmateix", "tot i així", "nogensmenys", "així i tot"],
      hint: "Connector oracional adversatiu com 'tanmateix' o 'tot i així'.",
      explanation: "Connectors adversatius formals entre comes: «tanmateix», «tot i així», «nogensmenys»."
    },

    // =========================================================================
    // COMPRENSIÓ LECTORA: "El sucre de la fruita: perjudicial o saludable?"
    // =========================================================================
    {
      id: "comp_1",
      exam: "exam2",
      category: "comprensio",
      type: "multiple_choice",
      title: "Comprensió Lectora C1 · Pregunta 1",
      instruction: "Llegiu el text del dossier i responeu la pregunta correcta.",
      question: "Segons el text, quina distinció fonamental fa l'OMS respecte als sucres?",
      options: [
        "Distingeix entre el sucre de la fruita seca i el de la fruita fresca.",
        "Distingeix entre els sucres intrínsecs de la matriu alimentària i els sucres afegits.",
        "Recomana no consumir més de 25 grams de fruita al dia a causa del sucre.",
        "Considera que tots els sucres actuen igual un cop ingerits per l'organisme."
      ],
      correctIndex: 1,
      explanation: "El text especifica clarament que l'OMS distingeix entre els sucres que formen part natural de la matriu alimentària i els sucres afegits; el límit de 25 g no s'aplica a la fruita sencera."
    },
    {
      id: "comp_2",
      exam: "exam2",
      category: "comprensio",
      type: "multiple_choice",
      title: "Comprensió Lectora C1 · Pregunta 2",
      instruction: "Respon segons el text d'Adam Martin.",
      question: "Per quin motiu el consum de fruita no s'associa a l'obesitat sinó a la seva prevenció?",
      options: [
        "Perquè té un fort efecte saciant per la fibra i aigua, evitant picar aliments molt calòrics.",
        "Perquè les proteases eliminen completament totes les calories dels àpats.",
        "Perquè la fructosa accelera el metabolisme durant les hores de son nocturn.",
        "Perquè destrueix els sucres lliures del torrent sanguini."
      ],
      correctIndex: 0,
      explanation: "El text explica que té baixa densitat calòrica, és rica en fibra i aigua i té un efecte saciant que manté la gana a ratlla."
    },
    {
      id: "comp_3",
      exam: "exam2",
      category: "comprensio",
      type: "multiple_choice",
      title: "Comprensió Lectora C1 · Pregunta 3",
      instruction: "Trieu l'opció que recull millor la informació del text.",
      question: "Què passa quan consumim la fruita en forma de suc?",
      options: [
        "Es mantenen totes les propietats protectores i la digestió és més ràpida.",
        "Es trenca la matriu alimentària i els sucres intrínsecs esdevenen sucres lliures.",
        "És sempre perjudicial, fins i tot per als esportistes d'alt rendiment.",
        "El contingut d'enzims proteolítics es multiplica de forma sobtada."
      ],
      correctIndex: 1,
      explanation: "En fer suc, 'ens carreguem la matriu alimentària i els sucres intrínsecs de l'aliment es converteixen en sucres lliures'."
    },
    {
      id: "comp_4",
      exam: "exam2",
      category: "comprensio",
      type: "multiple_choice",
      title: "Comprensió Lectora C1 · Pregunta 4",
      instruction: "Segons l'evidència científica que exposa l'autor:",
      question: "Quina és la realitat sobre menjar fruita a la nit o com a postres?",
      options: [
        "Està demostrat que la fruita per postres frena la digestió per acumulació de gasos.",
        "Menjar fruita abans d'anar a dormir provoca trastorns de son severs.",
        "Són mites sense base científica sòlida; es pot prendre fruita a qualsevol hora.",
        "La cronobiologia aconsella prohibir els hidrats de carboni a partir de les 18 h."
      ],
      correctIndex: 2,
      explanation: "El text desmenteix aquests rumors indicant que no tenen cap fonament científic i que es pot prendre en qualsevol moment del dia."
    },

    // =========================================================================
    // BANC EXTRA TEMÀTIC: DERIVACIÓ I AFIXACIÓ C1 (10 noves)
    // =========================================================================
    {
      id: "extra_der_1",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Lèxic culte",
      instruction: "Completeu amb la paraula derivada de la que hi ha entre parèntesis.",
      contextText: "L'augment continu dels preus ha provocat un fort {{BLANK}} (EMPOBRIR) de la població.",
      answers: ["empobriment", "EMPOBRIMENT"],
      hint: "Substantiu derivat amb el sufix -ment.",
      explanation: "D'«empobrir» deriva «empobriment» (acció o efecte d'empobrir)."
    },
    {
      id: "extra_der_2",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Adjectiu en -ble",
      instruction: "Completeu amb la paraula derivada.",
      contextText: "Un text tan antic és pràcticament {{BLANK}} (DESXIFRAR) sense l'ajuda d'un especialista.",
      answers: ["indesxifrable", "desxifrable", "INDESXIFRABLE"],
      hint: "Adjectiu amb prefix negatiu in- i sufix -ble que no es pot desxifrar.",
      explanation: "«Indesxifrable» s'aplica a allò que no pot ser desxifrat o interpretat."
    },
    {
      id: "extra_der_3",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Sufixos d'agent i professió",
      instruction: "Completeu amb la paraula derivada.",
      contextText: "El prestigiós {{BLANK}} (DISSENY) ha presentat la nova col·lecció a París.",
      answers: ["dissenyador", "DISSENYADOR"],
      hint: "Persona que es dedica al disseny.",
      explanation: "«Dissenyador» / «dissenyadora» amb el sufix d'ofici -dor."
    },
    {
      id: "extra_der_4",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Qualitats abstractes",
      instruction: "Completeu amb la paraula derivada.",
      contextText: "L'actuació de l'àrbitre va destacar per la seva gran {{BLANK}} (PARCIAL) i rigor.",
      answers: ["imparcialitat", "IMPARCIALITAT"],
      hint: "Condició de qui no pren partit per ningú (prefix im- + sufix -itat).",
      explanation: "D'«imparcial» deriva «imparcialitat» (qualitat de ser just i neutral)."
    },
    {
      id: "extra_der_5",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Verbs en -itzar",
      instruction: "Completeu amb la forma verbal derivada.",
      contextText: "Cal {{BLANK}} (MODERN) les instal·lacions escolars com més aviat millor.",
      answers: ["modernitzar", "MODERNITZAR"],
      hint: "Infinitiu amb el sufix causatiu -itzar.",
      explanation: "De «modern» deriva el verb «modernitzar»."
    },
    {
      id: "extra_der_6",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Canvi de categoria",
      instruction: "Completeu amb la paraula derivada.",
      contextText: "La seva {{BLANK}} (NEGIGIR) va causar danys irreparables als arxius.",
      answers: ["negligència", "negligencia", "NEGLIGÈNCIA"],
      hint: "Substantiu femení amb accent obert sobre la e.",
      explanation: "Del verb «negligir» deriva el substantiu femení «negligència»."
    },
    {
      id: "extra_der_7",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Adjectius en -ós",
      instruction: "Completeu amb la paraula derivada.",
      contextText: "Aquest camí de muntanya és extremament {{BLANK}} (PERILL) amb pluja.",
      answers: ["perillós", "PERILLÓS"],
      hint: "Adjectiu masculí acabat en -ós amb accent agut.",
      explanation: "De «perill» deriva l'adjectiu «perillós»."
    },
    {
      id: "extra_der_8",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Adverbis en -ment",
      instruction: "Completeu amb l'adverbi de manera derivat.",
      contextText: "Va contestar {{BLANK}} (ESPONTANI) a totes les preguntes del tribunal.",
      answers: ["espontàniament", "ESPONTÀNIAMENT"],
      hint: "Femení de l'adjectiu + -ment, conservant l'accent gràfic de l'adjectiu.",
      explanation: "«Espontàniament» manté l'accent gràfic de la base femenina 'espontània'."
    },
    {
      id: "extra_der_9",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Substantivació",
      instruction: "Completeu amb la paraula derivada.",
      contextText: "La ràpida {{BLANK}} (DISSOLDRE) del parlament va sorprendre els ciutadans.",
      answers: ["dissolució", "dissolucio", "DISSOLUCIÓ"],
      hint: "Substantiu acabat en -ció amb accent agut.",
      explanation: "De «dissoldre» deriva «dissolució»."
    },
    {
      id: "extra_der_10",
      exam: "extra",
      category: "derivacio",
      type: "fill_in",
      title: "Derivació C1 · Sufixos diminutius/pejoratius",
      instruction: "Completeu amb la paraula derivada.",
      contextText: "Vivien en un petit {{BLANK}} (POBLE) aïllat a la vall.",
      answers: ["poblet", "POBLET"],
      hint: "Diminutiu tradicional de poble.",
      explanation: "El diminutiu genuí i habitual és «poblet»."
    },

    // =========================================================================
    // BANC EXTRA TEMÀTIC: FRASES FETES I LOCUCIONS C1 (10 noves)
    // =========================================================================
    {
      id: "extra_ff_1",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 1",
      instruction: "Trieu el significat correcte de l'expressió destacada.",
      question: "Què vol dir que algú «posa el dit a la llaga»?",
      options: [
        "Que fair mal físicament a una altra persona.",
        "Que assenyala amb franquesa el punt crític o més conflictiu d'un problema.",
        "Que no es preocupa gens per les dificultats dels altres.",
        "Que comet un error de càlcul greu."
      ],
      correctIndex: 1,
      explanation: "«Posar el dit a la llaga» és encertar o assenyalar directament la causa exacta o dolorosa d'un afer."
    },
    {
      id: "extra_ff_2",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 2",
      instruction: "Trieu el significat correcte.",
      question: "Si diem que un projecte «fa aigües», volem dir que...",
      options: [
        "està molt ben regat.",
        "mostra símptomes clars de feblesa o fallida imminent.",
        "és molt innovador i refrescant.",
        "ha estat aprovat per unanimitat."
      ],
      correctIndex: 1,
      explanation: "«Fer aigües» s'aplica a vaixells o construccions que s'enfonsen, i en sentit figurat a quelcom que amenaça ruïna o fracàs."
    },
    {
      id: "extra_ff_3",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 3",
      instruction: "Trieu el significat correcte.",
      question: "Què vol dir «ficar cullerada»?",
      options: [
        "Intervenir sense dret ni sol·licitud en la conversa o assumpte d'altri.",
        "Gastar tots els estalvis en un banquet.",
        "Menjar amb molta educació i respecte.",
        "Ajudar altruistament en un menjador social."
      ],
      correctIndex: 0,
      explanation: "«Ficar cullerada» és entremetre's de manera inoportuna en converses o assumptes aliens."
    },
    {
      id: "extra_ff_4",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 4",
      instruction: "Trieu el significat correcte.",
      question: "Quan algú «tira la tovallola» vol dir que...",
      options: [
        "va a la platja a descansar.",
        "es rendeix i abandona una lluita o intent.",
        "inicia un nou repte esportiu.",
        "neteja la seva reputació."
      ],
      correctIndex: 1,
      explanation: "«Tirar la tovallola» prové de la boxa i significa abandonar o donar-se per vençut."
    },
    {
      id: "extra_ff_5",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 5",
      instruction: "Trieu el significat correcte.",
      question: "Dir que algú «té la mà foradada» significa que...",
      options: [
        "és molt maldestre amb els treballs manuals.",
        "és extremament generós o malgastador amb els diners.",
        "ha sofert una ferida greu a la mà.",
        "enganya tothom en els jocs de cartes."
      ],
      correctIndex: 1,
      explanation: "«Tenir la mà foradada» s'aplica a la persona que no reté els diners i els malgasta fàcilment."
    },
    {
      id: "extra_ff_6",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 6",
      instruction: "Trieu el significat correcte.",
      question: "«No tocar quarts ni hores» s'aplica a qui...",
      options: [
        "no té rellotge de polsera.",
        "té el cap desorientat o diu despropòsits.",
        "arriba sempre tard a les reunions.",
        "treballa de nit."
      ],
      correctIndex: 1,
      explanation: "«No tocar quarts ni hores» vol dir no raonar adequadament, desvariar o estar confús."
    },
    {
      id: "extra_ff_7",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 7",
      instruction: "Trieu el significat correcte.",
      question: "«Pagar la festa» o «pagar els plats trencats» significa...",
      options: [
        "convidar tots els assistents a un sopar.",
        "rebre el càstig o les culpes d'una acció que no s'ha comès o no s'és l'únic culpable.",
        "substituir la vaixella deteriorada d'un restaurant.",
        "fer una donació econòmica voluntària."
      ],
      correctIndex: 1,
      explanation: "«Pagar els plats trencats» vol dir rebre les conseqüències negatives o el càstig d'una situació creada per altres."
    },
    {
      id: "extra_ff_8",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 8",
      instruction: "Trieu el significat correcte.",
      question: "«Ser un bocamoll» descriu una persona que...",
      options: [
        "té problemes d'articulació dental.",
        "és indiscreta i no sap guardar secrets.",
        "menja molt de pressa sense mastegar.",
        "parla sempre en veu molt baixa."
      ],
      correctIndex: 1,
      explanation: "«Bocamoll» és qui parla més del compte i revela secrets o intimitats alienes."
    },
    {
      id: "extra_ff_9",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 9",
      instruction: "Trieu el significat correcte.",
      question: "Si diem que un afer «no té ni cap ni peus», volem expressar que...",
      options: [
        "és completament absurd i mancat de sentit o lògica.",
        "és un ésser mitològic marí.",
        "és un problema que no té solució matemàtica.",
        "és un text sense títol ni signatura."
      ],
      correctIndex: 0,
      explanation: "«No tenir cap ni peus» indica manca absoluta de coherència, lògica o fonament."
    },
    {
      id: "extra_ff_10",
      exam: "extra",
      category: "frases_fetes",
      type: "multiple_choice",
      title: "Frases fetes C1 · Expressió 10",
      instruction: "Trieu el significat correcte.",
      question: "«Posar fil a l'agulla» significa...",
      options: [
        "començar a cosir una peça de roba.",
        "iniciar decididament una feina o projecte.",
        "preparar un examen amb molta por.",
        "anar a visitar el metge especialista."
      ],
      correctIndex: 1,
      explanation: "«Posar fil a l'agulla» és emprendre una tasca, començar a actuar per dur a terme una feina."
    },

    // =========================================================================
    // BANC EXTRA TEMÀTIC: PRECISIÓ LÈXICA I PARÒNIMS C1 (10 noves)
    // =========================================================================
    {
      id: "extra_prec_1",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Parònims",
      instruction: "Trieu l'opció correcta segons el context.",
      question: "El parlament ha celebrat una llarga ________ extraordinària.",
      options: ["sessió", "secció", "cessió"],
      correctIndex: 0,
      explanation: "«Sessió» és l'espai de temps dedicat a una reunió, conferència o assemblea. «Secció» és una divisió o part. «Cessió» és l'acció de cedir."
    },
    {
      id: "extra_prec_2",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Verbs sovint confosos",
      instruction: "Trieu la forma correcta.",
      question: "No ens vam ________ del perill fins que l'aigua ja arribava a la porta.",
      options: ["adonar", "adonar-se", "adonar-nos"],
      correctIndex: 2,
      explanation: "El verb és pronominal: «adonar-se de». En 1a persona del plural: «no ens vam adonar del perill»."
    },
    {
      id: "extra_prec_3",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Assenyalar vs Senyalar",
      instruction: "Trieu el verb adequat.",
      question: "El testimoni va ________ directament el sospitós entre la multitud.",
      options: ["assenyalar", "senyalar"],
      correctIndex: 0,
      explanation: "«Assenyalar» significa indicar amb el dit o fixar l'atenció. «Senyalar» és marcar amb un senyal físic (ex: marcar bestiar o fer una senyalada)."
    },
    {
      id: "extra_prec_4",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Doblets lèxics",
      instruction: "Trieu l'opció genuïna.",
      question: "Aquesta nova mesura tindrà un gran ________ en el sector turístic.",
      options: ["impacte", "impacto"],
      correctIndex: 0,
      explanation: "En català el mot correcte és «impacte» (acabat en -e)."
    },
    {
      id: "extra_prec_5",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Compliment vs Complimentar",
      instruction: "Trieu el mot adequat.",
      question: "Li va dedicar un bonic ________ pel seu discurs inaugural.",
      options: ["compliment", "cumpliment", "piropo"],
      correctIndex: 0,
      explanation: "En català «compliment» significa floreta, paraula d'elogi o cortesia (també execució d'un deure). 'Piropo' és un calc col·loquial forà."
    },
    {
      id: "extra_prec_6",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Barbarismes a evitar",
      instruction: "Trieu la frase que NO conté cap barbarisme.",
      question: "Quina de les opcions és la correcta?",
      options: [
        "Hi havia molt de tràfic a l'autopista.",
        "Hi havia molt de trànsit a l'autopista.",
        "Hi havia molt de tràfec vehicular a l'autopista."
      ],
      correctIndex: 1,
      explanation: "La circulació de vehicles és «trànsit». «Tràfic» és el comerç clandestí o il·legal (ex: tràfic d'armes/drogues)."
    },
    {
      id: "extra_prec_7",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Infecció vs Infestació",
      instruction: "Trieu el terme correcte.",
      question: "El camp de blat ha sofert una greu ________ de pugó.",
      options: ["infecció", "infestació"],
      correctIndex: 1,
      explanation: "«Infestació» és la invasió massiva per paràsits animals o insectes. «Infecció» és la invasió per microorganismes (bacteris, virus)."
    },
    {
      id: "extra_prec_8",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Revelar vs Rebel·lar",
      instruction: "Trieu l'ortografia correcta.",
      question: "L'antic espia no va voler ________ la identitat dels seus col·laboradors.",
      options: ["rebel·lar", "revelar"],
      correctIndex: 1,
      explanation: "«Revelar» (amb v) significa manifestar un secret o descodificar. «Rebel·lar-se» (amb b i l·l) significa sublevar-se contra l'autoritat."
    },
    {
      id: "extra_prec_9",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Desvetllar vs Despertar",
      instruction: "Trieu el verb precís.",
      question: "Aquesta troballa arqueològica ha ________ un gran interès internacional.",
      options: ["desvetllat", "despertat"],
      correctIndex: 0,
      explanation: "«Desvetllar interès» o «desvetllar curiositat» és l'ús culte i genuí per expressar suscitar atenció o recerca."
    },
    {
      id: "extra_prec_10",
      exam: "extra",
      category: "precisio",
      type: "multiple_choice",
      title: "Precisió lèxica C1 · Doblets i parònims",
      instruction: "Trieu la paraula adequada.",
      question: "Hem de protegir el medi ambient i reduir el ________ dels recursos naturals.",
      options: ["malbaratament", "desperdici"],
      correctIndex: 0,
      explanation: "«Malbaratament» (o malversació, balafiaments) és el mot genuí català. 'Desperdici' és un castellanisme a evitar al nivell C1."
    },

    // =========================================================================
    // BANC EXTRA TEMÀTIC: FLEXIÓ NOMINAL I VERBAL C1 (10 noves)
    // =========================================================================
    {
      id: "extra_flex_1",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Femenins especials",
      instruction: "Escriviu el femení de la paraula entre parèntesis.",
      contextText: "L'{{BLANK}} (HEROI) de la novel·la lluita per la llibertat del seu poble.",
      answers: ["heroïna", "heroina", "HEROÏNA"],
      hint: "Femení amb dièresi a la ï.",
      explanation: "El femení d'«heroi» és «heroïna» (porta dièresi per desfer el diftong)."
    },
    {
      id: "extra_flex_2",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Plurals en -os i -s",
      instruction: "Escriviu el plural masculí de la paraula entre parèntesis.",
      contextText: "En aquest arxiu guarden documents molt {{BLANK}} (ANTIC).",
      answers: ["antics", "ANTICS"],
      hint: "Plural afegint només -s.",
      explanation: "L'adjectiu «antic» fa el masculí plural en «antics» (no *antigos)."
    },
    {
      id: "extra_flex_3",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Verbs irregulars (Caldre)",
      instruction: "Completeu amb el temps adequat del verb caldre.",
      contextText: "Si plogués tant com diuen, {{BLANK}} (CALDRE) suspendre el partit.",
      answers: ["caldria", "CALDRIA"],
      hint: "Condicional simple 3a persona singular.",
      explanation: "Condicional de 'caldre': «caldria»."
    },
    {
      id: "extra_flex_4",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Verbs irregulars (Néixer)",
      instruction: "Completeu amb el participi del verb néixer.",
      contextText: "Els infants {{BLANK}} (NÉIXER) a l'estranger poden demanar la nacionalitat.",
      answers: ["nascuts", "NASCUTS"],
      hint: "Participi masculí plural.",
      explanation: "El participi de «néixer» és «nascut, nascuda, nascuts, nascudes»."
    },
    {
      id: "extra_flex_5",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Present de subjuntiu (Beure)",
      instruction: "Completeu amb la 1a persona del plural del present de subjuntiu.",
      contextText: "El metge aconsella que nosaltres {{BLANK}} (BEURE) dos litres d'aigua diaris.",
      answers: ["beguem", "BEGUEM"],
      hint: "1a persona del plural de subjuntiu.",
      explanation: "Subjuntiu de beure: jo begui, tu beguis, ell begui, nosaltres beguem, vosaltres begueu, ells beguin."
    },
    {
      id: "extra_flex_6",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Plurals en -sc, -st, -xt",
      instruction: "Escriviu el plural de la paraula entre parèntesis.",
      contextText: "Van pujar a tots els {{BLANK}} (GARRIST) del castell medieval.",
      answers: ["garristos", "garrosts", "GARRISTOS"],
      hint: "Els mots masculins en -st poden fer plural en -stos.",
      explanation: "La forma en -os per a mots en -st és regular i recomanada: «garristos» (o discs/discos, texts/textos)."
    },
    {
      id: "extra_flex_7",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Verbs en -eure (Seure)",
      instruction: "Completeu amb el present d'indicatiu 1a persona singular.",
      contextText: "Jo sempre em {{BLANK}} (SEURE) a la primera fila per veure-ho tot.",
      answers: ["sec", "seig", "SEC"],
      hint: "Forma curta irregular de 1a persona singular.",
      explanation: "Present d'indicatiu de seure: «jo sec» (o seig en algunes variants). La forma estàndard general és «jo sec»."
    },
    {
      id: "extra_flex_8",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Dièresis en formes verbals (Conduir)",
      instruction: "Completeu amb el pretèrit imperfet d'indicatiu (1a persona plural).",
      contextText: "Quan érem joves, nosaltres {{BLANK}} (CONDUIR) durant hores sense cansar-nos.",
      answers: ["conduíem", "conduiem", "CONDUÍEM"],
      hint: "Forma amb accent sobre la í per ser esdrúixola.",
      explanation: "Les persones 1a i 2a de plural de l'imperfet porten accent: «conduíem», «conduíeu» (la resta porta dièresi: conduïa, conduïes, etc.)."
    },
    {
      id: "extra_flex_9",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Femenins de títols (Metge / Jutge)",
      instruction: "Escriviu el femení del mot entre parèntesis.",
      contextText: "La prestigiosa {{BLANK}} (METGE) va intervenir amb èxit el pacient.",
      answers: ["metgessa", "metgessa", "METGESSA"],
      hint: "Femení acabat en -essa.",
      explanation: "El femení tradicional i normatiu de metge és «metgessa»."
    },
    {
      id: "extra_flex_10",
      exam: "extra",
      category: "flexio",
      type: "fill_in",
      title: "Flexió C1 · Verbs irregulars (Cloure)",
      instruction: "Completeu amb el participi masculí del verb cloure.",
      contextText: "Un cop {{BLANK}} (CLOURE) l'acte, tothom va passar al refrigeri.",
      answers: ["clos", "CLOS"],
      hint: "Participi masculí curt acabat en -s.",
      explanation: "El participi de «cloure» és «clos» (femení: closa)."
    },

    // =========================================================================
    // BANC EXTRA TEMÀTIC: TRANSFORMACIONS I PRONOMS FEBLES C1 (10 noves)
    // =========================================================================
    {
      id: "extra_trans_1",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Pronoms C1 · Combinació CI + CD determinat",
      instruction: "Substituïu els elements en majúscules per pronoms febles.",
      originalSentence: "Va regalar EL RAM DE FLORS (CD) A LA SEVA MARE (CI).",
      promptTemplate: "Va regalar-{{BLANK}} ahir a la tarda.",
      answers: ["l'hi", "l’hi"],
      hint: "CD masculí singular + CI de 3a persona singular.",
      explanation: "El ram de flors (l') + a la seva mare (hi): darrere infinitiu s'escriu amb guionet «regalar-l'hi»."
    },
    {
      id: "extra_trans_2",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Pronoms C1 · Combinació CI + CD indefinit/partitiu",
      instruction: "Substituïu els elements per la combinació de pronoms correcta.",
      originalSentence: "Ja he donat TRES POMETES (CD quantificat) AL NEN (CI).",
      promptTemplate: "Ja {{BLANK}} he donat tres.",
      answers: ["li'n", "li’n"],
      hint: "CI de 3a persona (li) + partitiu (en).",
      explanation: "A qui (li) + quantitat (en): la combinació és «li'n» («ja li'n he donat tres»)."
    },
    {
      id: "extra_trans_3",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Pronoms C1 · Pronom reflexiu + Pronom feble EN",
      instruction: "Completeu la frase amb la combinació correcta.",
      originalSentence: "Tots es van recordar DE LA DATA (CRV).",
      promptTemplate: "Tots {{BLANK}} van recordar.",
      answers: ["se'n", "se’n"],
      hint: "Pronom es + pronom en.",
      explanation: "Recordar-se de quelcom: es + en -> «se'n van recordar»."
    },
    {
      id: "extra_trans_4",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Pronoms C1 · Pronom HI (règim verbal)",
      instruction: "Substituïu el complement introduit per 'en' o 'a'.",
      originalSentence: "Pensa en el futur dels teus fills.",
      promptTemplate: "Pensa-{{BLANK}} sovint.",
      answers: ["hi", "HI"],
      hint: "Complement de règim introduït per 'en' substitueix per 'hi'.",
      explanation: "Pensar en quelcom se substitueix pel pronom feble «hi»: «pensa-hi»."
    },
    {
      id: "extra_trans_5",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Pronoms C1 · Combinació de 1a persona + partitiu",
      instruction: "Completeu amb la combinació correcta.",
      originalSentence: "Si tens caramels, dona caramels a mi.",
      promptTemplate: "Si tens caramels, dona-{{BLANK}} un parell.",
      answers: ["me'n", "me’n"],
      hint: "Dona a mi (me) + caramels (en).",
      explanation: "Darrere de l'imperatiu dona s'afegeix guionet: «dona-me'n»."
    },
    {
      id: "extra_trans_6",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Transformació C1 · Oració d'infinitiu a completiva",
      instruction: "Transformeu l'oració d'infinitiu en una subordinada amb subjuntiu.",
      originalSentence: "Us aconsellem de callar.",
      promptTemplate: "Us aconsellem que {{BLANK}}.",
      answers: ["calleu", "CALLEU"],
      hint: "Present de subjuntiu de vosaltres del verb callar.",
      explanation: "«Aconsellar que» + subjuntiu: «que calleu»."
    },
    {
      id: "extra_trans_7",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Transformació C1 · Causal a consecutiva",
      instruction: "Transformeu l'oració mantenint el significat.",
      originalSentence: "No vam sortir perquè feia un fred intens.",
      promptTemplate: "Feia tant de fred {{BLANK}} no vam sortir.",
      answers: ["que", "QUE"],
      hint: "Conjunció consecutiva de correlació tant... que.",
      explanation: "La correlació consecutiva en català és «tant... que» (no pas *tant... com)."
    },
    {
      id: "extra_trans_8",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Transformació C1 · Relatiu compost neutre",
      instruction: "Completeu amb la forma normativa correcta (dues paraules).",
      originalSentence: "Va suspendre l'examen, i aquest fet el va desanimar molt.",
      promptTemplate: "Va suspendre l'examen, {{BLANK}} el va desanimar molt.",
      answers: ["cosa que", "fet que", "la qual cosa"],
      hint: "No useu mai *lo qual ni *lo que.",
      explanation: "En català no existeix *lo que ni *lo qual com a relatiu neutre oracional; cal dir «cosa que», «fet que» o «la qual cosa»."
    },
    {
      id: "extra_trans_9",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Pronoms C1 · Combinació CI plural de 3a persona",
      instruction: "Substituïu els elements per la combinació de pronoms correcta.",
      originalSentence: "Envieu aquests missatges (CD) ALS CLIENTS (CI).",
      promptTemplate: "Envieu-{{BLANK}} immediatament.",
      answers: ["los-els", "els els", "els-els", "los-el"],
      hint: "CD masculí plural (els) + CI plural (els/los).",
      explanation: "La combinació de CI plural (els) + CD masculí plural (els) és «els els» (o darrere imperatiu 'envieu-los-els' o 'envieu-los-el')."
    },
    {
      id: "extra_trans_10",
      exam: "extra",
      category: "transformacio",
      type: "sentence_transform",
      title: "Transformació C1 · Oració condicional",
      instruction: "Completeu la condicional de present irreal.",
      originalSentence: "No tinc el seu número i per això no li truco.",
      promptTemplate: "Si {{BLANK}} el seu número, li trucaria.",
      answers: ["tingués", "tingues"],
      hint: "Imperfet de subjuntiu de tenir amb accent agut.",
      explanation: "Condicional irreal de present: «Si tingués el seu número, li trucaria»."
    }
  ],

  // Textos llargs de comprensió / suport
  texts: {
    sucre_fruita: {
      title: "El sucre de la fruita: perjudicial o saludable?",
      author: "Adam Martin (ccma.cat)",
      content: `A tot el món consumim més calories que provenen de l'alcohol, que no pas dels aliments i, generalment, multipliquem per dos el límit recomanat de consum de sal diari. Cal destacar que el 40% de totes les calories que ingerim provenen, per acabar-ho d'arreglar, d'aliments ultraprocessats.

Però, curiosament, la fruita, que fa centenars de milers d'anys que ens acompanya i sembla que no ha tingut cap incidència negativa sobre la nostra salut, planteja dubtes a molta gent. Aquí intentarem resoldre’ls.

El sucre de la fruita és perjudicial?
Sempre que parlem de sucres, hem de tenir en compte la distinció que fa l'OMS entre sucres que formen part de manera natural d'un aliment i els sucres afegits. Quan un sucre forma part de la matriu alimentària, no ha de suposar cap problema. De fet, totes les recomanacions de l'OMS sobre consum de sucre (25 grams com a màxim al dia) no s'apliquen a aquest sucre.
A més, nombrosos estudis han demostrat que la fruita no només no és una causa directa d'obesitat sinó que el consum regular de fruites pot prevenir-la. De fet, un estudi de l'any 2015 relacionava directament l'increment de consum de fruita amb una disminució del pes i del perímetre de la cintura.

I la fructosa que conté tampoc engreixa?
En el cas de la fructosa que conté la fruita, nombrosos estudis conclouen que és una gran font d'energia i que consumida de forma moderada aporta grans beneficis a l'organisme. La que cal evitar és la que s’extreu de la fruita i s’incorpora a productes processats, com les begudes refrescants.

Per què és important introduir la fruita a la nostra dieta diària?
El primer motiu és perquè redueix la ingesta energètica total. És un aliment amb una baixa densitat calòrica però molt ric en nutrients. El seu efecte saciant manté la gana a ratlla i evita que piquem entre hores altres productes altament calòrics que sí que tenen relació directament amb l'obesitat.
També cal destacar que la fruita conté nutrients molt interessants. A banda de les vitamines i els minerals, hi trobem fibra i altres substàncies molt positives per a la digestió, però també per a la microbiota i per a tot el que s'inclou en l'ecologia intestinal.

La fruita provoca restrenyiment?
No hi ha cap estudi que doni suport al mite que la fruita restreny. De fet, el sentit comú ja ens diu que si un aliment conté aigua i és ric en fibra, com la fruita, si alguna cosa fa és millorar el funcionament del trànsit intestinal.

Fruita a la nit i insomni
Sovint hem sentit que si mengem fruita a la nit ens costarà dormir bé. Això tampoc té cap tipus d'evidència científica. Per tant, podem menjar fruita sense cap problema en qualsevol moment del dia.

És millor no menjar fruita per postres?
Sovint hem sentit que menjar fruita després de dinar o sopar entorpeix la digestió i que és millor menjar-la entre àpats. Aquesta afirmació tampoc no se sosté des de l'evidència científica: la majoria de fruites contenen enzims molt concrets, les proteases, que ens ajuden a digerir millor.

Quan cal evitar el consum de fruita?
El primer cas en què hem d'evitar prendre fruita és quan la convertim en un suc. Quan fem un suc ens carreguem la matriu alimentària i els sucres intrínsecs de l'aliment es converteixen en sucres lliures. Aquesta regla té excepcions: per exemple, per a les persones que estan practicant esport, prendre sucs pot ser fins i tot beneficiós.`
    }
  },

  // Diccionari de consulta ràpida de frases fetes i expressions
  idiomDictionary: [
    { expr: "Tocat del bolet", meaning: "Estar una mica boig o haver perdut el seny." },
    { expr: "Fotre's de lloros", meaning: "Caure de bocaterrosa o caure a terra estrepitosament." },
    { expr: "Enfilar-se per les parets", meaning: "Estar summament enfadat, irritat o fora de si." },
    { expr: "Haver begut oli", meaning: "Estar irremeiablement perdut, sense remei ni solució." },
    { expr: "Explicar sopars de duro", meaning: "Exagerar fets o contar mentides per presumir o impressionar." },
    { expr: "Demanar la lluna en un cove", meaning: "Demanar coses impossibles o inassolibles." },
    { expr: "Viure amb l'esquena dreta", meaning: "Viure còmodament sense haver de treballar." },
    { expr: "Fer l'ànec", meaning: "Morir, sucumbir." },
    { expr: "Ensenyar l'orella", meaning: "Delatar-se sense voler, deixar veure les intencions reals." },
    { expr: "Agafar el rave per les fulles", meaning: "Interpretar erròniament o maliciosament el que algú diu." },
    { expr: "Brams d'ase no pugen al cel", meaning: "No cal fer cas de les paraules ofensives o queixes de qui no té seny." },
    { expr: "Posar el dit a la llaga", meaning: "Assenyalar el punt més crític o conflictiu d'un problema." },
    { expr: "Fer aigües", meaning: "Mostrar símptomes evidents de feblesa, decaïment o ruïna." },
    { expr: "Ficar cullerada", meaning: "Intervenir inoportunament en converses o assumptes aliens." },
    { expr: "Tirar la tovallola", meaning: "Abandonar, rendir-se davant d'una dificultat." },
    { expr: "Tenir la mà foradada", meaning: "Ser malgastador, no saber retenir els diners." },
    { expr: "No tocar quarts ni hores", meaning: "Estar desorientat, perdre el fil o dir despropòsits." },
    { expr: "Pagar els plats trencats", meaning: "Rebre les conseqüències d'un mal causat per altres." },
    { expr: "Ser un bocamoll", meaning: "Ser una persona indiscreta que ho xerra tot." },
    { expr: "No tenir cap ni peus", meaning: "No tenir cap mena de lògica, sentit ni coherència." },
    { expr: "Posar fil a l'agulla", meaning: "Començar a treballar decididament en una tasca." }
  ],

  // =========================================================================
  // TASQUES D'EXPRESSIÓ ESCRITA OFICIALS (55 PUNTS DE L'EXAMEN)
  // =========================================================================
  writingTasks: [
    {
      id: "write_task_1_exam1",
      exam: "exam1",
      block: "Habilitats integrades 1 (30 punts)",
      title: "Tasca 1: Article d'opinió sobre la discriminació de la dona i violència masclista",
      role: "Sou professor/a de batxillerat de l’Escola Andorrana. Heu assistit a unes jornades sobre la discriminació de la dona. Després de parlar amb la directora sobre el que s’hi ha dit, us proposa que escriviu un article sobre aquest tema per publicar-lo a la revista del centre.",
      instruction: "Redacteu l'article que us demanen (d'unes 200 paraules) sobre la discriminació de la dona i la violència masclista en diferents societats. Heu de tenir en compte les dades i el contingut del material facilitat.",
      guidelines: [
        "1. Les prohibicions que hi ha en països com l'Aràbia Saudita (tutela masculina, restriccions de mobilitat).",
        "2. Els canvis a favor de la igualtat de gènere que s'estan produint en alguns països islàmics.",
        "3. La detecció dels primers signes de violència masclista i com es treballa la prevenció entre els joves."
      ],
      targetWords: 200,
      minWords: 180,
      maxWords: 230,
      sampleModel: `El camí cap a la plena igualtat: una assignatura pendent

Tot i els avenços innegables aconseguits les darreres dècades, la discriminació per raó de gènere continua sent una ferida oberta a escala global. Mentre que en societats teocràtiques com l'Aràbia Saudita les dones encara afronten restriccions severes lligades a la tutela masculina —la qual condiciona des de decisions patrimonials fins a la llibertat de moviments—, s'albiren tímidament algunes reformes institucionals que conviden a l'esperança en diversos països islàmics.

Tanmateix, la vulneració dels drets fonamentals de la dona no és un fenomen exclusiu de territoris llunyans; es manifesta també a les nostres aules i llars sota l'ombra esfereïdora de la violència masclista. Sovint, les primeres conductes abusives no comencen amb agressions físiques, sinó amb mecanismes subtils de control: fiscalitzar els missatges del telèfon mòbil, aïllar la parella del seu cercle d'amistats o desqualificar-ne les opinions.

Davant d'aquesta realitat insostenible, la comunitat educativa té el deure ineludible d'actuar com a dic de contenció. Cal dotar els nostres joves d'eines crítiques per reconèixer immediatament aquests patrons coercitius i fomentar relacions basades en el respecte mutu i la coresponsabilitat. Només així bastirem una societat lliure de violència.`
    },
    {
      id: "write_task_1_exam2",
      exam: "exam2",
      block: "Habilitats integrades 1 (30 punts)",
      title: "Tasca 1: Article de premsa sobre l'energia fotovoltaica a Andorra",
      role: "Treballeu al departament de comunicació de FEDA i, arran de l’augment d’energia fotovoltaica a Andorra, escriviu un article per publicar en un diari del país en el qual expliqueu en què consisteix la instal·lació i quina evolució ha tingut amb els anys aquest tipus d’energia.",
      instruction: "Redacteu el text que us demanen (d'unes 200 paraules). Enllaç de referència: Andorra Difusió - Generar energia a partir del reflex de la neu.",
      guidelines: [
        "1. Explicar la innovació tecnològica dels panells bifacials que aprofiten la llum directa i l'albedo (reflex de la neu).",
        "2. Detallar l'evolució de la capacitat instal·lada per FEDA i la transició cap a la sobirania energètica verda.",
        "3. Emfasitzar el compromís d'Andorra amb la mitigació del canvi climàtic als Pirineus."
      ],
      targetWords: 200,
      minWords: 180,
      maxWords: 230,
      sampleModel: `El reflex de la neu: l'aposta verda d'Andorra pel futur energètic

L'energia solar a alta muntanya ha deixat de ser una mera promesa teòrica per esdevenir un pilar estratègic del nostre model energètic. Des de FEDA, s'ha impulsat una transformació decidida mitjançant la instal·lació de panells solars bifacials de darrera generació. Aquests dispositius pioners no tan sols capten la radiació solar directa, sinó que aprofiten el fenomen de l'albedo: la radiació que reflecteix el mantell blanc de neu durant els mesos d'hivern, multiplicant substancialment el rendiment del parc.

Aquesta tecnologia capdavantera respon a la necessitat imperiosa de reduir la dependència exterior i caminar amb fermesa cap a la sobirania energètica sostenible. En el decurs dels darrers cinc anys, Andorra ha experimentat un creixement exponencial en la producció d'origen renovable, diversificant les fonts hidroelèctriques tradicionals amb el recurs net del sol pirinenc.

Lluny de conformar-nos amb els objectius assolits, continuarem expandint aquests projectes d'integració ambiental modèlica. La combinació d'innovació tecnològica i respecte pel patrimoni natural és, indubtablement, la via més eficaç per consolidar el nostre país com un referent de neutralitat de carboni.`
    },
    {
      id: "write_task_2_exam2",
      exam: "exam2",
      block: "Habilitats integrades 2 (25 punts)",
      title: "Tasca 2: Carta informativa de l'ACEA a la ciutadania sobre la celiaquia",
      role: "Andorra, a través de l’ACEA (Associació de Celíacs d’Andorra), s’adhereix a una campanya mundial sobre la celiaquia. Com a representant de l’Associació voleu donar a conèixer als ciutadans en què consisteix aquesta campanya.",
      instruction: "Escriviu una carta informativa que rebran tots els ciutadans del país, d’unes 150 paraules, en què expliqueu quina és la problemàtica de la celiaquia i quines activitats proposeu durant la campanya.",
      guidelines: [
        "1. Què és la celiaquia (intolerància al gluten/gliadina de blat, ordi, sègol, civada) i l'atròfia de les vellositats intestinals.",
        "2. Anunciar les Jornades 'Andorra sense gluten' al Centre cultural de la Llacuna (tallers, conferències d'experts).",
        "3. Crida a la conscienciació ciutadana i suport al col·lectiu celíac."
      ],
      targetWords: 150,
      minWords: 135,
      maxWords: 175,
      sampleModel: `Benvolguts ciutadans i ciutadanes,

Des de l'Associació de Celíacs d'Andorra (ACEA) ens adrecem a vosaltres amb motiu de la campanya mundial de sensibilització envers la celiaquia. Aquesta afecció d'origen immunològic i caràcter hereditari provoca una lesió greu a la mucosa de l'intestí prim com a reacció a la ingesta de gluten, una proteïna present en cereals tan comuns com el blat, l'ordi o el sègol. A hores d'ara, l'únic tractament eficaç consisteix a mantenir una dieta estricta sense gluten de per vida.

Per tal de donar veu a aquest col·lectiu i facilitar informació rigorosa, us convidem a les primeres jornades «Andorra sense gluten», que tindran lloc els dies 12, 13 i 14 de maig al Centre Cultural la Llacuna. El programa inclourà xerrades divulgatives a càrrec d'especialistes mèdics i demostracions culinàries d'alta gastronomia sense gluten.

Comptem amb la vostra presència per construir, plegats, un país més integrador i informat.

Cordialment,
L'equip de l'ACEA`
    },
    {
      id: "write_task_2_exam1",
      exam: "exam1",
      block: "Habilitats integrades 2 (25 punts)",
      title: "Tasca 2: Article d'opinió sobre el malbaratament alimentari",
      role: "Sou una persona que escriu articles d’opinió en una publicació del país. Arran del Dia internacional del malbaratament dels aliments i el nou reglament de Govern per a supermercats, decidiu donar la vostra opinió sobre el tema.",
      instruction: "Escriviu un article (d’unes 150 paraules) en què expliqueu què penseu sobre el malbaratament dels aliments i si s’està fent prou per poder-lo reduir.",
      guidelines: [
        "1. Context: 14% dels aliments mundials es perden segons la FAO.",
        "2. Mesura d'Andorra: espais obligatoris de descompte a supermercats de més de 1.200 m² abans de caducar.",
        "3. Posició crítica: cal anar més enllà dels grans supermercats i conscienciar el consumidor domèstic."
      ],
      targetWords: 150,
      minWords: 135,
      maxWords: 175,
      sampleModel: `Menjar llençat: una paradoxa inadmissible

Les xifres de l'Organització de les Nacions Unides per a l'Alimentació són esfereïdores: prop d'un catorze per cent de la producció mundial d'aliments es malmet abans d'arribar a taula. En un món colpit per la desigualtat, aquest balafiament sistemàtic representa tant un fracàs ètic com un atac directe a la sostenibilitat del planeta.

En aquest sentit, la recent normativa andorrana que obliga les grans superfícies a habilitar espais amb descomptes per a productes a punt de caducar és un pas endavant inqüestionable. Tanmateix, seria un error greu pensar que la solució recau únicament en els supermercats de més de mil dos-cents metres quadrats. 

Per assolir la reducció del cinquanta per cent fixada per al 2035, cal estendre aquestes exigències a la restauració col·lectiva i, sobretot, educar les llars. El malbaratament només s'aturarà si canviem la nostra cultura de consum.`
    }
  ],

  // =========================================================================
  // EXERCICI 7: CREACIÓ DE FRASES AMB ELEMENTS GRAMATICALS C1 (2 PUNTS)
  // =========================================================================
  sentenceCreationExercises: [
    {
      id: "sec7_1",
      exam: "exam1",
      element: "encara que",
      category: "Concessiu",
      rule: "Conjunció subordinant concessiva. Pot anar amb indicatiu (fets reals o constatats) o amb subjuntiu (hipòtesis o fets no verificats). No s'ha de confondre amb *tot i que* (que també és concessiu).",
      goodExample: "Encara que plogui a bots i barrals, sortirem a fer la travessa pels camins de muntanya.",
      wrongNote: "Eviteu combinar-la incorrectament amb *però* a la mateixa oració."
    },
    {
      id: "sec7_2",
      exam: "exam1",
      element: "l'hi",
      category: "Pronom feble combinat",
      rule: "Combinació binària del complement directe determinat masculí (el/l') + complement indirecte singular de 3a persona (li -> hi).",
      goodExample: "Si veus el responsable de l'expedient, dona-l'hi de seguida perquè el signi.",
      wrongNote: "Recordeu que *el li* no existeix en català normatiu; sempre és *l'hi*."
    },
    {
      id: "sec7_3",
      exam: "exam1",
      element: "probablement",
      category: "Adverbi d'incertesa/probabilitat",
      rule: "Adverbi que expressa probabilitat. A diferència de *pot ser que*, no exigeix que l'oració subordinada vagi necessàriament en subjuntiu.",
      goodExample: "Probablement la comissió aprovarà les noves ajudes econòmiques abans de final de mes.",
      wrongNote: "S'escriu amb *b* i acabat en *-ment*."
    },
    {
      id: "sec7_4",
      exam: "exam1",
      element: "tret de",
      category: "Locució preposicional d'excepció",
      rule: "Equival a *llevat de*, *fora de*, *a excepció de*. Introdueix un element que s'exclou d'una generalització.",
      goodExample: "Tots els membres del comitè van votar favorablement la moció, tret d'un regidor que es va abstenir.",
      wrongNote: "No s'ha d'usar el castellanisme *menys de* en sentit d'excepció."
    },
    {
      id: "sec7_5",
      exam: "exam1",
      element: "no obstant això",
      category: "Connector adversatiu oracional",
      rule: "Connector contraargumentatiu formal. Se sol escriure entre comes o després de punt i coma / punt.",
      goodExample: "Les previsions meteorològiques anunciaven nevades intenses; no obstant això, el pas fronterer va romandre obert.",
      wrongNote: "*No obstant* no s'ha d'usar com a conjunció directa amb *que* (*no obstant que és incorrecte; cal dir *no obstant això* o *malgrat que*)."
    },
    {
      id: "sec7_6",
      exam: "exam1",
      element: "d'ençà de",
      category: "Locució preposicional temporal",
      rule: "Indica l'inici d'un període temporal en el passat que continua fins al present ('des de'). Si va seguit d'oració, s'usa *d'ençà que*.",
      goodExample: "D'ençà de la implantació del nou reglament, els índexs de reciclatge s'han incrementat notablement.",
      wrongNote: "Porta apòstrof a *d'ençà* i ce trencada *ç*."
    },
    {
      id: "sec7_7",
      exam: "exam1",
      element: "se n'",
      category: "Pronom feble combinat",
      rule: "Pronom reflexiu de 3a persona (es/se) + pronom partitiu o preposicional (en/n').",
      goodExample: "Quan va adonar-se de la gravetat del seu error, se n'anà ràpidament sense dir res.",
      wrongNote: "Davant vocal el pronom *en* s'apostrofa: *se n'*."
    },
    {
      id: "sec7_8",
      exam: "exam1",
      element: "malgrat",
      category: "Preposició concessiva",
      rule: "Preposició que s'introdueix directament davant d'un substantiu o sintagma nominal (sense la preposició 'a'). Si introdueix oració amb verb en forma personal, cal afegir *que*: *malgrat que*.",
      goodExample: "Malgrat les constants advertències de la direcció, els treballadors no van suspendre la protesta.",
      wrongNote: "És incorrecte dir *malgrat a*."
    },
    {
      id: "sec7_9",
      exam: "exam1",
      element: "tot plegat",
      category: "Locució adverbial conclusiva",
      rule: "Significa 'en resum, considerades totes les coses conjuntament' o 'al capdavall'.",
      goodExample: "L'organització del festival ha costat molts esforços, però tot plegat ha resultat un èxit indiscutible.",
      wrongNote: "S'escriu separat en dues paraules."
    },
    {
      id: "sec7_10",
      exam: "exam1",
      element: "així doncs",
      category: "Connector consecutiu",
      rule: "Introdueix una conclusió lògica o conseqüència directa de tot el que s'ha exposat prèviament.",
      goodExample: "El pressupost disponible és limitat; així doncs, caldrà prioritzar les reformes més urgents.",
      wrongNote: "Se sol separar amb coma de la resta de la frase."
    },
    {
      id: "sec7_11",
      exam: "exam2",
      element: "tanmateix",
      category: "Connector adversatiu / concessiu",
      rule: "Connector formal d'oposició ('tot i així, amb tot, no obstant'). Se sol situar a principi de frase o entre comes.",
      goodExample: "El candidat no disposava d'experiència prèvia en el sector; tanmateix, va demostrar una preparació tècnica excel·lent.",
      wrongNote: "S'escriu en una sola paraula amb accent obert sobre la 'e'."
    },
    {
      id: "sec7_12",
      exam: "exam2",
      element: "què",
      category: "Pronom relatiu tònic",
      rule: "Pronom relatiu precedit de preposició feble (a, de, en, amb, per) referit a coses, o interrogatiu tònic. S'escriu amb accent obert a la 'è'.",
      goodExample: "El projecte en què treballem actualment compta amb el finançament de la Unió Europea.",
      wrongNote: "No el confongueu amb la conjunció àtona *que* (sense accent)."
    },
    {
      id: "sec7_13",
      exam: "exam2",
      element: "sinó",
      category: "Conjunció adversativa exclusiva",
      rule: "S'escriu junt quan contraposa una afirmació a una negació prèvia ('no volia te, sinó cafè'). Si és condicional ('si no vens...'), s'escriu separat en dues paraules.",
      goodExample: "L'objectiu principal de la jornada no és recaptar fons, sinó conscienciar la ciutadania.",
      wrongNote: "Comprovació: si es pot substituir per 'en cas contrari', s'escriu separat: *si no*."
    },
    {
      id: "sec7_14",
      exam: "exam2",
      element: "caldria que",
      category: "Perífrasi modal d'obligació/conveniència",
      rule: "Verb impersonal *caldre* en condicional simple + conjunció *que*. Exigeix que el verb de la subordinada vagi en subjuntiu.",
      goodExample: "Caldria que l'administració agilitzés els tràmits per a l'adjudicació dels habitatges públics.",
      wrongNote: "Exigeix sempre mode subjuntiu darrere (*caldria que vinguessis*, mai indicatiu)."
    },
    {
      id: "sec7_15",
      exam: "exam2",
      element: "si hagués vingut",
      category: "Estructura condicional irreal de passat",
      rule: "Conjunció *si* + plusquamperfet de subjuntiu. L'oració principal requereix condicional compost o plusquamperfet de subjuntiu.",
      goodExample: "Si hagués vingut a la reunió ahir, s'hauria assabentat dels canvis de personal.",
      wrongNote: "Mai no poseu condicional darrere la conjunció *si* (*si hauria vingut és incorrecte!)."
    },
    {
      id: "sec7_16",
      exam: "exam2",
      element: "pot ser",
      category: "Perífrasi verbal de possibilitat",
      rule: "Format pel verb *poder* en 3a persona singular + infinitiu *ser*. S'escriu separat en dues paraules. Sovint va seguit de la conjunció *que* + subjuntiu. (Diferent de l'adverbi *potser* en una sola paraula).",
      goodExample: "Aquest resultat pot ser el reflex d'una mala planificació econòmica.",
      wrongNote: "Si és una perífrasi equival a 'és possible': *Això pot ser veritat*. Si és l'adverbi ('tal vegada'), s'escriu junt: *Potser vindrà demà*."
    },
    {
      id: "sec7_17",
      exam: "exam2",
      element: "per a",
      category: "Preposició composta",
      rule: "S'utilitza per expressar destinació, destinatari, finalitat davant d'un substantiu o pronom, o límit temporal definit.",
      goodExample: "Hem preparat aquesta guia per als nous estudiants de batxillerat.",
      wrongNote: "Recordeu que davant infinitiu s'usa preferentment *per* quan expressa causa o motiu, i *per a* quan és clarament de finalitat/destinació en registres formals segons la normativa del DIEC/IEC."
    },
    {
      id: "sec7_18",
      exam: "exam2",
      element: "doncs",
      category: "Connector consecutiu / il·latiu",
      rule: "Indica conseqüència o continuació lògica ('per tant, en conseqüència'). MAI no s'ha d'usar amb valor causal en lloc de *perquè*, *ja que* o *com que*!",
      goodExample: "No disposaven de prou quòrum; doncs, van haver d'ajornar la votació fins a l'endemà.",
      wrongNote: "PROHIBIT EN C1 com a causal: no es pot dir *No he vingut doncs plovia*, cal dir *perquè plovia*."
    },
    {
      id: "sec7_19",
      exam: "exam2",
      element: "en lloc",
      category: "Locució adverbial o preposicional (en lloc de)",
      rule: "Equival a *en comptes de* o *en cap lloc*. S'escriu separat en dues paraules.",
      goodExample: "En lloc de criticar constantment les decisions preses, hauries de formular propostes constructives.",
      wrongNote: "S'escriu separat: *en lloc* (com a substantivació 'enlloc' d'una sola paraula és un adverbi indefinit de lloc que significa 'a cap lloc')."
    }
  ],

  // =========================================================================
  // GUIA I PAUTES DE LA PROVA ORAL C1 (25 PUNTS)
  // =========================================================================
  oralGuide: {
    duration: "40 minuts (20 minuts de preparació prèvia + 20 minuts d'exposició i interacció)",
    score: "25 punts (Llindar mínim per ser declarat APTE: 17,5 punts sobre 25 = 70%)",
    blocks: [
      {
        title: "Part 1: Monòleg / Exposició oral a partir d'un text (aprox. 5 minuts)",
        description: "Llegireu un text d'actualitat o opinió durant els 20 minuts de preparació i n'haureu de fer una exposició oral estructurada.",
        tips: [
          "Introducció breu (1 minut): Presenteu el tema del text i la tesi principal.",
          "Cos argumentatiu (3 minuts): Desenvolupeu almenys dos o tres arguments sòlids amb exemples de la vostra pròpia experiència o coneixement del context d'Andorra/societat.",
          "Conclusió (1 minut): Síntesi clara de la vostra postura final.",
          "Consell clau: No us limiteu a resumir el text; el tribunal avalua la vostra capacitat d'argumentació i matisació d'idees."
        ]
      },
      {
        title: "Part 2: Interacció i debat amb el tribunal (aprox. 7-10 minuts)",
        description: "L'examinador us formularà preguntes per aprofundir en el tema, contradir o matisar les vostres opinions.",
        tips: [
          "Manteniu la calma i escolteu la pregunta abans de contestar.",
          "Useu fórmules de cortesia i matís formal: «Des del meu punt de vista...», «Comprenc el que diu, tanmateix caldria considerar que...», «Si bé és cert que..., no podem obviar que...».",
          "Eviteu monosíl·labs ('sí' o 'no'). Justifiqueu sempre cada afirmació."
        ]
      }
    ],
    rubricCriteria: [
      { name: "Adequació i riquesa de registre", desc: "Ús d'un registre formal i acadèmic, sense col·loquialismes inadequats." },
      { name: "Varietat i precisió lèxica", desc: "Vocabulari ric, precís i variat. Absència de barbarismes o calcs lingüístics." },
      { name: "Correcció gramatical i cohesió", desc: "Estructures sintàctiques complexes (subordinació, connectors oracionals variats)." },
      { name: "Fluïdesa i fonètica", desc: "Pronúncia clara, entonació natural, respecte de les esses sordes i sonores, distinció vocàlica." }
    ],
    typicalMistakesToAvoid: [
      "Eviteu connectors col·loquials o castellanismes orals: *bueno*, *o sea*, *pues*, *entonces*, *vale*. Substituïu-los per: *és a dir*, *per tant*, *així doncs*, *d'acord*, *doncs bé*.",
      "No feu servir *doncs* amb valor de causa (*Vaig marxar doncs estava cansat -> INCORRECTE).",
      "Vigileu la concordança del verb haver-hi en plural (*Hi havien molts problemes -> INCORRECTE; cal dir *Hi havia molts problemes*).",
      "Eviteu l'ús de *lo que* o *lo qual* (*Això és lo que penso -> INCORRECTE; cal dir *Això és el que penso*)."
    ]
  }
};
