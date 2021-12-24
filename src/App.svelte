<script>
  import { organizations, industries, emojis } from './data'

  let candidate, industry, emoji

  function randomNumber(max) {
    return Math.floor(Math.random() * max)
  }

  function generate() {
    let good = false
    while (!good) {
      candidate = organizations[randomNumber(organizations.length)]
      let list = Object.keys(industries)
      industry = list[randomNumber(list.length)]
      emoji = emojis[randomNumber(emojis.length)]
      good = candidate.industries.indexOf(industry) < 0
    }
  }

  function capitalize(text) {
    return `${text.substr(0, 1).toUpperCase()}${text.substr(1)}`
  }

  generate()
</script>

<header>
 <h1>Unicorn Generator 🦄</h1>
</header>

<div class="container">
  <div class="candidate">
   <h2 data-testid="company">{candidate.name}</h2>
   <p>for</p>
   <h3 data-testid="industry">{capitalize(industry)} {emoji}</h3>
  </div>
</div>

<footer>
 <button type="button" on:click={generate}>
   <span>Generate another</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
 </button>
</footer>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(body) {
    padding: 0;
  }

  header {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
  }

  footer {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    margin: 1rem;
    padding: 0rem;
    width: 100vw;
  }

  .container {
    display: flex;
  }

  .candidate {
    place-self: center;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }

  h1, h2, h3, p {
    place-self: center;
    text-align: center;
  }

  h2 {
    text-decoration: underline;
    text-decoration-color: pink;

  }

  h3 {
    color: #555;
  }

  h1 {
    font-size: 2rem;
    background: pink;
    transform: rotate(-1deg);
    padding: 1rem;
    transition: all 0.3s ease;
    letter-spacing: -1.5px;
  }

  h1:hover {
    transform: rotate(-3deg)
  }

  button {
    padding: 1rem;
    cursor: pointer;
    background: #444;
    color: white;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-size: 1.2rem;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 100%;
  }

  button svg {
    width: 25px;
    height: 25px;
    transition: all 0.3s ease;
  }

  button:hover {
    background: #666;
  }
  button:hover svg {
    transform: rotate(30deg);
  }

  @media screen and (min-width: 480px) {
    button {
      max-width: 300px;
      margin: 2rem 0;
    }

    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 4rem;
    }
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 2.2rem;
    }
  }

</style>
