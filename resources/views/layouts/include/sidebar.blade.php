<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="https://firesafetyfest-sidamkar.kemendagri.go.id/" class="brand-link">
      <img src="{{ asset('AdminLTE-3.2.0/dist/img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Admin</span>
    </a>
    <div class="sidebar">
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
            <a href="/pegawai" class="nav-link {{ ($active === "pegawai") ? 'active' : '' }}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Data Sertifikat Diklat Aparatur Damkar
              </p>
            </a>
          </li>
        </ul>

        @can('admin')
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-header">USER MANAGEMENT</li>
            <li class="nav-item">
            <a href="/register" class="nav-link {{ Request::is('register') ? 'active' : '' }}">
              <i class="nav-icon fas fa-user"></i>
              <p>
                User Register
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
    @endcan

