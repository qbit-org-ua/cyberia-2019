const isDigit = (ch) => {
    return /^[0-9]$/i.test(ch);
}

const isAlpha = (ch) => {
    return /^[A-Z]$/i.test(ch);
}

const randInt = (l,r) => {
    return Math.floor(l + Math.random()*(r-l+1));
}

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const validateInt = (input,l,r) => {
    if (input.length <= 0) {
      throw 'empty string'
    }
    for(let i in input) {
        if (!isDigit(input[i]) && input[i] !== '-') throw "Вы можете вводить только целые числа!";
    }
    let parsed = Number.parseInt(input)
    if (parsed < l || parsed > r) throw `Вы можете выводить только числа в промежутке от ${l} до ${r}!`;
}

const validateLatinString = (input) => {
    if (input.length <= 0) {
      throw 'empty string'
    }
    for(let i in input) {
        if (!isAlpha(input[i])) throw 'Вы можете вводить только строки из латинских символов!';
    }
}

const func1 = (input) => {
    validateInt(input,0,1000000000);
    var c = 1;
    var pch = '';
    var res = '';
    for(var i in input) {
        let ch = input[i];
        if (ch == pch)c++;
        else {
            if (pch !== '') {
                res += c;
                res += pch;
                c=1;
            }
            pch = ch;
        }
    }
    if (c>0) {
        res += c;
        res += pch;
    }
    return res;
}

const gen1 = () => {
    return randInt(1000000,10000000).toString();
}

const func2 = (input) => {
    validateLatinString(input);
    let res = '';
    for(const i in input) {
        let t = input.charCodeAt(i);

        let f = 'A';
        if (input[i] >= 'a' && input[i] <= 'z') f = 'a';

        res += String.fromCharCode(f.charCodeAt(0) + ((t-f.charCodeAt(0)+1)%26));
    }
    return res;
}

const gen2 = () => {
    let len = randInt(3,10);
    let res = '';
    for(let i=0; i<len; i++) res += letters[randInt(0,letters.length-1)];
    return res;
}

const func3 = (input) => {
    validateLatinString(input);
    let res = '';
    for(const i in input) {
        let t = input.charCodeAt(i);

        let f = 'A';
        if (input[i] >= 'a' && input[i] <= 'z') f = 'a';

        res += String.fromCharCode(f.charCodeAt(0) + (((t-f.charCodeAt(0))*5+3)%26));
    }
    return res;
}

const gen3 = () => {
    let len = randInt(3,10);
    let res = '';
    for(let i=0; i<len; i++) res += letters[randInt(0,letters.length-1)];
    return res;
}

const func4 = (input) => {
    validateInt(input,0,1000);
    let val = Number.parseInt(input);
    const pi = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989";
    return pi[val];
}

const gen4 = () => {
    return randInt(0,1000).toString();
}

const func5 = (input) => {
    validateInt(input,0,10000000);
    let val = Number.parseInt(input);
    return (val*11).toString();
}

const gen5 = () => {
    return randInt(0,10000000).toString();
}

const func6 = (input) => {
    validateInt(input,0,10000000);
    let val = Number.parseInt(input);
    return (7*val-4).toString()
}

const gen6 = () => {
    return randInt(0,10000000).toString();
}

const func7 = (input) => {
    validateInt(input,0,10000000);
    return (input.length*2).toString()
}

const gen7 = () => {
    return randInt(0,10000000).toString();
}

const func8 = (input) => {
    validateInt(input,0,10000000);
    return (input.length * input.length * input.length).toString()
}

const gen8 = () => {
    return randInt(0,10000000).toString();
}

const func10 = (input) => {
    validateInt(input,1,1000);
    let val = Number.parseInt(input);
    let t=0;
    for(let i=2;;i++) {
        let g = true;
        for (let j=2; j*j<=i; j++) {
            if (i%j == 0) {
                g = false;
                break;
            }
        }
        if (g) t++;
        if (t == val) return (i+1).toString();
    }
}

const gen10 = () => {
    return randInt(1,1000).toString();
}

const func11 = (input) => {
    validateInt(input,1,1000);
    let val = Number.parseInt(input);
    let a = 0, b = 1;
    for(let i = 0; i < val; i++) {
        let c = b;
        b = (a+b)%10;
        a = c;
    }
    return a.toString();
}

const gen11 = () => {
    return randInt(1,1000).toString();
}

const func12 = (input) => {
    validateInt(input,1,10000000);
    let res = 0;
    for(let i in input) {
        if (i > 0) res += Number.parseInt(input[i]);
    }
    return res.toString();
}

const gen12 = () => {
    return randInt(1,10000000).toString();
}

