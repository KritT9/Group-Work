<template>
  
  <header class="p-3 text-bg-danger">
    <div class="d-flex align-items-center  mb-md-0 me-md-auto text-secondary-emphasis ">
    
      <a href="/" class=" fw-bold mb-md-0 me-md-auto text-secondary-emphasis text-decoration-none p-3 mb-2">
        <h1 class="fw-bold text-light nav-link">Raku Raku</h1>
      </a>
      
      <ul class="text-secondary-emphasis nav nav nav-pills ">
        <li class="nav-item"><a href="/" class="fw-bold text-light nav-link" >Home</a></li>
        <li class="nav-item"><a href="/about" class="fw-bold text-light nav-link">About us</a></li> 
        <li class="nav-item"><a href="/japanmenu" class="fw-bold text-light nav-link">MENU</a></li>      
        <li class="nav-item"><a href="/singin" class="fw-bold text-light nav-link">Singin</a></li>
      </ul>
    </div>
  </header>



    
    
  <router-view/>
  
</template>