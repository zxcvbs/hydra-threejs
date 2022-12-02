import Hydra from 'hydra-synth'


//import * as dat from 'dat.gui'



const hydra_ = () =>{

    requestAnimationFrame( hydra_ );
    const hydra = new Hydra({
        detectAudio: false,
        canvas: document.getElementById('hydraCanvas'),      
        numSources: 4,
        autoLoop: true,
        makeGlobal: false
    }).synth
    hydra.osc(50,1,0).kaleid(5).out()
    //hydra.eval("osc(30).out()")


}
hydra_()

