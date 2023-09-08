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
    {{-- select2 --}}
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <style>
        .main{
            background: linear-gradient(135deg, #e70712, #F75D59, #E77471),
        }

    </style>
</head>

<body>

    <!--loader end-->
    <!--header section start-->
    <header id="header" class="header-main">
        <!--topbar start-->

        <!--topbar end-->

        <!--main header menu start-->
        <div id="logoAndNav" class="main-header-menu-wrap white-bg border-bottom">
            <div class="container">

            </div>
        </div>
        <!--main header menu end-->
    </header>
    <!--header section end-->

    <div class="main">
        <!--hero section start-->
        <section class="hero-equal-height ptb-100 gradient-overlay gradient-bg">
            <div class="container">
                <div class="row align-items-center justify-content-between">

                    <div class="col-lg-6 col-12">
                        <div class="hero-content-wrap text-white">
                            <img src="{{ asset('AdminLTE-3.2.0/docs/assets/img/logo-kemen.png') }}" alt="" class="img-fluid" style="margin-bottom: 5%; width: 20%; height: 20%; align-items: center;">
                            <h1 class="text-white">DATA SERTIFIKAT
                                DIKLAT APARATUR DAMKAR</h1>
                            <p class="lead">Lorem psum dolor sit amet consectetur adipisicing elit. Suscipit molestiae odit iure. Distinctio culpa sint iusto nesciunt voluptates quas! Ipsum ab exercitationem minima dicta accusamus doloribus provident ipsam, placeat necessitatibus?i</p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-12">
                        <div class="animation-image-wrap">
                            <img src="{{ asset('AdminLTE-3.2.0/docs/assets/img/LOGO-DAMKAR.png') }}" alt="wp hosting" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

     <div class="card-body">
        <div class="row">
            <div class="col-md-12">
            <h5>Filter</h5>
            </div>
            <form action="" class="form-inline col-lg-12" method="GET">

            <div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
                <label for="name">Nama</label>
                <input type="search" name="name" value="{{ @old('name') }}" id="filter_name" class="form-control filter" style="border: 1px solid black;">
            </div>
            <div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
                <label for="instansi">Instansi</label>
                <input type="search" name="instansi" value="{{ @old('instansi') }}" id="filter_instansi" class="form-control filter" style="border: 1px solid black;">
            </div>
            <div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
                <label for="kode_verifikasi">Kode Verifikasi</label>
                <input type="search" name="kode_verifikasi" value="{{ @old('kode_verifikasi') }}" id="filter_kode_verifikasi" class="form-control filter" style="border: 1px solid black;">
            </div>
            <div class="form-group col-sm-2" style="padding-left: 15px; padding-right: 15px;">
                <label for="province_id">Provinsi</label>
                <select id="filter_province_id" class="form-control filter" style="border: 1px solid black;" name="province_id">
                    <option value="">-- select --</option>
                    @foreach($provinces as $province)
                    <option value="{{ $province->id }}">{{ $province->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>
     </div>
     {{-- data table start--}}
     <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <div class="card-tools">

                  <div class="input-group-append col-md-12">
                        <button type="submit" class="btn btn-primary">Cari</button>
                  </div>
              </form>
              </div>

            </div>
            <!-- /.card-header -->
            @if (@old('name') || @old('instansi') || @old('kode_verifikasi') || @old('province_id'))

            @if ($pegawai->count() > 0)
            <div class="card-body table-responsive bordered-table p-0" style="height: 300px; width: 100%">
              <table class="table table-head-fixed">
                <thead>
                  <tr>
                    <th>No</th>
                    <th style="width: 20%">Kode Verifikasi</th>
                    <th style="width: 20%">Nama</th>
                    <th style="width: 20%">NIK/NIP</th>
                    <th style="width: 20%">Provinsi</th>
                    {{-- <th style="width: 20%">Domisili</th> --}}
                    <th style="width: 20%">Instansi</th>
                    {{-- <th style="width: 20%">Nomor Sertifikat</th>
                    <th style="width: 20%">Jenis Diklat</th>
                    <th style="width: 20%">Tanggal Pelaksanaan</th>
                    <th style="width: 20%">Ditandatangani Oleh</th>
                    <th style="width: 20%">Persentase Penilaian</th> --}}
                  </tr>
                </thead>
                <?php $i = 1; ?>
                @foreach ($pegawai as $index => $pegawaian)
                <tbody>
                  <tr>
                    {{-- <td>{{ $loop->iteration }}</td> --}}
                    <td>{{ $index + $pegawai->firstItem() }}</td>
                    <td class="wrap-text">{{ $pegawaian->kode_verifikasi }}</td>
                    <td class="wrap-text"><a href="{{ route('biodata.show', ['id' => $pegawaian->id]) }}">{{ $pegawaian->name }}</td>
                    <td class="wrap-text">{{ $pegawaian->nik_nip }}</td>
                    <td class="wrap-text">{{ $pegawaian->province->name ?? ' ' }}</td>
                    {{-- <td class="wrap-text">{{ $pegawaian->regency->name ?? ' ' }}</td> --}}
                    <td class="wrap-text">{{ $pegawaian->instansi }}</td>
                    {{-- <td class="wrap-text">{{ $pegawaian->nomor_sertifikat }}</td>
                    <td class="wrap-text">{{ $pegawaian->jenis_diklat }}</td>
                    <td class="wrap-text">{{ $pegawaian->tanggal_pelaksanaan }}</td>
                    <td class="wrap-text">{{ $pegawaian->ditandatangani_oleh }}</td>
                    <td class="wrap-text">{{ $pegawaian->persentase_penilaian }}</td> --}}
                  </tr>
                </tbody>
                <?php $i++; ?>
              @endforeach
              </table>
              <!--pagination start-->
            <div class="row">
                <div class="col-md-12">
                    <nav class="custom-pagination-nav mt-4">
                        <ul class="pagination justify-content-center">
                            <li>{{ $pegawai->appends($_GET)->links() }}</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!--pagination end-->
            </div>
            @else
          <p>Tidak ada hasil yang ditemukan.</p>
          @endif
          @endif

            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
    {{-- data table end --}}

<!--footer section start-->
<footer class="footer-section">
    <!--footer top start-->

    <!--footer top end-->

    <!--footer copyright start-->
    <div class="footer-bottom gray-light-bg py-3">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-5 col-lg-5">
                    <p class="copyright-text pb-0 mb-0">Copyrights © 2023. </p>
                </div>
                {{-- <div class="col-md-7 col-lg-6">
                    <div class="payment-method text-right">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <img src="hostlar/assets/img/payment-amex.svg" alt="amex" width="50" />
                            </li>
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
<script src="../../plugins/jquery/jquery.min.js"></script>
{{-- select2 --}}
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script>
    $(document).ready(function(){
        $("#filter_provinsi").select2({
            placeholder: 'Pilih Provinsi',
            ajax : {
                url: "{{ route('provinsi.index') }}",
                processResults: function({data}){
                    return{
                        results: $.map(data, function(item){
                            return {
                                id: item.id,
                                text: item.name
                            }
                        })
                    }

                }
            }
        });
    });
// filter

// $(".filter").on('change', function(){

// })

</script>

<!--endbuild-->
</body>

</html>





