import anime from 'animejs/lib/anime.es.js';
export function breakApart(breakType:string, txtRef:string, setAlternate:boolean,delayVal=0,stagger=false,staggerVal?:ReturnType<typeof anime.stagger>,offset="+=0"):anime.AnimeTimelineInstance {
    
    //Get copy
    if (document.querySelector(txtRef) === null) {
        console.error("Element not found");
       
    }
    document.querySelectorAll(txtRef).forEach(element=>{
      let str = element.textContent || "";
    
    
    if(breakType == "letters"){
      // Wrap a span around every letter
      str = str.replace(/\S/g, "<span aria-hidden='true'>$&</span>")
    }else if(breakType == "words"){
      //Wrap span around every word
      str = str.replace(/\S+/g, "<span aria-hidden='true'>$&</span>");
    }else if(breakType == "lines"){
      //Wrap span around every line
      str = str.replace(/.+$/gm, "<span class='newline' aria-hidden='true'>$&</span>");
    }
    
    //replace text with new text with spans
    element.innerHTML = str;
    
    //if alalternate true
    if(setAlternate){
      var letters = element.children;
      
      //Add even and odd classes
      for(let i=0; i < letters.length; i++){
    
        if(i % 2 == 0) {
            letters[i].classList.add('odd');
        } else {
             letters[i].classList.add('even');
        }
    
      }//end for loop
      
    }//end alternate
    })
    
    let t14 = anime.timeline({
        autoplay: false
      })
        .add({
          targets: txtRef + ' span',
          translateX: [80,0],
          opacity: [0,1],
          easing: "easeInOutElastic(0.7, .3)",
          duration: 2000,
          delay: (()=>(stagger?staggerVal: (el,i)=>delayVal + (50 * i)))()
        },offset)
    return t14;
}