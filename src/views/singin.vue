<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card p-4 shadow w-100" style="max-width: 500px;">
        <h3 class="text-center mb-4">สร้างบัญชี</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label class="form-label">ชื่อจริง*</label>
            <input v-model="form.firstName" type="text" class="form-control" required />
          </div>
  
          <div class="mb-3">
            <label class="form-label">นามสกุล*</label>
            <input v-model="form.lastName" type="text" class="form-control" required />
          </div>
  
          <div class="mb-3">
            <label class="form-label">ที่อยู่อีเมล*</label>
            <input v-model="form.email" type="email" class="form-control" required />
          </div>
  
          <div class="mb-3">
            <label class="form-label">เบอร์มือถือ*</label>
            <input v-model="form.phone" type="tel" class="form-control" required />
          </div>
  
          <div class="mb-3">
            <label class="form-label">วันเดือนปีเกิด*</label>
            <div class="d-flex gap-2">
              <select v-model="form.day" class="form-select" required>
                <option disabled value="">วัน</option>
                <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
              </select>
              <select v-model="form.month" class="form-select" required>
                <option disabled value="">เดือน</option>
                <option v-for="(m, index) in months" :key="index" :value="index + 1">{{ m }}</option>
              </select>
              <select v-model="form.year" class="form-select" required>
                <option disabled value="">ปี</option>
                <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
              </select>
            </div>
          </div>
  
          <div class="form-check mb-2">
            <input type="checkbox" v-model="form.acceptTerms" class="form-check-input" id="termsCheck" required />
            <label class="form-check-label" for="termsCheck">
              ยอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว
            </label>
          </div>
  
          <div class="form-check mb-4">
            <input type="checkbox" v-model="form.marketingConsent" class="form-check-input" id="marketingCheck" />
            <label class="form-check-label" for="marketingCheck">
              ยินยอมรับข่าวสารและสิทธิพิเศษจาก RAKU RAKU
            </label>
          </div>
  
          <button type="submit" class="btn btn-danger w-100">สมัครสมาชิก Raku Raku</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    day: '',
    month: '',
    year: '',
    acceptTerms: false,
    marketingConsent: false,
  });
  
  const months = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  
  function submitForm() {
    if (form.acceptTerms) {
      alert('ลงทะเบียนสำเร็จ');
      console.log(form);
    } else {
      alert('กรุณายอมรับข้อตกลงก่อน');
    }
  }
  </script>
  