@extends('layouts.admin')

@section('content')

<div class="content">
<div class="card">
    <div class="card-header">
      <a href="/pegawai/create" class="btn btn-success">+ Tambah Pegawai</a>
      <div class="card-tools">
        <form action="/pegawai/search" class="form-inline" method="GET">
          {{-- <label for="sort_by">Urutkan berdasarkan:</label> --}}
          {{-- <select name="sort_by" id="sort_by">
            <i class="fa-solid fa-sort-down"></i>
              <option value="name">Nama</option>
              <option value="jabatan">Jabatan</option>
          </select>   --}}
          <input type="search" id="searchInput" name="search" class="form-control float-right" placeholder="Cari (Nama, Jabatan, Instansi)">
            
          <div class="input-group-append">
            <button type="submit" class="btn btn-default">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
    <!-- /.card-header -->
    
    @if (count($pegawai) > 0)
    <div class="card-body table-responsive p-0">
      <table id="dataTable" class="table table-hover">
        <thead>
          <tr>  
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Tempat Lahir</th>
            <th scope="col">Tanggal Lahir</th>
            <th scope="col">Jabatan</th>
            <th scope="col">Instansi</th>
            {{-- <th scope="col">Penandatanganan Sertifikat</th>
            <th scope="col">Tanggal Pelaksanaan</th>
            <th scope="col">Jumlah Jam Pelajaran</th>
            <th scope="col">Instansi Penyelenggara</th>
            <th scope="col">Jenis Diklat</th>
            <th scope="col">Persentase Penilaian</th> --}}
          </tr>
        </thead>
        <?php $i = 1; ?>
        @foreach ($pegawai as $pegawai)
        <tbody>
            <tr class="clickable-row">
              <td><?= $i; ?></td>
              <td class="wrap-text clickable-cell">{{ $pegawai->name }}</td>
              <td>{{ $pegawai->tempat_lahir }}</td>
              <td>{{ $pegawai->tanggal_lahir }}</td>
              <td class="wrap-text">{{ $pegawai->jabatan }}</td>
              <td class="wrap-text">{{ $pegawai->instansi }}</td>
              {{-- <td>{{ $pegawai->penandatanganan_sertifikat }}</td>
              <td>{{ $pegawai->tanggal_pelaksanaan }}</td>
              <td>{{ $pegawai->jumlah_jam_pelajaran }}</td>
              <td>{{ $pegawai->instansi_penyelenggara }}</td>
              <td>{{ $pegawai->jenis_diklat }}</td>
              <td>{{ $pegawai->persentase_penilaian }}</td> --}}
              <td><a href="/pegawai/{{ $pegawai->id }}/delete" class="btn btn-danger" onclick="return confirm('Apakah yakin {{ $pegawai->name }} ingin dihapus?');"> <i class="fas fa-trash"></i></a><a href="/pegawai/{{ $pegawai->id }}/show" class="btn btn-info"> <i class="fas fa-eye"></i></a></td>
            </tr>
            <?php $i++; ?>    
            @endforeach
        </tbody>
      </table>
      {{-- <div class="card-tools">
        <ul class="pagination pagination-sm float-right">
          <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
        </ul>
      </div> --}}
      @else
      <p>Tidak ada hasil yang ditemukan.</p>
  @endif
    </div>
    <!-- /.card-body -->
  </div>
</div>
@include('sweetalert::alert')
@endsection