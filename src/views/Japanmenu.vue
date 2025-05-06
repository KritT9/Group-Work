<template>
  <!-- Add Bootstrap container wrapper to ensure full content stays within bounds -->
  <div class="container-fluid px-0">
    <!-- Header with proper container -->
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom px-3">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-3">
        <li class="nav-item"><a class="btn btn-outline-danger" href="#sushi">Sushi</a></li>
        <li class="nav-item"><a class="btn btn-outline-danger" href="#ramen">Ramen</a></li>
        <li class="nav-item"><a class="btn btn-outline-danger" href="#donburi">Donburi</a></li>
        <li class="nav-item"><a class="btn btn-outline-danger" href="#drinks">Drinks</a></li>
      </ul>

      <div class="col-md-3 text-end">
      </div>
    </header>
  
    <div class="container">
      <!-- หมวด Sushi -->
      <div class="mb-4">
        <h1>Popular Menu</h1>
      </div>
      <div class="text-center">
            <div class="container marketing">
              <div class="row md-4 mt-5">
                <div class="col-lg-3 col-md-6 mb-4">
                  <img src="../assets/w1.jpg" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Profile image">
                  <h2 class="fw-bold text-danger">Salmon Nigiri</h2>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                  <img src="../assets/w2.jpg" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Profile image">
                  <h2 class="fw-bold text-danger">Shoyu Ramen</h2>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                  <img src="../assets/w3.jpg" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Profile image">
                  <h2 class="fw-bold text-danger">Katsudon</h2>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                  <img src="../assets/w4.jpg" class="bd-placeholder-img rounded-circle" width="140" height="140" alt="Profile image">
                  <h2 class="fw-bold text-danger">Yuzu Soda</h2>
                </div>
              </div>
            </div>
          </div>
      <div class="mb-4">
        <h1>Sushi</h1>
      </div>
      <div id="sushi">
        <div class="row">
          <!-- 1 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/j1.jpg" class="card-img-top" alt="Salmon Nigiri">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Salmon Nigiri</h5>
                <p class="card-text">ข้าวปั้นหน้าปลาแซลมอนสด</p>
                <p class="fw-bold text-danger text-center mt-auto">฿60</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/j2.jpg" class="card-img-top" alt="Tuna Nigiri">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Tuna Nigiri</h5>
                <p class="card-text">ข้าวปั้นหน้าปลาทูน่า</p>
                <p class="fw-bold text-danger text-center mt-auto">฿65</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/j3.jpg" class="card-img-top" alt="Tamago Sushi">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Tamago Sushi</h5>
                <p class="card-text">ข้าวปั้นหน้าไข่หวานญี่ปุ่น</p>
                <p class="fw-bold text-danger text-center mt-auto">฿40</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/j5.jpg" class="card-img-top" alt="Ebi Sushi">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Ebi Sushi</h5>
                <p class="card-text">ข้าวปั้นหน้ากุ้งลวก</p>
                <p class="fw-bold text-danger text-center mt-auto">฿55</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- หมวด Ramen -->
      <div class="mb-4">
        <h1>Ramen</h1>
      </div>
      <div id="ramen">
        <div class="row">
          <!-- 1 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/m1.jpg" class="card-img-top" alt="Tonkotsu Ramen">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Tonkotsu Ramen</h5>
                <p class="card-text">ราเมนน้ำซุปกระดูกหมูเคี่ยวเข้มข้น เส้นเหนียวนุ่ม โรยหน้าด้วยชาชู ไข่ต้มยางมะตูม และต้นหอม</p>
                <p class="fw-bold text-danger text-center mt-auto">฿149</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/m2.jpg" class="card-img-top" alt="Shoyu Ramen">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Shoyu Ramen</h5>
                <p class="card-text">ราเมนซุปโชยุรสกลมกล่อม เสิร์ฟพร้อมหมูชาชู หน่อไม้ และสาหร่ายโนริ</p>
                <p class="fw-bold text-danger text-center mt-auto">฿139</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/m3.jpg" class="card-img-top" alt="Miso Ramen">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Miso Ramen</h5>
                <p class="card-text">ราเมนน้ำซุปมิโสะสูตรเข้มข้นจากฮอกไกโด เพิ่มรสชาติด้วยเนย หอมใหญ่ และข้าวโพด</p>
                <p class="fw-bold text-danger text-center mt-auto">฿139</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/m4.jpg" class="card-img-top" alt="Spicy Raku Ramen">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Spicy Raku Ramen</h5>
                <p class="card-text">ราเมนรสเผ็ดซดคล่องคอ เสิร์ฟพร้อมหมูชาชู, ไข่ต้ม, หน่อไม้, พริกคั่วญี่ปุ่น และซุปเผ็ดสูตรพิเศษ</p>
                <p class="fw-bold text-danger text-center mt-auto">฿159</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- หมวด Donburi -->
      <div class="mb-4">
        <h1>Donburi</h1>
      </div>
      <div id="donburi">
        <div class="row">
          <!-- 1 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/d1.png" class="card-img-top" alt="Tonkatsu Don">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Tonkatsu Don</h5>
                <p class="card-text">ข้าวญี่ปุ่นเสิร์ฟพร้อมหมูทอดทงคัตสึกรอบนอกนุ่มใน ราดซอสทงคัตสึ</p>
                <p class="fw-bold text-danger text-center mt-auto">฿129</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/d3.png" class="card-img-top" alt="Teriyaki Chicken Don">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Teriyaki Chicken Don</h5>
                <p class="card-text">ไก่ย่างซอสเทอริยากิเข้มข้น วางบนข้าวญี่ปุ่น โรยงาขาวและต้นหอม</p>
                <p class="fw-bold text-danger text-center mt-auto">฿119</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/d4.png" class="card-img-top" alt="Kaisen Don">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Kaisen Don</h5>
                <p class="card-text">ข้าวซูชิ topped ด้วยแซลมอน, ทูน่า, ปลาหมึก, และไข่ปลาแซลมอน</p>
                <p class="fw-bold text-danger text-center mt-auto">฿199</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/d2.png" class="card-img-top" alt="Katsudon">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Katsudon</h5>
                <p class="card-text">ข้าวหน้าหมูทอดราดไข่</p>
                <p class="fw-bold text-danger text-center mt-auto">฿139</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- หมวด Drinks -->
      <div class="mb-4">
        <h1>Drink</h1>
      </div>
      <div id="drinks">
        <div class="row">
          <!-- 1 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/n1.png" class="card-img-top" alt="Cold Green Tea">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Cold Green Tea</h5>
                <p class="card-text">ชาเขียวญี่ปุ่นเย็น หอมสดชื่น ไม่หวาน</p>
                <p class="fw-bold text-danger text-center mt-auto">฿59</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/n4.png" class="card-img-top" alt="Yuzu Soda">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Yuzu Soda</h5>
                <p class="card-text">โซดาผสมน้ำส้มยูซุ กลิ่นหอมซ่า ๆ สดชื่นสุด ๆ</p>
                <p class="fw-bold text-danger text-center mt-auto">฿59</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/n1.png" class="card-img-top" alt="Iced Matcha Latte">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Iced Matcha Latte</h5>
                <p class="card-text">ชาเขียวมัทฉะเข้มข้น ผสมนมสด หอมละมุน</p>
                <p class="fw-bold text-danger text-center mt-auto">฿149</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="col-md-3 mb-4">
            <div class="card h-100">
              <img src="../assets/n2.png" class="card-img-top" alt="Imported Mineral Water">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">Imported Mineral Water</h5>
                <p class="card-text">น้ำแร่จากญี่ปุ่นในขวดพรีเมียม</p>
                <p class="fw-bold text-danger text-center mt-auto">฿39</p>
                <div class="text-center">
                  <a href="#" class="btn btn-outline-danger">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Add a footer with some padding to avoid content bunching at bottom -->
    <div class="container">
      <footer class="py-3 my-4">
        <p class="text-center text-muted">© 2025 Japanese Restaurant</p>
      </footer>
    </div>
  </div>
</template>