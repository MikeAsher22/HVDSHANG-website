
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("flowers");
    clearTimeout(c);
  }, 1000);
};