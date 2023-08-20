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

                {{-- <a href="#settings" class="btn btn-primary btn-block"  data-toggle="tab"><b>Edit</b></a> --}}
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
                <strong><i class="fas fa-book mr-1"></i> Penandatanganan Sertifikat</strong>

                <p class="text-muted">
                  {{ $pegawai->penandatanganan_sertifikat }}
                </p>

                <hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Tanggal Pelaksanaan</strong>

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
                <strong><i class="fas fa-map-marker-alt mr-1"></i> Jumlah Jam Pelajaran</strong>

                <p class="text-muted">{{ $pegawai->jumlah_jam_pelajaran }} Jam</p>


                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Instansi Penyelenggara Kegiatan</strong>

                <p class="text-muted">{{ $pegawai->instansi_penyelenggara }}</p>
              
                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Jenis Diklat</strong>

                <p class="text-muted">{{ $pegawai->jenis_diklat }}</p>

                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Persentase Penilaian</strong>

                <p class="text-muted">{{ $pegawai->persentase_penilaian }} Persen</p>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-9">
            <div class="card">
              
              {{-- form edit --}}
              <div class="card-body">
                <form action="/pegawai/{{ $pegawai->id }}/update" method="POST">
                  {{ csrf_field() }}
                  <div class="form-group">
                      <label class="col-form-label" for="name"></i> Nama</label>
                      <input type="text" class="form-control" id="name" name="name" placeholder="Nama*" value="{{ $pegawai->name }}" required>
                    </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <!-- text input -->
                      <div class="form-group">
                        <label for="tempat_lahir">Tempat Lahir</label>
                        <input type="text" class="form-control" placeholder="Tempat Lahir*" id="tempat_lahir" name="tempat_lahir" value="{{ $pegawai->tempat_lahir }}" required>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="tanggal_lahir">Tanggal Lahir</label>
                        <input type="date" class="form-control" placeholder="Tanggal Lahir*" id="tanggal_lahir" name="tanggal_lahir" value="{{ $pegawai->jumlah_lahir }}" required>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                      <label class="col-form-label" for="jabatan"></i> Jabatan</label>
                      <input type="text" class="form-control" id="jabatan"  name="jabatan" placeholder="Jabatan*" value="{{ $pegawai->jabatan }}" required>
                  </div>
                  <div class="form-group">
                      <label class="col-form-label" for="instansi"></i> Instansi</label>
                      <input type="text" class="form-control" id="instansi"  name="instansi" placeholder="Instansi*" value="{{ $pegawai->instansi }}" required>
                  </div>
                  <div class="form-group">
                      <label class="col-form-label" for="penandatanganan_sertifikat"></i> Penandatanganan Sertifikat</label>
                      <input type="text" class="form-control" id="penandatanganan_sertifikat" name="penandatanganan_sertifikat" placeholder="Penandatanganan Sertifikat*" value="{{ $pegawai->penandatanganan_sertifikat }}" required>
                  </div>
                  <div class="row">
                      <div class="col-sm-6">
                        <!-- text input -->
                        <div class="form-group">
                          <label for="tanggal_pelaksanaan">Tanggal Pelaksanaan</label>
                          <input type="date" class="form-control" placeholder="Tanggal Pelaksanaan*"  id="tanggal_pelaksanaan" name="tanggal_pelaksanaan" value="{{ $pegawai->tanggal_pelaksanaan }}" required>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="jumlah_jam_pelajaran">Jumlah Jam Pelajaran</label>
                          <input type="number" class="form-control" placeholder="Jumlah Jam Pelajaran* (Angka)" id="jumlah_jam_pelajaran" name="jumlah_jam_pelajaran" value="{{ $pegawai->jumlah_jam_pelajaran }}" required>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label" for="instansi_penyelenggara"></i> Instansi Penyelenggara Kegiatan</label>
                      <input type="text" class="form-control" id="instansi_penyelenggara" name="instansi_penyelenggara"  placeholder="Instansi Penyelenggara Kegiatan*" value="{{ $pegawai->instansi_penyelenggara }}" required>
                  </div>
                  <div class="form-group">
                      <label class="col-form-label" for="jenis_diklat"></i> Jenis Diklat</label>
                      <input type="text" class="form-control" id="jenis_diklat"  name="jenis_diklat" placeholder="Jenis Diklat*" value="{{ $pegawai->jenis_diklat }}" required>
                  </div>
                  <div class="form-group">
                      <label class="col-form-label" for="persentase_penilaian"></i> Persentase Penilaian</label>
                      <input type="number" class="form-control" id="persentase_penilaian"  name="persentase_penilaian" placeholder="Persentase Penilaian*" value="{{ $pegawai->persentase_penilaian }}" required>
                  </div>
                  <div class="card-footer">
                      <button type="submit" class="btn btn-primary w-100 align-center">Ubah</button>
                  </div>
              </div>
                </form>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  @endsection