const func13 = (input) => {
    validateInt(input,1,10000000);
    let mx = 0, mn = 9;
    for(let i in input) {
        let d = Number.parseInt(input[i]);
        if (mx < d) mx = d;
        if (mn > d) mn = d;
    }
    return (mn*mx).toString();
}

const gen13 = () => {
    return randInt(1,10000000).toString();
}

const func14 = (input) => {
    validateInt(input,1,10000);
    let val = Number.parseInt(input);
    return (val*(val+1)/2).toString();
}

const gen14 = () => {
    return randInt(1,10000).toString();
}

const func15 = (input) => {
    validateInt(input,1,10000000);
    let val = Number.parseInt(input);
    let c = 0;
    while (val > 0) {
        c += (val & 1);
        val >>= 1;
    }
    return c.toString();
}

const gen15 = () => {
    return randInt(1,10000000).toString();
}

function gcd(a, b) {
	if (a !== 0 && b !== 0) {
		if (a > b) {
			return gcd(a % b, b);
		} else {
			return gcd(a, b % a);
		}
	}
	return a + b;
}

/*
Validation
*/

function checkAlpha(input) {
  if (input.length <= 0) {
    throw 'empty string'
  }
	function isAlpha(ch) {
		return /^[A-Z]$/i.test(ch);
	}

	for (let i = 0; i < input.length; ++i) {
		if (!isAlpha(input[i])) {
			throw i;
		}
	}
}

function checkNum(input, maxN) {
	function isDigit(str) {
		return /^\d+$/.test(str);
	}

	for (let i = 0; i < input.length; ++i) {
		if (!isDigit(input[i])) {
			throw i;
		}
	}
	const res = parseInt(input);
	if (res > maxN) {
		throw "";
	}
	return res;
}

/*
Random
*/

function randomFrom(items) {
	return items[Math.floor(Math.random() * items.length)];
}

function randomFromTo(from, to) {
	return Math.floor(Math.random() * (to - from) + from);
}

function randomFromToOrd(minOrd, maxOrd) {
	const ord = randomFromTo(minOrd, maxOrd);
	return randomFromTo(Math.pow(10, ord), Math.pow(10, ord + 1));
}

/*
Functions
*/

function func27(input) { // string sandwich
	checkAlpha(input);
	let res = "";
	let mid = Math.floor(input.length / 2);
	for (let i = 0; i < mid; ++i) {
		res += input[i];
		res += input[input.length - i - 1];
	}
	if (input.length % 2 !== 0) {
		res += input[mid];
	}
	return res;
}

