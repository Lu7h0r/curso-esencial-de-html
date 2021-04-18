const $detailsList = document.querySelectorAll('details')
$detailsList.forEach(($details) => {
  $details.querySelector('summary').addEventListener('click', expandir)
  function expandir(){
    $detailsList.forEach(($details) => {
      $details.removeAttribute('open')
    })
  }
})