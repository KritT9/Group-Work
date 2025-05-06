<template>
  <main>
    <div class="container-fluid px-0">
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item carousel-item-next carousel-item-start">
            <img src="../assets/1.png" class="d-block w-100" alt="อาหารอร่อย" />
          </div>
          <div class="carousel-item">
            <img src="../assets/2.png" class="d-block w-100" alt="อาหารอร่อย" />
          </div>
          <div class="carousel-item">
            <img src="../assets/3.png" class="d-block w-100" alt="อาหารอร่อย" />
          </div>
          <div class="carousel-item active carousel-item-start">
            <img src="../assets/4.png" class="d-block w-100" alt="อาหารอร่อย" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      <div class="p-3 mb-2 text-white" style="background-color: #DEB887;">
        <div class="container">
          <div class="text-center">
          </div>

          <!-- START THE FEATURETTES -->
          <hr class="featurette-divider">

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">Delivery <span class="text-body-secondary">24 hour food delivery services</span></h2>
              <p class="lead">Never go hungry again — day or night. With round-the-clock delivery, your favorite meals are always just a few taps away.</p>
            </div>
            <div class="col-md-5">
              <img src="../assets/1.1.jpg" class="img-fluid" alt="Delivery service image">
            </div>
          </div>

          <hr class="featurette-divider">

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">Taste That Speaks for Itself</h2>
              <p class="lead">The taste speaks louder than words. Discover a flavor so good, it'll keep you coming back for more — one bite and you'll believe it.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src="../assets/1.2.jpg" class="img-fluid" alt="Food image">
            </div>
          </div>

          <hr class="featurette-divider">

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">The Perfect Combo, Every Time</h2>
              <p class="lead">When flavor and value come together — this is the winning move. The ultimate meal deal that satisfies your cravings and your wallet.</p>
            </div>
            <div class="col-md-5">
              <img src="../assets/1.3.jpg" class="img-fluid" alt="Food combo image">
            </div>
          </div>

          <!-- /END THE FEATURETTES -->
        </div>
      </div>

    </div>
  </main>
</template>