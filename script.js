// Click the email card to copy the address
const emailCard = document.getElementById("emailCard");
const note = document.getElementById("copyNote");
let timer;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // Fallback for browsers/pages where the Clipboard API is blocked
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

emailCard.addEventListener("click", async () => {
  await copyText(emailCard.dataset.email);
  note.classList.add("show");
  clearTimeout(timer);
  timer = setTimeout(() => note.classList.remove("show"), 1800);
});