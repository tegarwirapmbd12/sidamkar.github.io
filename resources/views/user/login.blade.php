<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sidamkar | Login</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('AdminLTE-3.2.0/plugins/fontawesome-free/css/all.min.css') }}">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="{{ asset('AdminLTE-3.2.0/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('AdminLTE-3.2.0/dist/css/adminlte.min.css') }}">
  <style>
    body{
        background: linear-gradient(135deg, #F70D1A, #F75D59, #E77471);
    }
  </style>
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <img src="{{ asset('AdminLTE-3.2.0/docs/assets/img/LOGO-DAMKAR.png') }}" class="logo" alt="Logo" style="width: 35%; height: 35%; margin-bottom: 5%; margin-top: 5%">
  </div>

  @if (session()->has('success'))
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      @endif

      @if (session()->has('loginError'))
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            {{ session('loginError') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      @endif
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Login Sebagai Admin</p>

      <form action="/login" method="post">
        @csrf
        <div class="form-floating">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
        </div>
        <div class="form-floating">
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password" required>
                <i class="toggle-password fas fa-eye-slash" style="position: absolute; top: 61%; right: 30px; transform: translateY(-50%); cursor: pointer;" onclick="togglePassword()"></i>          
        </div>
        <div class="row">
          <div class="col-8">
          </div>
        </div>
      </form>

      {{-- <div class="form-group mt-2 mb-2">
        <div class="captcha">
            <span>{!! captcha_img('math') !!}</span>
            <button type="button" class="btn btn-danger reload" id="reload">&#x21bb;</button>
        </div>
        <input type="text" class="form-control" name="captcha" id="captcha" placeholder="Enter Captcha">
        @error('captcha')
            <label for="" class="text-danger">{{ $message }}</label>
        @enderror
      </div> --}}

      <div class="social-auth-links text-center mb-3">
        <button type="submit" class="btn btn-danger" style="width: 100%;">Sign Up</button>
      </div>
      <!-- /.social-auth-links -->

      {{-- <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p> --}}
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="{{ asset('AdminLTE-3.2.0/plugins/jquery/jquery.min.js') }}"></script>
<!-- Bootstrap 4 -->
<script src="{{ asset('AdminLTE-3.2.0/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('AdminLTE-3.2.0/dist/js/adminlte.min.js') }}"></script>
<script>
    function togglePassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}
</script>
{{-- <script>
  $('#reload').click(function(){
    $.ajax({
      type:'GET',
      url:'reload-captcha',
      success:function(data){
        $(".captcha span").html(data.captcha)
      }
    });
  });
</script> --}}
</body>
</html>
