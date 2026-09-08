let seatChoice="Main Room";
const zones=document.querySelectorAll("[data-zone]");
zones.forEach(button=>button.addEventListener("click",()=>{
  zones.forEach(item=>item.classList.remove("selected"));
  button.classList.add("selected");
  seatChoice=button.dataset.zone;
}));
document.querySelector("[data-zone='Main Room']").classList.add("selected");
document.querySelector("#booking").addEventListener("submit",()=>{
  requestAnimationFrame(()=>{
    document.querySelector("#confirmation").textContent+=" Seating: "+seatChoice+".";
  });
});
