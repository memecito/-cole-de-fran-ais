// Temas de teoría para la sección "Estudiar". Basados en las fichas del
// cuaderno (img/), ampliados donde la ficha solo daba la forma "je"
// (conjugación completa de avoir/être, à l', marron invariable).
const TOPICS = [
  {
    id: "porter",
    emoji: "👕",
    title: "Verbo PORTER = llevar / llevar puesto",
    html: `
      <p><b>PORTER</b> es un verbo regular en <b>-ER</b>: quitas <b>-er</b> y añades las terminaciones.</p>
      <table>
        <thead><tr><th>Francés</th><th>Español</th></tr></thead>
        <tbody>
          <tr><td>Je <b>porte</b></td><td>Yo llevo</td></tr>
          <tr><td>Tu <b>portes</b></td><td>Tú llevas</td></tr>
          <tr><td>Il / Elle <b>porte</b></td><td>Él / Ella lleva</td></tr>
          <tr><td>Nous <b>portons</b></td><td>Nosotros llevamos</td></tr>
          <tr><td>Vous <b>portez</b></td><td>Vosotros lleváis / Usted lleva</td></tr>
          <tr><td>Ils / Elles <b>portent</b></td><td>Ellos / Ellas llevan</td></tr>
        </tbody>
      </table>
      <p>Terminaciones: <b>-e, -es, -e, -ons, -ez, -ent</b>.</p>
      <p>⚠️ <b>¡No confundas PORTER con PARLER (hablar)!</b> Es <b>p-O-R-t</b>: je p<b>or</b>te, nous p<b>or</b>tons.</p>
      <p>⚠️ <b>Ils portent</b>, no "portant". La <b>-ent</b> final no se pronuncia: <i>porte, portes</i> y <i>portent</i> suenan igual.</p>
      <p>Ejemplo: <i>Je porte un survêtement et des baskets.</i> = Llevo un chándal y unas zapatillas.</p>
    `
  },
  {
    id: "porterParler",
    emoji: "⚖️",
    title: "PORTER o PARLER — ¡no los confundas!",
    html: `
      <p>Se parecen mucho, pero significan cosas muy distintas:</p>
      <ul>
        <li><b>P<u>O</u>RTER</b> = llevar puesto → la <b>O</b> de r<b>O</b>pa 👕</li>
        <li><b>P<u>A</u>RLER</b> = hablar → la <b>A</b> de h<b>A</b>blar 🗣️</li>
      </ul>
      <p>Los dos son verbos en <b>-ER</b>, así que llevan <b>las mismas terminaciones</b>. Lo único que cambia es el principio: <b>port-</b> o <b>parl-</b>.</p>
      <table>
        <thead><tr><th></th><th>PORTER 👕</th><th>PARLER 🗣️</th></tr></thead>
        <tbody>
          <tr><td>je</td><td><b>port</b>e</td><td><b>parl</b>e</td></tr>
          <tr><td>tu</td><td><b>port</b>es</td><td><b>parl</b>es</td></tr>
          <tr><td>il / elle</td><td><b>port</b>e</td><td><b>parl</b>e</td></tr>
          <tr><td>nous</td><td><b>port</b>ons</td><td><b>parl</b>ons</td></tr>
          <tr><td>vous</td><td><b>port</b>ez</td><td><b>parl</b>ez</td></tr>
          <tr><td>ils / elles</td><td><b>port</b>ent</td><td><b>parl</b>ent</td></tr>
        </tbody>
      </table>
      <p>💡 ¿Cuál uso? Mira lo que viene después:</p>
      <ul>
        <li>Si viene <b>ropa</b> (un pull, des baskets, des lunettes…) → <b>PORTER</b>: <i>Je <b>porte</b> un jean.</i></li>
        <li>Si viene un <b>idioma</b> o <b>con quién</b> hablas (français, avec ma copine…) → <b>PARLER</b>: <i>Je <b>parle</b> français.</i></li>
      </ul>
      <p>⚠️ Ellos/ellas: <b>-ent</b> (portent, parlent), nunca "-ant".</p>
    `
  },
  {
    id: "avoirMal",
    emoji: "🤕",
    title: "Avoir mal à la / au / aux = tener dolor en",
    html: `
      <p><b>Où as-tu mal ?</b> = ¿Dónde te duele? &nbsp;·&nbsp; <b>Tu as mal où ?</b> (lo mismo)</p>
      <p>Se contesta con <b>AVOIR MAL</b> + <b>à</b> + la parte del cuerpo. El <b>à</b> cambia según el artículo:</p>
      <table>
        <thead><tr><th>Si la palabra es…</th><th>Se dice</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td>femenina (<i>la</i> main)</td><td><b>à la</b></td><td>J'ai mal <b>à la</b> main = me duele la mano</td></tr>
          <tr><td>masculina (<i>le</i> ventre)</td><td><b>au</b></td><td>J'ai mal <b>au</b> ventre = me duele el vientre</td></tr>
          <tr><td>plural (<i>les</i> pieds)</td><td><b>aux</b></td><td>J'ai mal <b>aux</b> pieds = me duelen los pies</td></tr>
          <tr><td>empieza por vocal (<i>l'</i>oreille)</td><td><b>à l'</b></td><td>J'ai mal <b>à l'</b>oreille = me duele la oreja</td></tr>
        </tbody>
      </table>
      <p>💡 Truco: <b>à + le = au</b> y <b>à + les = aux</b>. Nunca se dice "à le" ni "à les".</p>
      <h3>AVOIR (tener) en presente</h3>
      <table>
        <tbody>
          <tr><td>J'<b>ai</b> mal</td><td>Nous <b>avons</b> mal</td></tr>
          <tr><td>Tu <b>as</b> mal</td><td>Vous <b>avez</b> mal</td></tr>
          <tr><td>Il / Elle <b>a</b> mal</td><td>Ils / Elles <b>ont</b> mal</td></tr>
        </tbody>
      </table>
      <p>Para acertar, tienes que saber si la parte del cuerpo es <b>le</b> o <b>la</b> — repásalo en Vocabulario → Cuerpo.</p>
    `
  },
  {
    id: "avoirEtre",
    emoji: "🪞",
    title: "Comment es-tu ? — AVOIR o ÊTRE",
    html: `
      <p><b>Comment es-tu ?</b> = ¿Cómo eres?</p>
      <table>
        <thead><tr><th>Verbo</th><th>Para hablar de…</th><th>Ejemplo</th></tr></thead>
        <tbody>
          <tr><td><b>AVOIR</b> = tener</td><td>los ojos y el pelo<br>(<i>les yeux, les cheveux</i>)</td><td>J'<b>ai</b> les yeux marron = tengo los ojos marrones<br>J'<b>ai</b> les cheveux blonds = tengo el pelo rubio</td></tr>
          <tr><td><b>ÊTRE</b> = ser</td><td>la talla, el género y el carácter<br>(<i>la taille, le genre, le caractère</i>)</td><td>Je <b>suis</b> une fille = soy una niña<br>Je <b>suis</b> grande et robuste = soy alta y robusta</td></tr>
        </tbody>
      </table>
      <p>⚠️ Error típico: <s>Elle a grand</s> ❌ → <b>Elle est grande</b> ✅ (la altura va con ÊTRE).</p>
      <h3>Conjugación</h3>
      <table>
        <thead><tr><th>AVOIR</th><th>ÊTRE</th></tr></thead>
        <tbody>
          <tr><td>j'<b>ai</b></td><td>je <b>suis</b></td></tr>
          <tr><td>tu <b>as</b></td><td>tu <b>es</b></td></tr>
          <tr><td>il / elle <b>a</b></td><td>il / elle <b>est</b></td></tr>
          <tr><td>nous <b>avons</b></td><td>nous <b>sommes</b></td></tr>
          <tr><td>vous <b>avez</b></td><td>vous <b>êtes</b></td></tr>
          <tr><td>ils / elles <b>ont</b></td><td>ils / elles <b>sont</b></td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "adjectifs",
    emoji: "♀️",
    title: "Adjetivos: masculino, femenino y plural",
    html: `
      <p>En francés el adjetivo cambia si hablamos de un chico o de una chica.</p>
      <table>
        <thead><tr><th>Regla</th><th>Masculino</th><th>Femenino</th></tr></thead>
        <tbody>
          <tr><td>Normal: + <b>e</b></td><td>grand, petit, moyen*, méchant, gai</td><td>grand<b>e</b>, petit<b>e</b>, moyen<b>ne</b>, méchant<b>e</b>, gai<b>e</b></td></tr>
          <tr><td>-eux → <b>-euse</b></td><td>sérieux, nerveux, heureux, malheureux</td><td>sérieu<b>se</b>, nerveu<b>se</b>, heureu<b>se</b>, malheureu<b>se</b></td></tr>
          <tr><td>-il → <b>-ille</b></td><td>gentil</td><td>gentil<b>le</b></td></tr>
          <tr><td>Ya acaba en -e: <b>no cambia</b></td><td colspan="2">timide, calme, drôle, mince, robuste, triste, sociable, agréable, romantique, sympathique, antipathique</td></tr>
          <tr><td><b>No cambia</b></td><td colspan="2">sympa</td></tr>
        </tbody>
      </table>
      <p>* moyen → moyen<b>ne</b> (dobla la n).</p>
      <h3>Plural: los ojos y el pelo</h3>
      <p><i>Les yeux</i> y <i>les cheveux</i> son plurales, así que el color lleva <b>-s</b>:</p>
      <p>les yeux bleu<b>s</b>, les yeux vert<b>s</b> · les cheveux blond<b>s</b>, court<b>s</b>, long<b>s</b>, brun<b>s</b>, châtain<b>s</b>, raide<b>s</b></p>
      <p>⚠️ <b>marron</b> no cambia nunca: <b>les yeux marron</b> (sin -s).</p>
    `
  },
  {
    id: "decris",
    emoji: "🧑‍🤝‍🧑",
    title: "Décris ton collègue — modelo de descripción",
    html: `
      <p>Para describir a un compañero o compañera, sigue este orden: <b>nombre → género → talla → ojos y pelo → carácter → ropa</b>.</p>
      <p><b>mon</b> collègue (chico) · <b>ma</b> collègue (chica) &nbsp;—&nbsp; <b>ton / ta</b> = tu</p>
      <h3>Modelo (chica)</h3>
      <p><i><b>Ma</b> collègue s'appelle Inés. C'<b>est</b> une fille. Elle <b>est</b> grand<b>e</b> et mince. Elle <b>a</b> les cheveux longs et châtains et les yeux marron. Elle <b>est</b> sympa, drôle et gentil<b>le</b>. Elle <b>porte</b> un jean, un sweat à capuche et des baskets.</i></p>
      <h3>Modelo (chico)</h3>
      <p><i><b>Mon</b> collègue s'appelle Hugo. C'<b>est</b> un garçon. Il <b>est</b> petit et robuste. Il <b>a</b> les cheveux courts et bruns et les yeux bleus. Il <b>est</b> calme et un peu timide. Il <b>porte</b> un survêtement et des lunettes.</i></p>
      <p>✅ Comprueba: ¿talla con <b>est</b>? ¿ojos y pelo con <b>a</b>? ¿adjetivo en femenino si es chica?</p>
    `
  },
];
