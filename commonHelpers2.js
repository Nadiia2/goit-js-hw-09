import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),e=a.querySelector('input[name="email"]'),t=a.querySelector('textarea[name="message"]'),o=JSON.parse(localStorage.getItem("feedback-form-state"));o&&(e.value=o.email||"",t.value=o.message||"");a.addEventListener("input",function(){const m={email:e.value.trim(),message:t.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(m))});a.addEventListener("submit",function(m){m.preventDefault();const r={email:e.value.trim(),message:t.value.trim()};console.log(r),localStorage.removeItem("feedback-form-state"),e.value="",t.value=""});
//# sourceMappingURL=commonHelpers2.js.map