function gen27() {
	let l = Math.random() * 10 + 5;
	let res = "";
	while (res.length < l) {
		res += randomFrom(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
	}
	return res;
}

function func26(input) { // gcd(n, 10!)
	const n = checkNum(input, 1e10);
	return gcd(n, 3628800); // 10!
}

function gen26() {
	return randomFromToOrd(0, 9);
}

function func25(input) { // lcm(n, 24)
	const n = checkNum(input, 1e10);
	return n * 24 / gcd(n, 24);
}

function gen25() {
	return randomFromToOrd(0, 9);
}

function func24(input) { // closest /// 7
	const n = checkNum(input, 1e10) + 3;
	return n - n % 7;
}

function gen24() {
	return randomFromToOrd(0, 5);
}

function func23(input) { // word of the same number of letters
	const words = [
		["am", "ah", "my", "me", "to", "at", "as", "on", "in"],
		["the", "and", "for", "are", "but", "not", "you", "all", "any", "can", "had", "her", "was", "one", "our", "out", "day", "get", "has", "him", "his", "how", "man", "new", "now", "old", "see", "two", "way", "who", "boy", "did", "its", "let", "put", "say", "she", "too", "use"],
		["that", "with", "have", "this", "will", "your", "from", "they", "know", "want", "been", "good", "much", "some", "time"],
		["seven", "world", "about", "again", "heart", "pizza", "water", "happy", "sixty", "board", "month", "Angel", "death", "green", "music", "fifty", "three", "party", "piano", "Kelly", "mouth", "woman", "sugar", "amber", "dream", "apple", "laugh", "tiger", "faith", "earth", "river", "money", "peace", "forty", "words", "smile", "abate", "house", "alone", "watch", "lemon", "South", "erica", "anime", "after", "santa", "women", "admin", "Jesus", "China"],
		["purple", "orange", "family", "twelve", "silver", "Godard", "thirty", "donate", "people", "future", "Heaven", "banana", "Africa", "Monday", "office", "nature", "eleven", "Mumbai", "animal", "twenty", "snitch", "Rachel", "Friday", "Father", "yellow", "poetry", "August", "broken", "potato", "Sunday", "circle", "school", "breath", "moment", "circus", "person", "scarce", "London", "energy", "sister", "spring", "change", "monkey", "system", "Austin", "secret", "pirate", "turtle", "ninety", "mother"],
		["perfect", "Tuesday", "country", "pumpkin", "special", "America", "freedom", "picture", "husband", "monster", "seventy", "Melissa", "nothing", "jessica", "sixteen", "morning", "journey", "history", "Georgia", "fifteen", "amazing", "rihanna", "January", "dolphin", "teacher", "forever", "kitchen", "holiday", "Madison", "welcome", "Jupiter", "justice", "diamond", "courage", "hundred", "silence", "someone", "science", "revenge", "leonine", "harmony", "problem", "awesome", "penguin", "youtube", "blanket", "yielder", "England", "dancing", "musical"]
	];
	const n = checkNum(input, 1e8);
  console.log(n, input, typeof input, typeof n)
	if (input.length < 2 || input.length > 7) {
		throw "";
	}
  console.log(input.length)
	return words[input.length - 2][n % words[input.length - 2].length];
}

function gen23() {
	return randomFromToOrd(1, 7);
}

function validate23(request, response) {
	isAlpha(response);
  console.log(request, response, request.length, response.length)
	return request.length === response.length;
}

function func21(input) { // first digit as a letter
	checkNum(input, 1e10);
	return String.fromCharCode(input[0].charCodeAt(0) + ('a'.charCodeAt(0) - '0'.charCodeAt(0)));
}

function gen21() {
	return randomFromToOrd(0, 7) - 1;
}

function func20(input) { // number itself if it ends with 0, 42 otherwise
	checkNum(input, 1e10);
	if (input[input.length - 1] === '0') {
		return input;
	} else {
		return "42";
	}
}

function gen20() {
  let number = randomFromToOrd(0, 10);
  if (Math.random() < 0.3) {
    number = Math.floor(number / 10) * 10
  }
  return number;
}

function func17(input) { // number of even digits
	checkNum(input, 1e10);
	let res = 0;
	for (let i = 0; i < input.length; ++i) {
		if (parseInt(input[i]) % 2 == 0) {
			++res;
		}
	}
	return res;
}

function gen17() {
	return randomFromToOrd(0, 10);
}

const blackboxes = {
  '1': {
    generate: gen1,
    compute: func1,
    secret: 'Силенцио',
  },
  '2': {
    generate: gen2,
    compute: func2,
    secret: 'Релассио',
  },
  '3': {
    generate: gen3,
    compute: func3,
    secret: 'Анапнео',
  },
  '4': {
    generate: gen4,
    compute: func4,
    secret: 'Ферула',
  },
  '5': {
    generate: gen5,
    compute: func5,
    secret: 'Каве Инимикум',
  },
  '6': {
    generate: gen6,
    compute: func6,
    secret: 'Пуллюс',
  },
  '7': {
    generate: gen7,
    compute: func7,
    secret: 'Либеражёлтыйкорпус',
  },
  '8': {
    generate: gen8,
    compute: func8,
    secret: 'Коллопортус',
  },
  '10': {
    generate: gen10,
    compute: func10,
    secret: 'Конъюнктивитус',
  },
  '11': {
    generate: gen11,
    compute: func11,
    secret: 'Дантисимус',
  },
  '12': {
    generate: gen12,
    compute: func12,
    secret: 'Таранталлегра',
  },
  '13': {
    generate: gen13,
    compute: func13,
    secret: 'Депримо',
  },
  '14': {
    generate: gen14,
    compute: func14,
    secret: 'Энервейт',
  },
  '15': {
    generate: gen15,
    compute: func15,
    secret: 'Драконифорс',
  },
  '17': {
    generate: gen17,
    compute: func17,
    secret: 'Флагрейт',
  },
  '20': {
    generate: gen20,
    compute: func20,
    secret: 'Эбублио',
  },
  '21': {
    generate: gen21,
    compute: func21,
    secret: 'Мелофорс',
  },
  '23': {
    generate: gen23,
    compute: func23,
    validate: validate23,
    secret: 'Джеминио',
  },
  '24': {
    generate: gen24,
    compute: func24,
    secret: 'Импервиус',
  },
  '25': {
    generate: gen25,
    compute: func25,
    secret: 'Ваддивази',
  },
  '26': {
    generate: gen26,
    compute: func26,
    secret: 'Делетриус',
  },
  '27': {
    generate: gen27,
    compute: func27,
    secret: 'Дуклифорс',
  },
}

class Typing extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  componentDidMount() {
    this.start()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidUpdate(prevProps) {
    const { text } = this.props
    if (text !== prevProps.text) {
      this.setState({ text: '' }, this.start)
    }
  }

  start = () => {
    this.interval = setInterval(() => {
      if (this.state.text !== this.props.text) {
        this.setState({ text: this.props.text.substring(0, this.state.text.length + 1) })
      } else {
        clearInterval(this.interval)
      }
    }, 30)
  }

  render() {
    return <>{this.state.text}</>
  }
}

const X = ({ children }) => <Typing text={children} />

export default class extends React.Component {
  state = {
    mode: 'learning',
    passedIterations: 0,
    text: 'Я портрет уважаемого человека. Я могу вам помочь, если вы отгадаете мою загадку. Спросите меня что-нибудь.',
    input: '',
    userInputValue: '',
  }

  static async getInitialProps({ query: { id } }) {
    return { id }
  }

  onInput = ({ target: { value } }) => {
    this.setState({ userInputValue: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const blackbox = blackboxes[this.props.id]
    const { mode } = this.state
    const userInput = this.state.userInputValue
    this.setState({ userInputValue: '' })
    if (mode === 'learning') {
      try {
        const output = '' + blackbox.compute(userInput);
        const state = { text: `Ответ: ${output}` };
        if (this.state.passedIterations >= 5) {
          state.passedIterations = 0
          state.mode = 'testing'
          state.input = '' + blackbox.generate()
          state.text += ` А теперь моя очередь спрашивать. Каков будет ваш ответ на ${state.input}?`
        } else {
          state.passedIterations = this.state.passedIterations + 1
        }
        this.setState(state)
      } catch (e) {
        this.setState({ text: `Спросите что-нибудь другое.` })
      }
    } else if (mode === 'testing') {
      try {
        const output = '' + blackbox.compute(this.state.input)
        let isValid = false
        const { validate } = blackbox
        if (validate !== undefined) {
          try {
            isValid = validate(this.state.input, userInput)
          } catch (e) {
            isValid = false
          }
        } else {
          isValid = (userInput === output)
        }
        if (!isValid) {
          this.setState({ mode: 'learning', passedIterations: 0, text: "Неверно! Ха-ха! Попробуйте ещё." })
        } else {
          const input = '' + blackbox.generate()
          if (this.state.passedIterations >= 3) {
            this.setState({ mode: 'done', text: `Правильно! Ладно, запоминайте заклинание: ... ${blackbox.secret} ...` })
          } else {
            this.setState({ passedIterations: this.state.passedIterations + 1, input, text: `Правильно! А каков будет ваш ответ на ${input}?` })
          }
        }
      } catch (e) {
      }
    }
  }

  render() {
    //const text = "Гарри Поттер – мальчик которому удалось выжить после того как самый злой волшебник всех времен и народов Волан-де-Морт хотел убить его в доме где жили его родители перед этим убив их. Но магическая защита которой маленького";
    const { text } = this.state
    return <>
      <div id="page">
        <div id="portrait"><div id="portrait-inner">
      <video width="450" height="600" autoPlay="autoplay" loop="loop">
  <source src={`./static/video-${this.props.id}.mp4`} type="video/mp4" />
      </video>
      </div></div>
        {text !== '' ? <div id="dialog"><div id="dialog-inner"><X>{text}</X></div></div> : null }
        <div className="clearfix" />
        <form id="input" onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onInput} value={this.state.userInputValue} placeholder="Что вы хотите сказать?" />
          <button type="submit">Сказать</button>
        </form>
      </div>

      <style jsx global>{`
        body {
          background: url('./static/brick-wall-small.jpg') no-repeat;
          font-family: "Harry-Potter";
          font-size: 26px;
        }
        @font-face {
          font-family: 'Harry-Potter';
          src: url('./static/fonts/harry-potter.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        .clearfix{
          min-height:1px;clear:both;
        }
        .clearfix:after{
          clear:both;
          content:".";
          display:block;
          height:0;
          visibility:hidden;
          font-size:0;
        }
        #page {
          margin: 60px auto 0;
          width: 1100px;
        }
        button, input {
          font-family: "Harry-Potter";
          font-size: 26px;
        }
        #portrait {
          background: url('./static/border.jpg') no-repeat;
          width: 456px;
          height: 599px;
          padding: 97px;
          float: left;
        }
        #portrait-inner {
          background: red;
          width: 449px;
          height: 600px;
        }
        #dialog {
          background: url('./static/dialog-small.png') no-repeat;
          width: 400px;
          height: 280px;
          float: left;
        }
        #dialog-inner {
          padding: 73px;
        }

        #input {
          margin: 20px 120px;
        }

        #input input {
          line-height: 2em;
          margin-right: 5px;
        }
      `}</style>
    </>
  }
}
