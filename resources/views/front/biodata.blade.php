@extends('layouts.front')

@section('contentfront')

    <div class="main">

        <!--page header section start-->
        <section class="page-header-section ptb-100 gradient-overly-right" style="background: url('hostlar/assets/img/hero-14.jpg')no-repeat center center / cover">
            <div class="container">
              <form action="/biodata/search" method="GET">
                <div class="row align-items-center">
                    <div class="col-md-7 col-lg-6">
                        <div class="page-header-content text-white">
                            <h1 class="text-white mb-2">DATA SERTIFIKAT 
                                DIKLAT APARATUR DAMKAR</h1>
                            <p class="lead">Halaman / biodata</p>
                        </div>
                    </div>
                </div>
              </form>
            </div>
        </section>
        <!--page header section end-->

        {{-- data table start--}}
        <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
  
                  <div class="card-tools">
                    <form action="/biodata" class="form-inline" method="GET">
                      @csrf
                    <div class="input-group input-group-sm" style="width: 50%;">
                      <input type="search" name="search" id="searchInput" class="form-control float-right" placeholder="Masukkan Kata Kunci (Nama, Jabatan atau Instansi)">
  
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  </div>
                </div>
                <!-- /.card-header -->

                @if (count($pegawai) > 0)
                <div class="card-body table-responsive p-0" style="height: 300px;">
                  <table class="table table-head-fixed">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th style="width: 20%">Nama</th>
                        <th style="width: 20%">Tempat Lahir</th>
                        <th style="width: 20%">Tanggal Lahir</th>
                        <th style="width: 20%">Jabatan</th>
                        <th style="width: 20%">Instansi</th>
                      </tr>
                    </thead>
                    <?php $i = 1; ?>
                    @foreach ($pegawai as $pegawai)
                    <tbody>
                      <tr>
                        <td><?= $i; ?></td>
                        <td class="wrap-text"><a href="{{ route('biodata.show', ['id' => $pegawai->id]) }}">{{ $pegawai->name }}</td>
                        <td class="wrap-text">{{ $pegawai->tempat_lahir }}</td>
                        <td class="wrap-text">{{ $pegawai->tanggal_lahir }}</td>
                        <td class="wrap-text">{{ $pegawai->jabatan }}</td>
                        <td class="wrap-text">{{ $pegawai->instansi }}</td>
                      </tr>
                    </tbody>
                    <?php $i++; ?>    
                  @endforeach
                  </table>
                  <!--pagination start-->
                {{-- <div class="row">
                    <div class="col-md-12">
                        <nav class="custom-pagination-nav mt-4">
                            <ul class="pagination justify-content-center">
                                <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-left"></span></a></li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-right"></span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div> --}}
                <!--pagination end-->
                </div>
                @else
              <p>Tidak ada hasil yang ditemukan.</p>
              @endif
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
          </div>
        {{-- data table end --}}
        

                

            </div>
        </section>
        <!--blog section end-->

    </div>

    <!--footer section start-->
    
@endsection
        <!--footer top end-->

        <!--footer copyright start-->
      