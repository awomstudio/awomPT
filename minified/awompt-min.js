class awomPT{constructor(a="slide",e={}){this.type=a,this.parameters={col:6,duration:.5,gapDelay:.02,delay:0,ease:"ease-out",easeClosing:!1,...e},this.init()}init(){this.startAnimation(),this.endAnimation()}startAnimation(){var a,e,t=document.querySelector(".awompt"),i=0,s=getComputedStyle(t).backgroundColor;switch(t.classList.add("awompt_remove_bg"),this.type){case"slide":for(let a=0;a<this.parameters.col;a++)(e=document.createElement("div")).classList.add("awompt_box"),e.classList.add("awompt_box_"+a),t.appendChild(e),e.classList.add("start_animation_slide"),e.style.backgroundColor=s,e.style.width=100/this.parameters.col+"%",e.style.animationDuration=`${this.parameters.duration}s`,e.style.animationDelay=`${i+=0===a?this.parameters.delay:this.parameters.gapDelay}s`,e.style.animationTimingFunction=this.parameters.ease;break;case"fade":(e=document.createElement("div")).classList.add("awompt_box"),t.appendChild(e),e.classList.add("start_animation_fade"),e.style.backgroundColor=s,e.style.animationDuration=`${this.parameters.duration}s`,e.style.animationDelay=`${this.parameters.delay}s`,e.style.animationTimingFunction=this.parameters.ease;break;case"zoom":for(document.querySelector(".awompt").style.display="none",(a=document.createElement("div")).classList.add("awompt_zoom");document.body.firstChild;)a.appendChild(document.body.firstChild);document.body.appendChild(a),a.classList.add("start_animation_zoom"),a.style.animationDuration=`${this.parameters.duration}s`,a.style.animationDelay=`${this.parameters.delay}s`,a.style.animationTimingFunction=this.parameters.ease;break;case"zoomAndSlideUp":for(document.querySelector(".awompt").style.display="none",(a=document.createElement("div")).classList.add("awompt_zoom");document.body.firstChild;)a.appendChild(document.body.firstChild);document.body.appendChild(a),a.classList.add("start_animation_zoom_slide_up"),a.style.animationDuration=`${this.parameters.duration}s`,a.style.animationDelay=`${this.parameters.delay+.25}s`,a.style.animationTimingFunction=this.parameters.ease;break;case"slideUp":for(document.querySelector(".awompt").style.display="none",(a=document.createElement("div")).classList.add("awompt_zoom");document.body.firstChild;)a.appendChild(document.body.firstChild);document.body.appendChild(a),a.classList.add("start_animation_slide_up"),a.style.animationDuration=`${this.parameters.duration}s`,a.style.animationDelay=`${this.parameters.delay+.25}s`,a.style.animationTimingFunction=this.parameters.ease;break;case"line":var n,o;t.classList.add("line_animation"),n=document.createElement("div"),o=document.createElement("div"),n.classList.add("awompt_box_left"),o.classList.add("awompt_box_right"),t.appendChild(n),t.appendChild(o),n.classList.add("start_animation_line_left"),o.classList.add("start_animation_line_right"),n.style.backgroundColor=s,n.style.animationDuration=`${this.parameters.duration}s`,n.style.animationDelay=`${this.parameters.delay}s`,n.style.animationTimingFunction=this.parameters.ease,o.style.backgroundColor=s,o.style.animationDuration=`${this.parameters.duration}s`,o.style.animationDelay=`${this.parameters.delay}s`,o.style.animationTimingFunction=this.parameters.ease;break}}endAnimation(){var a=document.querySelector(".awompt"),e=document.querySelector(".awompt_zoom"),t=document.querySelectorAll(".awompt_box"),i=document.querySelector(".awompt_box_left"),s=document.querySelector(".awompt_box_right");document.querySelectorAll("a").forEach((n=>{n.addEventListener("click",(o=>{if(!n.classList.contains("no_awompt")){o.preventDefault();const l=n.getAttribute("href");switch(this.type){case"slide":var r=0;a.classList.add("container_end_animation_slide"),t.forEach((a=>{a.classList.add("end_animation_slide"),a.style.animationTimingFunction=!1===this.parameters.easeClosing?this.parameters.ease:this.parameters.easeClosing,a.style.animationDelay=`${r+=this.parameters.gapDelay}s`})),setTimeout((()=>{window.location.href=l}),1e3*(this.parameters.gapDelay*this.parameters.col+this.parameters.duration));break;case"fade":t.forEach((a=>{a.classList.add("end_animation_fade"),a.style.animationTimingFunction=!1===this.parameters.easeClosing?this.parameters.ease:this.parameters.easeClosing,a.style.animationDelay="0s"})),setTimeout((()=>{window.location.href=l}),1e3*this.parameters.duration);break;case"zoom":e.classList.add("end_animation_zoom"),e.style.animationTimingFunction=!1===this.parameters.easeClosing?this.parameters.ease:this.parameters.easeClosing,e.style.animationDelay="0s",setTimeout((()=>{window.location.href=l}),1e3*this.parameters.duration);break;case"zoomAndSlideUp":e.classList.add("end_animation_zoom_slide_up"),e.style.animationDelay=`${this.parameters.delay}s`,e.style.animationTimingFunction=!1===this.parameters.easeClosing?this.parameters.ease:this.parameters.easeClosing,e.style.animationDelay="0s",setTimeout((()=>{window.location.href=l}),1e3*this.parameters.duration);break;case"slideUp":e.classList.add("end_animation_slide_up"),e.style.animationDelay=`${this.parameters.delay}s`,e.style.animationTimingFunction=!1===this.parameters.easeClosing?this.parameters.ease:this.parameters.easeClosing,e.style.animationDelay="0s",setTimeout((()=>{window.location.href=l}),1e3*this.parameters.duration);break;case"line":i.classList.add("end_animation_line_left"),s.classList.add("end_animation_line_right"),i.style.animationTimingFunction=!1===this.parameters.easeClosing?this.parameters.ease:this.parameters.easeClosing,i.style.animationDelay="0s",s.style.animationTimingFunction=!1===this.parameters.easeClosing?this.parameters.ease:this.parameters.easeClosing,s.style.animationDelay="0s",setTimeout((()=>{window.location.href=l}),1e3*this.parameters.duration);break}}}))}))}}