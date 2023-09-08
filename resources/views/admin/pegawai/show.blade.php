@extends('layouts.admin')

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
                  <p class="text-muted text-center">{{ $pegawai->nik_nip }}</p>
                    <ul class="list-group list-group-unbordered mb-3">
                      <li class="list-group-item">
                        <b>Asal Daerah</b>
                        <p class="text-muted">{{ $pegawai->regency->name ?? ' ' }}, {{ $pegawai->province->name ?? ' ' }}</p>
                      </li>
                      <li class="list-group-item">
                        <b>Instansi</b>
                        <p class="text-muted">{{ $pegawai->instansi }}</p>
                      </li>
                    </ul>
                <a href="/pegawai/{{ $pegawai->id }}/edit" class="btn btn-primary btn-block"><b>Edit</b></a>
              </div>
            </div>

            <!-- About Me Box -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Data Diri</h3>
              </div>
              <div class="card-body">
                    <strong>Kode Verifikasi</strong>
                    <p class="text-muted">{{ $pegawai->kode_verifikasi }}</p>
                <hr>
                    <strong></i>Nomor Sertifikat</strong>
                    <p class="text-muted">{{ $pegawai->nomor_sertifikat }}</p>
                <hr>
                    <strong></i>Jenis Diklat</strong>
                    <p class="text-muted">{{ $pegawai->jenis_diklat }} Jam</p>
                <hr>
                    <strong></i>Tanggal Pelaksanaan</strong>
                    <p class="text-muted">{{ $pegawai->tanggal_pelaksanaan }}</p>
                <hr>
                    <strong></i>Ditandatangani Oleh</strong>
                    <p class="text-muted">{{ $pegawai->ditandatangani_oleh }}</p>
                <hr>
                    <strong>Persentase Penilaian</strong>
                    <p class="text-muted">{{ $pegawai->persentase_penilaian }} %</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->

  <!-- /.content-wrapper -->
  @endsection
