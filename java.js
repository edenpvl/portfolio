document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita l'invio del form per test
  alert('Grazie per avermi contattato!');
});