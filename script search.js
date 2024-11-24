search_button.addEventListener("click",()=>{

  

    const button_search = document.getElementById("search_button")
    const bar_search = document.getElementById("search_bar")
    if (bar_search.value.length > 3){
      if ((bar_search.value == "Iphone") || (bar_search.value == "Infinix") || (bar_search.value == "Itel") || (bar_search.value == 'Samsung') || (bar_search.value == "Xiaomi")){
        if (bar_search.value == "Iphone") {
          window.open('Toko Iphone All.html')
        }
        else if (bar_search.value == "Infinix"){
          window.open('Toko Infinix All.html')
        }
        else if (bar_search.value == "Itel"){
          window.open('Toko Itel All.html')
        }
        else if (bar_search.value == "Samsung"){
          window.open('Toko Samsung All.html')
        }
        else if (bar_search.value == "Xiaomi"){
          window.open('Toko Xiaomi All.html')
        }
        else {
          alert('Maaf. Namun toko kami tak menyediakan HP tersebut')
        }}
      else {
      alert('Maaf. Masukkan merek HP yang valid')
    }}
    else {
      alert('Maaf, merek HP terlalu pendek')
    }
      
    
    })