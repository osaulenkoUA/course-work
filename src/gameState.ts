import { IGameState } from "./foo";

export const gameStates: IGameState[] = [
  {
    id: 0,
    text: `
    Ви прокидаєтесь посеред лісу зі світлом проникаючим крізь густі гілля. 
    Довкола вас повний тиші, і ви не пам'ятаєте, як сюди потрапили. 
    Ви розумієте, що ваша мета - вибратися з цього лісу.
    Перед Вами є декілька предметів, але Ви можете зяти тільки один. Який Оберете?
    `,
    options: [
      { text: "Глечик Меду", nextId: 1, state: "honey" },
      { text: "Бінокль", nextId: 1, state: "binoculars" },
      { text: "Мотузку", nextId: 1, state: "rope" },
    ],
  },
  {
    id: 101,
    text: `Ви знаєте, що програш - це лише тимчасова перешкода на вашому шляху до успіху,
          і ви готові піднятися знову і продовжити свою подорож.
          Ви готові до нової спроби. Нехай ваша наступна подорож буде повна пригод та незабутніх моментів!
          Тепер ви готові розпочати заново і зробити новий вибір.  `,
    options: [{ text: "Спробувати Знову", nextId: 0 }],
  },
  {
    id: 201,
    text: `Вітаю Ви Виграли!!!! `,
    options: [{ text: "Зіграти ще раз?", nextId: 0 }],
  },
  {
    id: 1,
    text: `
    Супер! Ви вибрали собі предмет, тепер можемо починати подорож.Ви стоїте на перехресті, де виходять три стежки. 
    Який шлях ви оберете:
    `,
    options: [
      { text: "Вгору на пагорб", nextId: 2 },
      { text: "Спуститеся до річки", nextId: 3 },
      { text: "Прямо углиб лісу", nextId: 4 },
    ],
  },
  {
    id: 2,
    text: `Ви обираєте стежку, що веде вгору на пагорб. Піднімаючись по стежці, ви відчуваєте збільшення нахилу і зусильно крокуєте вгору. 
    Після тривалого підйому ви досягаєте вершини пагорба. Здивовано ви розглядаєте навколо себе і бачите захоплюючий панорамний вид на навколишній ліс.
    З вершини пагорба ви помічаєте дві можливі дороги. Який шлях ви оберете: `,
    options: [
      { text: "Вздовж гірського хребта", nextId: 5 },
      { text: "Прямо углиб лісу", nextId: 4 },
    ],
  },
  {
    id: 3,
    text: `Ви обираєте стежку, що спускається до річки. Прогресуючи вниз, ви чуєте шум води, який стає все гучнішим по мірі наближення до річки.
           Приходячи до берега, ви бачите, як річка повільно пливе своїм широким руслом. Ви помічаєте невеликий човен, що висить біля берега.`,
    options: [
      { text: "Використати човен і переплисти річку", nextId: 6 },
      { text: "Продовжите йти вздовж берега", nextId: 7, state: "rope" },
    ],
  },
  {
    id: 4,
    text: `Ви обираєте стежку углиб лісу, яка зникає у гущавині. Поступово ви прокладаєте собі шлях через густу рослинність, намагаючись проникнути глибше в ліс.
     Сонячні промені пробиваються крізь верхні гілки, створюючи мальовничу гру світла і тіні.
     Продовжуючи свій шлях, ви почуваєте, що стежка стає все вузьшою, а дерева - вищими й густишими.
     Відчуття таємниці витає у повітрі, і ви починаєте відчувати легке хвилювання.
     Серед гілок та листя ви помічаєте легендарну постать - величного та древнього лісового духа.
     Лісовий дух вас розпізнає і звертається до вас: "Вітаю, подорожнику! Ти обрав шлях глибше в ліс, де таємниці переплітаються з реальністю.
     Але будь обережний, бо не все так просто, як здається. Продовжуючи рух далі - тебе може чекати небезпека`,
    options: [
      { text: "Продовжувати рух далі", nextId: 8 },
      { text: "Повернутися назад", nextId: 9 },
    ],
  },
  {
    id: 5,
    text: `На хребті йдем і бачимо вказівник`,
    options: [
      { text: "Спуск до річки", nextId: 3 },
      { text: "Піднятися на Найвищу гору", nextId: 11 },
    ],
  },
  {
    id: 6,
    text: `Вода у потоці кришталево-чиста, і ви можете помітити рибок, що стрімко пливуть по течії.
            Продовжуючи свій шлях, ви помічаєте вдаліше щось на дні потоку.
             Це виглядає як розколотий камінь з якоюсь дрібницею всередині. Чи вирішите ви зануритися і взяти цю річку?`,
    options: [
      { text: "Пірнути і забрати", nextId: 12, state: "crystal" },
      { text: "Продовжувати пливти далі", nextId: 13 },
    ],
  },
  {
    id: 7,
    text: `Продовжуючи свій шлях вздовж гірського потоку,ви помічаєте, що стежка поступово розширюється, а зелені дерева змінюються на високі скелі. 
    Ви наближаєтеся до водоспаду, що злітає з високої кручі.
    Тепер ви знаходитеся перед важливим вибором:`,
    options: [
      {
        text: "Спробувати піднятися вгору по скелях, обходячи водоспад",
        nextId: 14,
      },
      { text: "Пройти через водоспад, ризикуючи бути змоченим", nextId: 15 },
    ],
  },
  {
    id: 8,
    text: `Ви продовжуєте свій шлях у гущавині лісу. Через деякий час знаходите старовинну руїну.`,
    options: [
      { text: "Досліджувати руїни", nextId: 16 },
      { text: "Обійти руїни і продовжити шлях", nextId: 17 },
    ],
  },
  {
    id: 9,
    text: `Від лісового НАЗАД ЙДУ і побачив печеру з  таємничим блиском`,
    options: [
      { text: "Зайти і обстежити", nextId: 18, state: "rope" },
      { text: "Піду назад І виберу шлях до річки", nextId: 3 },
      { text: "Піду назад І виберу шлях на пагорб", nextId: 2 },
    ],
  },
  // {
  //   id: 10,
  //   text: `До річки`,
  //   options: [
  //     { text: "", nextId: 0 },
  //     { text: "", nextId: 0 },
  //   ],
  // },
  {
    id: 11,
    text: `Поступово, ви побачили, як пейзаж починає змінюватися. 
        Дерева стають рідкішими, а повітря стає прохолоднішим та чистішим.
         Спершу далекий краєвид, а потім найпрекрасніший вид на весь ліс перед вами.
                Тепер ви стоїте на вершині гори.
                Ви, перебуваючи на вершині гори, маєте можливість спостерігати навколишній ландшафт. 
                Якщо у вас є бінокль, ви можете скористатися ним, щоб роздивитися найближчі об'єкти, зокрема вихід з лісу`,
    options: [
      {
        text: "Так, десь тут є він, скористаюся мабуть",
        nextId: 19,
        requiredState: { subject: "binoculars" },
      },
      { text: "Та ні, я маю орлиний зір, і так побачу", nextId: 20 },
    ],
  },
  {
    id: 12,
    text: `Ви занурюєтеся у потік і піднімаєте розколотий камінь. Вибравши його з води, ви помічаєте, що всередині маленький кришталевий кулон з чарівним візерунком на ньому.
     Його краса захоплює вас, і ви збираєтеся зберегти його як амулет на вашій подорожі. Але доки пірнав, човен відплив. Що ж далі?`,
    options: [
      { text: "Спробую доплисти до човна", nextId: 13 },
      { text: "Пливу до берега", nextId: 7 },
    ],
  },
  {
    id: 13,
    text: `Продовжуючи плисти по річці, ви помічаєте, що природа стає все дикішою і незвичайнішою. 
        Вода стає мутною, дерева зводяться ущелинами, а звуки дикої природи наповнюють повітря. Ліс поглинає вас все більше і більше.
        Ви помічаєте далеко від річки стежку, яка здається прокладеною людиною. А токож ви помічаєте місце, де річка розщеплюється на два притоки. Ви можете, вибрати яким шляхом рухатися - лівим або правим.
        `,
    options: [
      { text: "Поверну на ліво", nextId: 23 },
      { text: "Поверну на право", nextId: 24 },
      { text: "Скористаюся стежкою", nextId: 25 },
    ],
  },
  {
    id: 14,
    text: `Ви вирішуєте вилізти по скелях біля водоспаду і ризикувати своїм безпекою.
     Ваші руки шукають опору на гладких каменях, а ноги шукають стійку опору. 
     З кожним кроком ви відчуваєте, як вода з водоспаду бризкає вам у обличчя, надаючи вам сили і впевненості.
    Але, ось незворотний момент: ви розумієте, що маючи мотузку, якою можна б було зафіксуватися, можна врятуватися і подолати скелю.
     Вам спливають руки від поту, і ви відчуваєте, як втрачаєте стійкість. Серце б'ється швидше, а паніка поступово охоплює вас.`,
    options: [
      {
        text: "Використати мотузку",
        nextId: 31,
        requiredState: { subject: "rope", isForDelete: true },
      },
      { text: "І де ж я подів мотузку...", nextId: 101 }, //----------------START OVER--------------
    ],
  },
  {
    id: 15,
    text: `Ви вирішуєте пройти через водоспад, ризикуючи бути змоченим.
     Ви підходите ближче до водоспаду і відчуваєте його потужний потік води, що обволікає вас холодним туманом.
     З великим розмахом ви прориваєтеся через струмок і впадаєте в потік, який впродовж кількох секунд змиває всю вашу втому.
     По той бік водоспаду ви виходите змоченим, але оживленим. Ваше волосся струшуються від води, а відчуття свіжості охоплює вас. Тепер перед вами відкривається незвідана печера`,
    options: [
      { text: "Зайти і обстежити", nextId: 18, state: "rope" },
      {
        text: "Я боягуз але сильний в руках, Повернуся і спробую піднятися по скелі",
        nextId: 14,
      },
    ],
  },
  {
    id: 16,
    text: `Ви вирішили дослідити руїни. Підходите до старовинної споруди з захопленням.
           Руїни виглядають містично та таємничо, а ваша цікавість росте.
           Увійшовши в середину, ви помічаєте знаки колишнього життя. 
           Загадкові письмові символи прикрашають стіни, а древні предмети розкидані по кімнатам.
            У вас є можливість обрати, чим саме ви зацікавитесь
           `,
    options: [
      { text: "Досліджувати стіни і символи", nextId: 26 },
      { text: "Переглядати древні предмети", nextId: 27 },
    ],
  },
  {
    id: 17,
    text: `Залишивши руїни позаду ви продовжуєте свій шлях, ви прокладаєте нові стежки в лісі, слідуючи за природними ознаками та орієнтувальними точками. 
    Це може бути викликом, але також дозволяє вам дослідити інші аспекти лісового середовища та природи.
    Ви помічаєте дикі ягоди, які ростуть поруч зі стежкою. Можливо спробую, підкріплюся, наберуся сил. 
    `,
    options: [
      {
        text: "Роздивитися знайдену карту і знайти вихід",
        nextId: 21,
        requiredState: { subject: "map" },
      },
      { text: "Підкріпитися ягодами і рушити далі", nextId: 22 },
      { text: "А раптом вони отруйні!? Піду краще далі!", nextId: 29 },
    ],
  },
  {
    id: 18,
    text: `Ви увіходите до печери, зачеплюєтеся за мотузку, і вирішуєте підібрати її.
         Але раптово ви помічаєте великого ведмедя, який блукає по середині печери. 
         Його гострі очі виявляють вашу присутність, і він піднімає свою голову, видно, що він напружений.
            Ви швидко перевіряєте свої ресурси щоб зрозуміти чи зможете врятуватися. 
        Ведмідь наближається до вас, його великі лапи потрясають землю. Ви відчуваєте пульсуючий страх у своєму серці, але одночасно відчуваєте рішучість.
            Знаючи, що ведмеді часто пристрастіюються до меду, а чи присутній мед зі мною? `,
    options: [
      {
        text: "Так! Я маю баночку меду, пригощу звіра",
        nextId: 30,
        requiredState: { subject: "honey", isForDelete: true },
      },
      { text: "Хм...Я наче мав взяти його...}", nextId: 101 }, // КІНЕЦЬ
    ],
  },
  {
    id: 19,
    text: `Ви приділяєте увагу деталям навколишнього ландшафту, використовуючи бінокль, сподіваючись виявити вихід з лісу. 
        Поступово, уважно оглядаючи кожен деталь, ви помічаєте слабку світлу смугу серед зелені.
        Зосередившись на цій області, ви помічаєте, що це може бути просіка або стежка, що веде з лісу. 
        Вона проходить через дерева і видно, що ширшаючись, як йдете далі.
        Ваше серце заповнюється надією, коли ви розпізнаєте знаки цивілізації: сліди людського пересування, пошкоджені гілки, маркування на деревах. 
        Це вказує на те, що ви на правильному шляху до виходу з лісу.
        З новим ентузіазмом ви спускаєтеся з гори, слідуючи за просікою і дотримуючись маркувань. 
        Відчуваючи полегшення, ви переступаєте через межу лісу і повертаєтеся до знайомого світу, відкриваючи новий етап своєї пригоди.
`,
    options: [{ text: "Я скоро буду дома!", nextId: 201 }],
  },
  {
    id: 20,
    text: `Вам належить знайти інший спосіб визначити вихід з лісу, оскільки у вас немає бінокля.
        Вивчивши звуки, які доносяться з лісу. Ви звернули увагу на звук водоспаду, який лунає здалеку.
         Цей поток води може бути ознакою близкості до цивілізованої місцевості, оскільки водоспади часто знаходяться близько до населених пунктів. 
         Він служить вам орієнтиром і може вести вас до виходу з лісу.
        `,
    options: [
      { text: "Рух до водоспаду", nextId: 7 },
      { text: "Вирішити знайти легший шлях", nextId: 4 },
    ],
  },
  {
    id: 21,
    text: `Крокуючи від руїн подалі, ви розглядаєте карту і розумієте де вихід з лісу`,
    options: [{ text: "Я бачу вихід з лісу та прямую туди!", nextId: 201 }],
  },
  {
    id: 22,
    text: `На жаль, після споживання диких ягід ви відчуваєте погане самопочуття. 
    Виявляється, що ягоди були отруйними, і ви стикаєтесь з отруєнням. Вам стає погано, і ви починаєте втрачати свідомість. 
    `,
    options: [
      {
        text: "Вип'ю на останок ту баночку з рідиною",
        nextId: 28,
        requiredState: { subject: "healing", isForDelete: true },
      },
      { text: "Втрачаєте свідомість....", nextId: 101 },
    ],
  },
  {
    id: 28,
    text: `Ви швидко випиваєте рідину та успішно знімаєте отруєння. Ваше самопочуття покращується, і ви відновлюєте енергію.
        Тепер, коли ви знову можете продовжити свою подорож.`,
    options: [
      { text: "Продовжити подорож", nextId: 29 },
      { text: "Відпочити та відновити сили", nextId: 63 },
    ],
  },
  {
    id: 29,
    text: `22 взяв предмет з дна річки І 2:`,
    options: [
      { text: "34", nextId: 34 },
      { text: "35", nextId: 35 },
    ],
  },
  {
    id: 23,
    text: `Ви повернулина ліво, пливете по річці, а потік стає все бурхливішим і швидшим. Долітають до вас дивні звуки... Шум водоспаду стає все чутнішим, а розбризкана вода вже близько.
        Ви наближаєтесь до водоспаду і відчуваєте його потужну силу і велич. Розбризкана вода охоплює вас, забризкуючи обличчя і збуджуючи адреналін у вашому організмі. 
        Нажаль повернутися назад ви вже не можете... і вижити також, нажаль... 
        `,
    options: [{ text: "Чому ж я не повернув на право...(", nextId: 101 }],
  },
  {
    id: 24,
    text: `Цікаво, ліворуч краще б було...Ви пливете по спокійній річці та помічаєте поселення в далечині. Вирішуєте зупинитися та перевірити чи хтось там є. 
        Підходите до людей і запитуєте про напрямок річки. Вони розповідають вам, що річка продовжує течію далі через густий ліс, а потім до великого міста, але самотушки Вам не подолати, 
        якщо у Вас є щось цінне, зможете заплатити за супровід а в кінці ще й віддати човен, як ні спробувати можна самотужки проплисти через ліс.`,
    options: [
      {
        text: "Так звісно, ось тримайте коштовний кристал!",
        nextId: 38,
        requiredState: { subject: "crystal", isForDelete: true },
      },
      {
        text: "Якщо щось і є то не віддам! я хоробрий, пливу далі сам!",
        nextId: 39,
      },
    ],
  },
  {
    id: 25,
    text: `Ви вирішуєте залишити човен і вирушити стежкою, яку помітили вдалеку. 
        Шлях прокладений крізь густий ліс, але ви відчуваєте, що він може привести вас до вихідного шляху.
        Після деякого часу, проходячи по стежці, ви помічаєте, як вона стає ширшою та більш виділеною. 
        Листя на землі зменшується, і ви замічаєте перший проблиск сонця через гілля. Ви все ближче до краю лісу.
        Здалеку,ви помічаєте велику скелю, яка височіє у далекому горизонті на галявині. Вона може бути наступним важливим пунктом на вашому шляху.`,
    options: [
      { text: "Підійти до скелі", nextId: 50 }, //-----
      { text: "Продовжувати рухатися далі", nextId: 8 },
    ],
  },
  {
    id: 26,
    text: `Ви роздивляєтесь уважно стіни руїн і знаки, які прикрашають їх поверхню.
     Символи виглядають незвичайно і незрозуміло, але вони викликають вашу цікавість.
      Ви починаєте аналізувати їх форми та структуру, намагаючись розгадати їх секрет.
      Проходячи зі стіни на стіну ви помічаєте щось хоже на карту, на крату всьго лісу на прилеглих територій.
      Ви з радістю розумієте, що бачите де саме знаходитеся і куди потрібно прямувати.
      `,
    options: [
      {
        text: "Не міг подумати що руїни допоможуть мені вибратися з лісу",
        nextId: 201,
      },
    ],
  },
  {
    id: 27,
    text: `
    Ви вирішили переглянути древні предмети, що розташовані в цих руїнах. 
    Вони можуть розповісти багато цікавих історій про минуле і можуть надати вам корисну інформацію або подсказки для подальшого продовження вашої подорожі.
    Ви розглядаєте стародавні вази, рунічні таблички, зброю та інші артефакти, які знаходяться в цих руїнах.
     А також ви помічаєте у підлозі люк у підвал, але без сходів, і так просто спуститися не вийде.
      `,
    options: [
      {
        text: "Незнайшовши нічого цінного, розчарованим покидаю руїни",
        nextId: 17,
      },
      {
        text: "Спробую використати мотузку та спуститися до підвалу",
        nextId: 60,
        requiredState: {
          subject: "rope",
          isForDelete: false,
        },
      },
    ],
  },
  {
    id: 30,
    text: `Ви швидко розумієте, що у вас є обмежений час, поки ведмідь зайнятий їжею.
         Ви ретельно оглядаєте печеру і помічаєте декілька цікавих предметів. 
         Серед них є Мисливський Ніж, Компас, Фляга та Кресало.
         Вам потрібно прийняти швидке рішення щодо того, який один предмет ви виберете, перед тим як покинути печеру.
         `,
    options: [
      { text: "Мисливський Ніж", nextId: 40, state: "knife" },
      { text: "Компас", nextId: 40, state: "compass" },
      { text: "Фляга без води", nextId: 40, state: "bottle" },
      { text: "Кресало", nextId: 40, state: "kresalo" },
    ],
  },
  {
    id: 40,
    text: `Ви з панікою біжите з печери, відчуваючи ведмедя, який наближається до вас. 
        Ви намагаєтеся рухатися швидко і незамітно, уникати гілок і кущів, щоб не привертати увагу. 
        Проте, ваший страх і поспішність приводять до того, що ви опинилися в густому лісі з єдинию стежкою вглиб лісу`,
    options: [
      { text: "Продовжити рухатися вглиб лісу", nextId: 4 },
      { text: "Повернутися до ведмедя в печеру", nextId: 18 },
    ],
  },
  {
    id: 31,
    text: `Після успішного вилазу по скелі біля водоспаду, ви знаходитесь на вершині, де вас оточує захоплюючий вид на ліс та далекі горизонти. 
                Із цього місця ви можете побачити кілька можливих шляхів, які ведуть у різні напрямки. 
         `,
    options: [
      {
        text: "Побачили вдалині міст та вирішили перейти на іншу сторону",
        nextId: 41,
      },
      {
        text: "Використати ніж, щоб зловити рибу та підкріпитися",
        nextId: 42,
        requiredState: { subject: "knife" },
      },
      {
        text: "Використати кресало, щоб розвести багаття, може хтось помітить і допоможе",
        nextId: 43,
        requiredState: { subject: "kresalo" },
      },
      { text: "Продовжити рухатися вздовж берега", nextId: 44 },
    ],
  },
  {
    id: 38,
    text: `Ви пропливаєте через густий ліс, оминаючи водоворотів, місця скупчення крокодилів, та небезпечних місць, успішно допливаєте до міста. 
         `,
    options: [
      { text: "Цивілізація це добре, Дякую тобі за порятунок", nextId: 201 },
    ],
  },
  {
    id: 39,
    text: `Ви пропливаєте через густий ліс, оминаючи водоворотів, місця скупчення крокодилів, та небезпечних місць. 
         `,
    options: [{ text: "Я ще молодий, щоб вмирати....", nextId: 101 }],
  },
  {
    id: 44,
    text: `Продовжуємо рухатися вздовж берега але бачимо, що шлях дуже не простий, кілька секунд роздумів і
        вирішуємо повернутися назад і перейти на інший берег річки через міст.`,
    options: [
      {
        text: "Переходимо через міст, шлях наче має бути простішим далі.",
        nextId: 41,
      },
    ],
  },
  {
    id: 42,
    text: `Поки ви зайняті ловлею риби біля річки, ви помічаєте, що здалеку наближаються туристи. 
        Вони приходять з метою набрати воду з річки для своєї подорожі. 
        Зацікавлені у вашій ситуації, вони підходять до вас, питаючи, чи все гаразд і чи потрібна вам допомога.
        Ви розповідаєте їм про вашу загубленість у лісі і вони виявляються доброзичливими туристами, які мають досвід в походах.
         Вони пропонують допомогти вам вийти з лісу і повернутися до цивілізації.
        Туристи розповідають вам про найближчий шлях до цивілізації та навіть пропонують вам приєднатися до них, якщо ви хочете. 
        Ви вдячно приймаєте їх пропозицію і разом із ними продовжуєте подорож до виходу з лісу.
        Таким чином, завдяки зловленій рибі і доброзичливим туристам, ви успішно знаходите шлях до цивілізації та скоро повернетесь додому.`,
    options: [{ text: "Я скоро буду дома!", nextId: 201 }],
  },
  {
    id: 43,
    text: `Ви вирішили використати кресало, щоб розвести багаття і привернути увагу людей.
         Ви знаєте, що дим від багаття може бути помітним здалеку і приверне увагу потенційних рятівників.
          Під час розпалювання багаття ви втратили пильність і не помітили, як хижий звір підійшов до водопою та
          нападає на вас, не давши вам шансу втекти`,
    options: [{ text: "Все життя пролетіло перед очима...", nextId: 101 }],
  },
  {
    id: 41,
    text: `Після успішного перетину мосту ви потрапили в невелике поселення. Місцеві жителі часто ходять до річки, щоб половити рибу та набрати воду.
         Вони люб'язно допомагають вам і вказують напрямок до невеликої галявини, розташованої у лісі. Це новий орієнтир, який може вести вас далі.`,
    options: [
      {
        text: "Дякуєте місцевим жителям за їхню допомогу і відправляєтеся до галявини.",
        nextId: 45,
      },
    ],
  },
  {
    id: 45,
    text: `Ви опинилися на галявині і раптово зустріли розбійників. Вони загрожують вам, вимагаючи від вас цінні речі.
         Якщо у вас є щось коштовне, вони погоджуються відвезти вас до найближчого міста, а ваші речі забрати собі. Ваше життя буде врятовано, але ви втратите цінні власності.
         Але якщо у вас нічого коштовного немає, розбійники вирішують утримати вас в полоні. 
         Ви знаходитесь під їхнім контролем і не можете втекти.`,
    options: [
      {
        text: "Віддати кришталевий кулон",
        nextId: 46,
        requiredState: { subject: "crystal", isForDelete: true },
      },
      { text: "Якщо щось і є, я надійно сховав і не віддам", nextId: 47 },
    ],
  },
  {
    id: 46,
    text: `Ви розумно вирішили віддати розбійникам кулон і домовитися з ними.
         Розбійники беруть цінний предмет і погоджуються підвезти вас до найближчого міста або цивілізації. 
         Ваша безпека є пріоритетом, і ви бачите, що це кращий варіант, ніж залишатися в полоні.
            Розбійники провадять вас до місця, де ви зможете знайти допомогу і повернутися до цивілізованого світу.
             Ви відчуваєте полегшення, коли побачили ознаки людської присутності та цивілізації.`,
    options: [{ text: "Дякуємо за поверненню до цивілізації", nextId: 201 }],
  },
  {
    id: 47,
    text: `Потрапляю в полон. Перебуваючи з розбійниками кілька днів, вирішєте приєднатися до розбійників.
               Ви стаєте одним з розбійників і приймаєте їхні звички та способи життя.
               Ви втрачаєте свободу, але отримуєте певні переваги, які надає бути розбійником. 
               Ви знаходите сховки, плануєте злочини та збираєте незаконний здобуток.
        `,
    options: [{ text: "Краще ніж загинути в лісі)", nextId: 101 }],
  },
  {
    id: 50,
    text: `Ви підходите до скелі, що знаходиться посеред галявини, і помічаєте на ній карту, яка може допомогти вам знайти вихід з лісу. 
            Карта зображає різні шляхи, річки, гори та поселення, навколо яких пролягають стежки.Уважно досліджуючи карту, ви помічаєте,
            стежку, яка веде до цивілізації
        `,
    options: [
      {
        text: "Не міг подумати що скеля допоможе мені вибратися з лісу",
        nextId: 201,
      },
    ],
  },
  {
    id: 60,
    text: `
Ви вирішуєте спуститися в підвал за допомогою мотузки. Перебуваючи в підвалі, ви помічаєте багато предметів,
 що викликають ваш інтерес. Вони є бути різноманітними: скриньки, старовинні меблі, картини, посуд, інструменти або навіть 
 таємничі рукописи.
Ви маєте можливість дослідити цей підвал та взяти з собою обраний предмет. Вони можуть бути корисними для вас у подальшій грі. `,
    options: [
      {
        text: "Старовинна мапа",
        nextId: 17,
        state: "map",
      },
      {
        text: "Меч",
        nextId: 17,
        state: "sword",
      },
      {
        text: "Баночка з рідиною",
        nextId: 17,
        state: "healing",
      },
      {
        text: "Кришталевий амулет",
        nextId: 61,
      },
    ],
  },
  {
    id: 61,
    text: ` Ви знайшли артефакт під назвою "Кришталевий амулет". Цей амулет виглядає дуже привабливо, але коли ви намагаєтеся 
    взяти його в руки, він раптово розсипається на дрібні гострі кристалики. Незадовго після цього ви відчуваєте жар у своїй руці, 
    і блискавкою вам стає ясно, що ці кристали мали отруйні властивості. Симптоми отруєння 
    вже починають проявлятися. Ваше зорове сприйняття починає затуманюватися, серце б'ється все швидше, а дихання ускладнюється.
     Ви відчуваєте себе слабким, і через кілька хвилин падаєте на землю без свідомості.
        `,
    options: [
      {
        text: "Не міг подумати, що це така підстава....",
        nextId: 101,
      },
    ],
  },
  {
    id: 62,
    text: ` Вітаю! Ви обрали свій предмет та можуте продовжити подорож!`,
    options: [
      {
        text: "Вилізти з підвалу та покинути руїни",
        nextId: 17,
      },
    ],
  },
  {
    id: 63,
    text: `Ви вирішили трохи відпочити і ненароком задрімали в лісі. Вас розбудив якийсь голос.
Як чудово, що ви зустріли лісового персонажа, якому ви змогли розповісти свою історію! Лісовий, 
як досвідчений та мудрий істота, розуміє ваші труднощі і вирішує вам допомогти.
Лісовий пропонує вам безпечне пристанище в своєму оселі, де ви можете відпочити,
 набратися сил і відновити свої запаси. Він знає цей ліс як свої п'ять пальців і надає вам цінні поради та вказівки для закінчення подорожі
     `,
    options: [
      {
        text: "Набралися сил і вирушили до цивілізації",
        nextId: 201,
      },
    ],
  },
];
