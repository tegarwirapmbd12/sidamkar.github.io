<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="https://firesafetyfest-sidamkar.kemendagri.go.id/" class="brand-link">
      <img src="{{ asset('AdminLTE-3.2.0/dist/img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Admin</span>
    </a>
    <div class="sidebar">
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item menu-open">
            <a href="/pegawai" class="nav-link {{ Request::is('pegawai') ? 'active' : '' }}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Data Sertifikat Diklat Aparatur Damkar</p>
            </a>
          </li>
          <li class="nav-header">DATA MANAGEMENT</li>
          <li class="nav-item menu-open">
            <a href="/register" class="nav-link {{ Request::is('register') ? 'active' : '' }}">
              <i class="nav-icon fas fa-user"></i>
              <p>Management User</p>
            </a>
          </li>
      </nav>
    </div>
  </aside>




  <div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
    <label for="name">Nama</label>
    <input type="search" name="name" id="name" class="form-control filter" style="border: 1px solid black;">
</div>
<div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
    <label for="instansi">Instansi</label>
    <input type="search" name="instansi" id="instansi" class="form-control filter" style="border: 1px solid black;">
</div>
<div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
    <label for="kode_verifikasi">Kode Verifikasi</label>
    <input type="search" name="kode_verifikasi" id="kode_verifikasi" class="form-control filter" style="border: 1px solid black;">
</div>
<div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
    <label for="province_id">Provinsi</label>
    <select id="province_id" class="form-control has-value filter" style="border: 1px solid black;" name="province_id">
        <option value="">-- select --</option>
        @foreach($province_id as $province)
        <option value="{{ $province->id }}">{{ $province->name }}</option>
        @endforeach
    </select>
</div>



cara mengatasi url http://127.0.0.1:8000/search? setelah melakukan pencarian
