<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Log in</title>

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
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Login Sebagai Admin</p>

      <form action="../../index3.html" method="post">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" id="username" placeholder="Username">
        </div>
        <div class="form-group">
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                <i class="toggle-password fas fa-eye-slash" style="position: absolute; top: 56%; right: 30px; transform: translateY(-50%); cursor: pointer;" onclick="togglePassword()"></i>          
        </div>
        <div class="row">
          <div class="col-8">
          </div>
        </div>
      </form>

      <div class="form-group mt-2 mb-2">
        <div class="captcha">
            <span>{!! captcha_img() !!}</span>
            <button type="button" class="btn btn-danger"></button>
        </div>
      </div>

      <div class="social-auth-links text-center mb-3">
        <a href="#" class="btn btn-block btn-danger"> Sign up
        </a>
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
</body>
</html>
