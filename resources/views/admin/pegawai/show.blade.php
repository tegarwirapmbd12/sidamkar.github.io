@extends('layouts.profil')

@section('content') 

  <!-- Content Wrapper. Contains page content -->
  

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">

            <!-- Profile Image -->
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">

                <h3 class="profile-username text-center">{{ $pegawai->name }}</h3>

                <p class="text-muted text-center">{{ $pegawai->tempat_lahir }}, {{ $pegawai->tanggal_lahir }}</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Jabatan</b>
                    <p class="text-muted">{{ $pegawai->jabatan }}</p>
                  </li>
                  <li class="list-group-item">
                    <b>Instansi</b>
                    <p class="text-muted">{{ $pegawai->instansi }}</p>
                  </li>
                </ul>

                {{-- <a href="/pegawai/{{ $pegawai->id }}/edit" class="btn btn-primary btn-block"><b>Edit</b></a> --}}
              
            </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- About Me Box -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Data Diri</h3>
              </div>
              <!-- /.card-header -->
              
              <div class="card-body">
                <strong>Penandatanganan Sertifikat</strong>

                <p class="text-muted">
                  {{ $pegawai->penandatanganan_sertifikat }}
                </p>

                <hr>

                <strong></i> Tanggal Pelaksanaan</strong>

                <p class="text-muted">{{ $pegawai->tanggal_pelaksanaan }}</p>

                <hr>

                {{-- <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                <p class="text-muted">
                  <span class="tag tag-danger">UI Design</span>
                  <span class="tag tag-success">Coding</span>
                  <span class="tag tag-info">Javascript</span>
                  <span class="tag tag-warning">PHP</span>
                  <span class="tag tag-primary">Node.js</span>
                </p> --}}
                <strong></i> Jumlah Jam Pelajaran</strong>

                <p class="text-muted">{{ $pegawai->jumlah_jam_pelajaran }} Jam</p>


                <hr>

                <strong></i> Instansi Penyelenggara Kegiatan</strong>

                <p class="text-muted">{{ $pegawai->instansi_penyelenggara }}</p>
              
                <hr>

                <strong></i> Jenis Diklat</strong>

                <p class="text-muted">{{ $pegawai->jenis_diklat }}</p>

                <hr>

                <strong>Persentase Penilaian</strong>

                <p class="text-muted">{{ $pegawai->persentase_penilaian }} Persen</p>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
         
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  @endsection
