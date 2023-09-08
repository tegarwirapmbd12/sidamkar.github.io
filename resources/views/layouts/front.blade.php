<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- SEO Meta description -->
    <meta name="description" content="Hostlar hosting template designed for all web hosting, business, multi purpose, domain sale websites, online business, personal hosting company and similar sites and many more.">
    <meta name="author" content="ThemeTags">

    <!-- OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ -->
    <meta property="og:site_name" content="" /> <!-- website name -->
    <meta property="og:site" content="" /> <!-- website link -->
    <meta property="og:title" content="" /> <!-- title shown in the actual shared post -->
    <meta property="og:description" content="" /> <!-- description shown in the actual shared post -->
    <meta property="og:image" content="" /> <!-- image link, make sure it's jpg -->
    <meta property="og:url" content="" /> <!-- where do you want your post to link to -->
    <meta property="og:type" content="article" />

    <!--favicon icon-->
    <link rel="icon" href="{{ asset('hostlar/assets/img/favicon.png') }}" type="image/png" sizes="16x16">

    <!--google fonts-->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!--title-->
    <title>Data Sertifikat Diklat Aparatur Pegawai</title>

    <!--build:css-->
    <link rel="stylesheet" href="{{ asset('hostlar/assets/css/main.css') }}">
    <!-- endbuild -->
    <link rel="stylesheet" href="{{ asset('hostlar/assets/css/custom.css') }}">
    <style>
        .main{
            background: linear-gradient(135deg, #e70712, #F75D59, #E77471),
        }
        .wrapped-cell {
        word-wrap: break-word; /* Mengatur wrapping teks */
        }
    </style>
</head>

<body>

    <!--loader start-->
    <div id="preloader">
        <div class="loader1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

      <!--header section start-->
      <header id="header" class="header-main">
        <!--topbar start-->
        
        <!--topbar end-->

        <!--main header menu start-->
        <div id="logoAndNav" class="main-header-menu-wrap white-bg border-bottom">
            <div class="container">
                <nav class="js-mega-menu navbar navbar-expand-md header-nav">

                    <!--logo start-->
                    <a class="navbar-brand" href="index.html"><img src="{{ asset('AdminLTE-3.2.0/docs/assets/img/LOGO-DAMKAR.png') }}" width="70px" alt="logo" class="img-fluid" /></a>

                    
                </nav>
            </div>
        </div>
        <!--main header menu end-->
    </header>
    <!--header section end-->


@yield('contentfront')



    

    <!--footer section start-->
    <footer class="footer-section">
        <!--footer top start-->
        
        <!--footer top end-->

        <!--footer copyright start-->
        <div class="footer-bottom gray-light-bg py-3">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-5 col-lg-5">
                        <p class="copyright-text pb-0 mb-0">Copyrights © 2023.
                        </p>
                    </div>
                    {{-- <div class="col-md-7 col-lg-6">
                        <div class="payment-method text-right">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <img src="hostlar/assets/img/payment-visa.svg" alt="visa" width="50" />
                                </li>
                                <li class="list-inline-item">
                                    <img src="hostlar/assets/img/payment-mastercard.svg" alt="mastercard" width="50" />
                                </li>
                                <li class="list-inline-item">
                                    <img src="hostlar/assets/img/payment-paypal.svg" alt="paypal" width="50" />
                                </li>
                                <li class="list-inline-item">
                                    <img src="hostlar/assets/img/payment-bitcoin.svg" alt="bitcoin" width="50" />
                                </li>
                            </ul>
                        </div>
                    </div> --}}
                </div>
            </div>
        </div>
        
        <!--footer copyright end-->
    </footer>

    <!--footer section end-->
    <!--bottom to top button start-->
    <button class="scroll-top scroll-to-target" data-target="html">
        <span class="ti-rocket"></span>
    </button>
    <!--bottom to top button end-->
    <!--build:js-->
    <script src="{{ asset('hostlar/assets/js/vendors/jquery-3.5.1.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/bootstrap-slider.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/jquery.countdown.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/jquery.easing.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/validator.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/jquery.waypoints.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/jquery.rcounterup.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/magnific-popup.min.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/vendors/hs.megamenu.js') }}"></script>
    <script src="{{ asset('hostlar/assets/js/app.js') }}"></script>
    <script>
        const backButton = document.getElementById('backButton');
    
        backButton.addEventListener('click', function() {
            history.back(); // Mengarahkan ke halaman sebelumnya dalam riwayat browsing
        });
    </script>
    <!--endbuild-->
</body>

</html>
