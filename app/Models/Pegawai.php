<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    // protected $fillable = ['name', 'tempat_lahir', 'tanggal_lahir', 'jabatan', 'instansi', 'penandatanganan_sertifikat', 'tanggal_pelaksanaan', 'jumlah_jam_pelajaran', 'instansi_penyelenggara', 'jenis_diklat', 'persentase_penilaian'];
}
