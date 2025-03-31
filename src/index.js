import { PersonagemView } from "./components/personagem-view.js";
import { Personagem } from "./modules/Personagem.js";
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoAntonio=new Mago('Antônio', 4, 'Fogo', 4, 3)
const magaJulia=new Mago('Júlia', 8, 'Gelo', 7, 10)
const arqueiroPedro=new Arqueiro('Pedro', 7, 6)
const arqueiroMagoChico=new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8)


const personagens=[magoAntonio, magaJulia, arqueiroPedro, arqueiroMagoChico];

new PersonagemView(personagens).render()

