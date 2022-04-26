function pokemon() {
  const pokemons = getPokemon();
  const pokemonContainer = document.getElementById("pokemonContainer");

  pokemonContainer.innerHTML = "";

  document.getElementById("close_pokemon").style.display = "block";

  for (let i = 0; i < pokemons.length; i++) {
    let pokemon = pokemons[i];
    const eachPokemon = document.createElement("div");
    eachPokemon.setAttribute("class", "eachPokemon");
    const name = document.createElement("h6");
    name.setAttribute("class", "pokemon_name");
    const img = document.createElement("img");
    img.setAttribute("class", "pokemon_img");

    name.innerHTML = pokemon.name;
    img.setAttribute("src", pokemon.img);

    eachPokemon.appendChild(name);
    eachPokemon.appendChild(img);
    pokemonContainer.appendChild(eachPokemon);
  }
}

function closePokemon() {
  const pokemonContainer = document.getElementById("pokemonContainer");

  pokemonContainer.innerHTML = "";
  document.getElementById("close_pokemon").style.display = "none";
}

function getPokemon() {
  return [
    { name: "Bulbasaur", img: "./pokemon/1.bulbasaur.jpg" },
    { name: "Ivysaur", img: "./pokemon/2.ivysaur.jpg" },
    { name: "Venusaur", img: "./pokemon/3.venusaur.jpg" },
    { name: "Charmander", img: "./pokemon/4.charmander.jpg" },
    { name: "Charmeleon", img: "./pokemon/5.charmeleon.jpg" },
    { name: "Charizard", img: "./pokemon/6.charizard.jpg" },
    { name: "Squirtle", img: "./pokemon/7.squirtle.jpg" },
    { name: "Wortortle", img: "./pokemon/8.wortortle.jpg" },
    { name: "Blastoise", img: "./pokemon/9.blastoise.jpg" },
    { name: "Caterpie", img: "./pokemon/10.caterpie.jpg" },
    { name: "Metapod", img: "./pokemon/11.metapod.jpg" },
    { name: "Butterfree", img: "./pokemon/12.butterfree.jpg" },
    { name: "Weedle", img: "./pokemon/13.weedle.jpg" },
    { name: "Kakuna", img: "./pokemon/14.kakuna.jpg" },
    { name: "Beedrill", img: "./pokemon/15.beedrill.jpg" },
    { name: "Pidgey", img: "./pokemon/16.pidgey.jpg" },
    { name: "Pidgeotto", img: "./pokemon/17.pidgeotto.jpg" },
    { name: "Pidgeot", img: "./pokemon/18.pidgeot.jpg" },
    { name: "Rattata", img: "./pokemon/19.rattata.jpg" },
    { name: "Raticate", img: "./pokemon/20.raticate.jpg" },
    { name: "Spearow", img: "./pokemon/21.spearow.jpg" },
    { name: "Fearow", img: "./pokemon/22.fearow.jpg" },
    { name: "Ekans", img: "./pokemon/23.ekans.jpg" },
    { name: "Arbok", img: "./pokemon/24.arbok.jpg" },
    { name: "Pikachu", img: "./pokemon/25.pikachu.png" },
    { name: "Raichu", img: "./pokemon/26.raichu.jpg" },
    { name: "Sandshrew", img: "./pokemon/27.sandshrew.jpg" },
    { name: "Sandslash", img: "./pokemon/28.sandslash.jpg" },
    { name: "Nidoran(f)", img: "./pokemon/29.nidoran_female.jpg" },
    { name: "Nidorina", img: "./pokemon/30.nidorina.jpg" },
    { name: "Nidoqueen", img: "./pokemon/31.nidoqueen.jpg" },
    { name: "Nidoran(m)", img: "./pokemon/32.nidoran_male.jpg" },
    { name: "Nidorino", img: "./pokemon/33.nidorino.jpg" },
    { name: "Nidoking", img: "./pokemon/34.nidoking.jpg" },
    { name: "Clefairy", img: "./pokemon/35.clefairy.jpg" },
    { name: "Clefable", img: "./pokemon/36.clefable.jpg" },
    { name: "Vuplix", img: "./pokemon/37.vulpix.jpg" },
    { name: "Ninetales", img: "./pokemon/38.ninetales.jpg" },
    { name: "Jigglypuff", img: "./pokemon/39.jigglypuff.jpg" },
    { name: "Wigglytuff", img: "./pokemon/40.wigglytuff.jpg" },
    { name: "Zubat", img: "./pokemon/41.zubat.jpg" },
    { name: "Golbat", img: "./pokemon/42.golbat.jpg" },
    { name: "Oddish", img: "./pokemon/43.oddish.jpg" },
    { name: "Gloom", img: "./pokemon/44.gloom.jpg" },
    { name: "Vileplum", img: "./pokemon/45.vileplum.jpg" },
    { name: "Paras", img: "./pokemon/46.paras.jpg" },
    { name: "Parasect", img: "./pokemon/47.parasect.jpg" },
    { name: "Venonat", img: "./pokemon/48.venonat.jpg" },
    { name: "Venomoth", img: "./pokemon/49.venomoth.jpg" },
    { name: "Diglett", img: "./pokemon/50.diglett.jpg" },
    { name: "Dugtrio", img: "./pokemon/51.dugtrio.jpg" },
    { name: "Meowth", img: "./pokemon/52.meowth.jpg" },
    { name: "Persian", img: "./pokemon/53.persian.jpg" },
    { name: "Psyduck", img: "./pokemon/54.psyduck.jpg" },
    { name: "Golduck", img: "./pokemon/55.golduck.jpg" },
    { name: "Mankey", img: "./pokemon/56.mankey.jpg" },
    { name: "Primeape", img: "./pokemon/57.primeape.jpg" },
    { name: "Growlithe", img: "./pokemon/58.growlithe.jpg" },
    { name: "Arcanine", img: "./pokemon/59.arcanine.jpg" },
    { name: "Poliwag", img: "./pokemon/60.poliwag.jpg" },
    { name: "Poliwhirl", img: "./pokemon/61.poliwhirl.jpg" },
    { name: "Poliwrath", img: "./pokemon/62.poliwrath.jpg" },
    { name: "Abra", img: "./pokemon/63.abra.jpg" },
    { name: "Kadabra", img: "./pokemon/64.kadabra.jpg" },
    { name: "Alakazam", img: "./pokemon/65.alakazam.jpg" },
    { name: "Machop", img: "./pokemon/66.machop.jpg" },
    { name: "Machoke", img: "./pokemon/67.machoke.jpg" },
    { name: "Machamp", img: "./pokemon/68.machamp.jpg" },
    { name: "Bellsprout", img: "./pokemon/69.bellsprout.png" },
    { name: "Weepinbell", img: "./pokemon/70.weepinbell.jpg" },
    { name: "Victreebell", img: "./pokemon/71.victreebell.jpg" },
    { name: "tentacool", img: "./pokemon/72.tentacool.jpg" },
    { name: "Tentacruel", img: "./pokemon/73.tentacruel.jpg" },
    { name: "Geodude", img: "./pokemon/74.geodude.jpg" },
    { name: "Graveler", img: "./pokemon/75.graveler.jpg" },
    { name: "Golem", img: "./pokemon/76.golem.jpg" },
    { name: "Ponyta", img: "./pokemon/77.ponyta.jpg" },
    { name: "Rapidash", img: "./pokemon/78.rapidash.jpg" },
    { name: "Slowpoke", img: "./pokemon/79.slowpoke.jpg" },
    { name: "Slowbro", img: "./pokemon/80.slowbro.jpg" },
    { name: "Magnemite", img: "./pokemon/81.magnemite.jpg" },
    { name: "Magneton", img: "./pokemon/82.magneton.jpg" },
    { name: "farfetch'd", img: "./pokemon/83.farfetch_d.jpg" },
    { name: "Doduo", img: "./pokemon/84.doduo.jpg" },
    { name: "Dodrio", img: "./pokemon/85.dodrio.jpg" },
    { name: "Seel", img: "./pokemon/86.seel.jpg" },
    { name: "Dewgong", img: "./pokemon/87.dewgong.jpg" },
    { name: "Grimer", img: "./pokemon/88.grimer.jpg" },
    { name: "Muk", img: "./pokemon/89.muk.jpg" },
    { name: "Shellder", img: "./pokemon/90.sellder.jpg" },
    { name: "Cloyster", img: "./pokemon/91.cloyster.jpg" },
    { name: "Ghastly", img: "./pokemon/92.ghastly.jpg" },
    { name: "Haunter", img: "./pokemon/93.haunter.jpg" },
    { name: "Gengar", img: "./pokemon/94.gengar.jpg" },
    { name: "Onix", img: "./pokemon/95.onix.jpg" },
    { name: "Drowzee", img: "./pokemon/96.drowzee.jpg" },
    { name: "Hypno", img: "./pokemon/97.hypno.jpg" },
    { name: "Krabby", img: "./pokemon/98.krabby.jpg" },
    { name: "Kingler", img: "./pokemon/99.kingler.jpg" },
    { name: "Voltorb", img: "./pokemon/100.voltorb.jpg" },
    { name: "Electrode", img: "./pokemon/101.electrode.jpg" },
    { name: "Exeggute", img: "./pokemon/102.exeggute.jpg" },
    { name: "Exeggcutor", img: "./pokemon/103.exeggcutor.jpg" },
    { name: "Cubone", img: "./pokemon/104.cubone.jpg" },
    { name: "Marowak", img: "./pokemon/105.marowak.jpg" },
    { name: "Hitmonlee", img: "./pokemon/106.hitmonlee.jpg" },
    { name: "Hitmonchan", img: "./pokemon/107.hitmonchan.jpg" },
    { name: "Lickitung", img: "./pokemon/108.lickitung.jpg" },
    { name: "Koffing", img: "./pokemon/109.koffing.jpg" },
    { name: "Weezing", img: "./pokemon/110.weezing.jpg" },
    { name: "Rhyhorn", img: "./pokemon/111.rhyhorn.jpg" },
    { name: "Rhydon", img: "./pokemon/112.rhydon.jpg" },
    { name: "Chansey", img: "./pokemon/113.chansey.jpg" },
    { name: "Tangela", img: "./pokemon/114.tangela.jpg" },
    { name: "Kangaskhan", img: "./pokemon/115.kangaskhan.jpg" },
    { name: "Horsea", img: "./pokemon/116.horsea.jpg" },
    { name: "Seadra", img: "./pokemon/117.seadra.jpg" },
    { name: "Goldeen", img: "./pokemon/118.goldeen.jpg" },
    { name: "Seaking", img: "./pokemon/119.seaking.jpg" },
    { name: "Staryu", img: "./pokemon/120.staryu.jpg" },
    { name: "Starmie", img: "./pokemon/121.starmie.jpg" },
    { name: "Mr Mime", img: "./pokemon/123.mr-mime.jpg" },
    { name: "Scyther", img: "./pokemon/124.scyther.jpg" },
    { name: "Jynx", img: "./pokemon/125.jynx.jpg" },
    { name: "Electabuzz", img: "./pokemon/126.electabuzz.jpg" },
    { name: "Magmar", img: "./pokemon/127.magmar.jpg" },
    { name: "Pinsir", img: "./pokemon/128.pinsir.jpg" },
    { name: "Tauros", img: "./pokemon/129.tauros.jpg" },
    { name: "Magikarp", img: "./pokemon/130.magikarp.jpg" },
    { name: "Gyarados", img: "./pokemon/131.gyarados.jpg" },
    { name: "Lapras", img: "./pokemon/132.lapras.jpg" },
    { name: "Ditto", img: "./pokemon/133.ditto.jpg" },
    { name: "Eevee", img: "./pokemon/134.eevee.jpg" },
    { name: "Vaporeon", img: "./pokemon/135.vaporeon.jpg" },
    { name: "Jolteon", img: "./pokemon/136.jolteon.jpg" },
    { name: "Flareon", img: "./pokemon/137.flareon.jpg" },
    { name: "Porygon", img: "./pokemon/138.porygon.jpg" },
    { name: "Omanyte", img: "./pokemon/139.omanyte.jpg" },
    { name: "Omastar", img: "./pokemon/140.omastar.jpg" },
    { name: "Kabuto", img: "./pokemon/141.kabuto.jpg" },
    { name: "Kabutops", img: "./pokemon/142.kabutops.jpg" },
    { name: "Aerodactyl", img: "./pokemon/143.aerodactyl.jpg" },
    { name: "Snorlax", img: "./pokemon/144.snorlax.jpg" },
    { name: "Articuno", img: "./pokemon/145.articuno.jpg" },
    { name: "Zapdos", img: "./pokemon/146.zapdos.jpg" },
    { name: "Moltres", img: "./pokemon/147.moltres.jpg" },
    { name: "Dratini", img: "./pokemon/148.dratini.jpg" },
    { name: "Dragonair", img: "./pokemon/149.dragonair.jpg" },
    { name: "Dragonite", img: "./pokemon/150.dragonite.jpg" },
    { name: "Mewtwo", img: "./pokemon/151.mewtwo.jpg" },
    { name: "Mew", img: "./pokemon/152.mew.jpg" },
  ];
}
//module.exports = pokemon;

// module.exports = pokemon;
