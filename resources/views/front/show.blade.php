@extends('layouts.front')

@section('contentfront')

    <div class="main">

        <!--page header section start-->
        <section class="page-header-section ptb-100 gradient-overly-right" style="background: url('hostlar/assets/img/hero-14.jpg')no-repeat center center / cover">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7 col-lg-6">
                        <div class="page-header-content text-white">
                            <h1 class="text-white mb-2">BIODATA</h1>
                            <p class="lead">Halaman / Biodata / Tegar Pambudi</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--page header section end-->

        <!--submit request form start-->
        <section class="submit-request-form ptb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-8">
                        <div class="section-heading text-center mb-5">
                            <h2>{{ $pegawai->kode_verifikasi }}</h2>
                            <p class="lead">{{ $pegawai->name }}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <form class="submit-request-form">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <strong>NIK/NIP :</strong>
                                        <p class="text-muted">{{ $pegawai->nik_nip }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <strong>Instansi :</strong>
                                        <p class="text-muted">{{ $pegawai->instansi }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <strong>Provinsi :</strong>
                                        <p class="text-muted">{{ $pegawai->province->name ?? ' ' }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <strong>Domisili :</strong>
                                        <p class="text-muted">{{ $pegawai->regency->name ?? ' ' }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <strong>Nomor Sertifikat :</strong>
                                        <p class="text-muted">{{ $pegawai->nomor_sertifikat }}</p>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <strong>Jenis Diklat :</strong>
                                        <p class="text-muted">{{ $pegawai->jenis_diklat }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <strong>Tanggal Pelaksanaan :</strong>
                                        <p class="text-muted">{{ $pegawai->tanggal_pelaksanaan }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <strong>Ditandatangani Oleh :</strong>
                                        <p class="text-muted">{{ $pegawai->ditandatangani_oleh }}</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <strong>Persentase Penilaian :</strong>
                                        <p class="text-muted">{{ $pegawai->persentase_penilaian }} persen</p>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <button type="button" class="btn primary-solid-btn" id="backButton">Back</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</div>
@endsection

