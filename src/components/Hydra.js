import Hydra from 'hydra-synth'

const hydra_ = () =>{

    const h = new Hydra({
        detectAudio: false,
        canvas: document.getElementById('hydraCanvas'),      
        numSources: 4,
        autoLoop: true,
        makeGlobal: false
    }).synth
        h.s0.init({src:document.getElementById('myCanvas_')})
        //h.src(h.s0).modulate(h.osc(3,1.)).out()
        h.src(h.s0).modulate(h.noise(5)).modulateScale(h.osc(()=>sasa*Math.sin(time))).modulate(h.osc(()=>sasa*20)).out()
    //hydra.eval("osc(30).out()")
    

}
hydra_()

export default hydra_