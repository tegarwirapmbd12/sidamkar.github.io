<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="{{ url('https://firesafetyfest-sidamkar.kemendagri.go.id/') }}" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      @auth
      <div class="btn-group">
        <button type="button" class="btn btn-default">{{ Auth()->user()->name }}</button>
        <button type="button" class="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu" role="menu">
            <li><a class="dropdown-item" href="/dashboard"><i class="bi bi-layout-text-window"></i>Profil</a></li>
              <li><hr class="dropdown-divider"></li>
            <form action="/logout" method="post">
            @csrf
            <button type="submit" class="dropdown-item">Logout</button>
          </form>
        </div>
      </div>
      @endauth

    </ul>
  </nav>

