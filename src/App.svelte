<script>
  import { organizations, industries } from './data'

  let candidate, industry

  function randomNumber(max) {
    return Math.floor(Math.random() * max)
  }

  function generate() {
    candidate = organizations[randomNumber(organizations.length)]
    let list = Object.keys(industries)
    industry = list[randomNumber(list.length)]
  }

  generate()
</script>

<div class="container">
 <h1>Unicorn Generator 🦄</h1>

 <h2>{candidate.name}</h2>
 <p>for</p>
 <h2>{industry}</h2>

 <button type="button" on:click={generate}>
  Generate another 💡
 </button>
</div>

<style>
 .container {
  place-self: center;
  display: flex;
  flex-direction: column;
 }

 h1, h2, p {
  place-self: center;
 }

 h1 {
  background: pink;
  transform: rotate(-1deg);
  padding: 1rem;
  transition: all 0.3s ease;
 }

 h1:hover {
  transform: rotate(-3deg)
 }

 button {
  margin-top: 2rem;
  padding: 1rem;
  min-width: 400px;
  place-self: center;
  cursor: pointer;
  background: #666;
  color: white;
  border-radius: 5px;
  transition: transform 0.3s ease;
    font-size: 1.2rem;
 }

 button:hover {
  background: #444;
  transform: scale(1.1);
 }

</style>
